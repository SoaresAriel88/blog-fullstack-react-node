import Post from "../models/post.js";
import sequelize from "../database/configDB.js";

export async function createTable() {
  await sequelize.sync();
}

export async function insertPosts(post) {
  return await Post.create(post);
}

export async function updatePosts(post) {
  const fields = { title: post.title, body: post.body };
  if (post.cover) fields.cover = post.cover;
  return await Post.update(fields, { where: { id: post.id } });
}

export async function selectPosts() {
  return await Post.findAll({ order: [["id", "DESC"]] });
}

export async function selectByPost(id) {
  return await Post.findByPk(id);
}

export async function deletePost(id) {
  return await Post.destroy({ where: { id } });
}
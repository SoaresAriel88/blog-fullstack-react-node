import { DataTypes } from "sequelize";
import sequelize from "../database/configDB.js";

const Post = sequelize.define("Post", {
  title: { type: DataTypes.TEXT, allowNull: false },
  body:  { type: DataTypes.TEXT, allowNull: false },
  cover: { type: DataTypes.TEXT, allowNull: true }
}, { timestamps: false });

export default Post;
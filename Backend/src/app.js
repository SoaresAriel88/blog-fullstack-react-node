import {
  createTable,
  insertPosts,
  updatePosts,
  selectPosts,
  selectByPost,
  deletePost
} from "./repositories/postRepository.js";

import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
  
    const uniqueName = crypto.randomUUID() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

await createTable();

app.get("/", (req, res) => {
  res.json({ message: "API rodando 🚀" });
});

// CRIA POST
app.post("/posts", upload.single("cover"), async (req, res) => {
  try {
    const { title, body } = req.body;

   
    if (!title || !body) {
      return res.status(400).json({ message: "title e body são obrigatórios" });
    }

    const cover = req.file?.filename || null;

    const result = await insertPosts({ title, body, cover });

    res.json({
      statusCode: 200,
      id: result.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// ATUALIZA POST
app.put("/posts/:id", upload.single("cover"), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    
    if (!title || !body) {
      return res.status(400).json({ message: "title e body são obrigatórios" });
    }

    const dadosParaAtualizar = {
      id,
      title,
      body,
      cover: req.file?.filename,
    };

    const [updated] = await updatePosts(dadosParaAtualizar);

   
    if (updated === 0) {
      return res.status(404).json({ message: "Post não encontrado" });
    }

    res.json({
      statusCode: 200,
      changes: updated,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// SELECIONA TODOS OS POSTS
app.get("/posts", async (req, res) => {
  try {
    const posts = await selectPosts();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// GET POR ID
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await selectByPost(id);

    if (!post) {
      return res.status(404).json({ message: "Post não encontrado" });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

// DELETE
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deletePost(id);

   
    if (deleted === 0) {
      return res.status(404).json({ message: "Post não encontrado" });
    }

    res.json({
      statusCode: 200,
      message: "Post deletado com sucesso",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
});

app.listen(3002, () => {
  console.log("Servidor rodando na porta 3002");
});
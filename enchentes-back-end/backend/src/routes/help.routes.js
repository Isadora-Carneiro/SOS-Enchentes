const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// listar
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM help_requests");
  res.json(result.rows);
});

// criar
router.post("/", async (req, res) => {
  const { nome, cidade, descricao } = req.body;

  if (!nome || !cidade || !descricao) {
    return res.status(400).json({ error: "Campos obrigatórios" });
  }

  await pool.query(
    "INSERT INTO help_requests (nome, cidade, descricao) VALUES ($1, $2, $3)",
    [nome, cidade, descricao]
  );

  res.status(201).json({ message: "Criado com sucesso" });
});

module.exports = router;
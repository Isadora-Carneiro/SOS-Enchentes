const express = require("express");
const router = express.Router();
const pool = require("../config/db");

//
// GET - buscar pedidos
//
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM help_requests ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
  console.log("ERRO REAL:", error);
  res.status(500).json({ error: error.message });
}
});

//
// POST - salvar pedido de ajuda
//
router.post("/", async (req, res) => {
  const { nome, telefone, cidade, descricao } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO help_requests (nome, telefone, cidade, descricao)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [nome, telefone, cidade, descricao]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Erro ao salvar pedido de ajuda" });
  }
});

module.exports = router;
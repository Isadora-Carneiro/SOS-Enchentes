const express = require("express");
const { Pool } = require("pg");


const app = express();
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  password: "7418520963",
  host: "localhost",
  database: "sos_enchente",
  port: 5432,
});

app.get("/help_requests", async (req, res) => {
  const result = await pool.query("SELECT * FROM help_requests");
  res.json(result.rows);
});

app.post("/help_requests", async (req, res) => {
  const { nome, cidade, descricao } = req.body;

  await pool.query(
    "INSERT INTO help_requests (nome, cidade, descricao) VALUES ($1, $2, $3)",
    [nome, cidade, descricao]
  );

  res.sendStatus(201);
});

module.exports = app;
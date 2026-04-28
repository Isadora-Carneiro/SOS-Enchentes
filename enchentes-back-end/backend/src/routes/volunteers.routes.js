const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "VOLUNTEERS funcionando 🤝" });
});

module.exports = router;
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "DONATIONS funcionando 💰" });
});

module.exports = router;
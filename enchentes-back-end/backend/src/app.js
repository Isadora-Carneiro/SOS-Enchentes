const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/help_requests", require("./routes/help.routes"));

module.exports = app;
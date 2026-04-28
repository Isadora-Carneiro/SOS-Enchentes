require("dotenv").config();
const app = require("./src/app");

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
});
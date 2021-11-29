const express = require("express");
const app = express();
const cors = require("cors");
const { newSpot } = require("./databases/mariadb");
require("./databases/mariadb");
app.use(express.json());
app.use(cors());
app.post("/spot/POST", (req, res) => {
  newSpot(req.body).then(res.json({ data: "Formulaire valide" }));
});
app.listen(3000, () => {
  console.log("serveur ok sur localhost:3000");
});

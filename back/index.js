const express = require("express");
const app = express();
const cors = require("cors");
const { newSpot } = require("./databases/mariadb");
const { siteDispo } = require("./databases/mariadb");
require("./databases/mariadb");
app.use(express.json());
app.use(cors());
app.post("/spot/", (req, res) => {
  newSpot(req.body).then(res.json({ data: "Formulaire valide" }));
});
app.get("/spot/", (req, res) => {
  siteDispo().then((spot) => res.send(spot));
});
app.listen(3000, () => {
  console.log("serveur ok sur localhost:3000");
});

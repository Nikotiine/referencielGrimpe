const express = require("express");
const app = express();
const cors = require("cors");
const { newSpot } = require("./databases/mariadb");
const { siteDispo } = require("./databases/mariadb");
const { showIndex } = require("./databases/mariadb");
const { delelteSite } = require("./databases/mariadb");
const { modifSite } = require("./databases/mariadb");
require("./databases/mariadb");
app.use(express.json());
app.use(cors());
app.post("/spot/", (req, res) => {
  newSpot(req.body).then(res.json({ data: "Formulaire valide" }));
});
app.get("/spot/", (req, res) => {
  siteDispo().then((spot) => res.send(spot));
});
app.get("/spot/:id", (req, res) => {
  showIndex(req.params.id).then((index) => res.send(index));
});
app.delete("/spot/:id", (req, res) => {
  delelteSite(req.params.id)
    .then((sup) => res.send(sup))
    .then(res.json({ data: "site supprime" }));
});
app.put("/spot/:id", (req, res) => {
  modifSite(req.body, req.params.id).then(
    res.json({ data: "formulaire modifié" })
  );
});
app.listen(3000, () => {
  console.log("serveur ok sur localhost:3000");
});

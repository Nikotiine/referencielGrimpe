const express = require("express");
const app = express();
const cors = require("cors");
const { newSpot } = require("./databases/mariadb");
const { siteDispo } = require("./databases/mariadb");
const { showIndex } = require("./databases/mariadb");
const { delelteSite } = require("./databases/mariadb");
const { modifSite } = require("./databases/mariadb");
const { newUser } = require("./databases/userCreat");
const { loginUser } = require("./databases/userCreat");
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
app.post("/newuser/", (req, res) => {
  newUser(req.body).then((user) => {
    //res.send(patate);

    const [result, created] = user;
    if (created === true) {
      res.json({ data: "Utilisateur enregisté" });
    } else {
      res.status(400).json({ data: "deja utiliser" });
    }
  });
  //.catch((err) => res.send(err));
});
app.post("/login/", (req, res) => {
  loginUser(req.body).then((login) => {
    if (login === null) {
      res.status(400).json({ data: "faux" });
    } else {
      res.json({ data: "ok" });
    }
  });
});
app.listen(3000, () => {
  console.log("serveur ok sur localhost:3000");
});

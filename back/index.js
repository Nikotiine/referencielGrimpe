const express = require("express");
const app = express();
const cors = require("cors");
const { showTable } = require("./databases/dataSite");
const { newSpot } = require("./databases/dataSite");
const { showOneSpot } = require("./databases/dataSite");
const { delSpot } = require("./databases/dataSite");
const { editSite } = require("./databases/dataSite");
// const { newUser } = require("./databases/userCreat");
// const { loginUser } = require("./databases/userCreat");
// const { showUser } = require("./databases/userCreat");
// const { newCroix } = require("./databases/croixCreat");
// const { showRout } = require("./databases/croixCreat");
// const { getRout } = require("./databases/croixCreat");
require("./databases/launch_db");
app.use(express.json());
app.use(cors());
app.post("/spot/", (req, res) => {
  newSpot(req.body)
    .then((newSpotCreat) => res.json({ data: newSpotCreat }))
    .catch((err) => res.json({ data: err }));
});

app.get("/spot/", (req, res) => {
  showTable()
    .then((oneSpot) => res.json({ data: oneSpot }))
    .catch((err) => res.json(err));
});

app.get("/spot/:id", (req, res) => {
  showOneSpot(req.params.id).then((index) => res.send(index));
});

app.delete("/spot/:id", (req, res) => {
  delSpot(req.params.id)
    .then((del) => res.json({ data: del }))
    .catch((err) => res.json(err));
});
app.put("/spot/:id", (req, res) => {
  editSite(req.body, req.params.id).then(
    res.json({ data: "formulaire modifié" })
  );
});
// app.post("/newuser/", (req, res) => {
//   newUser(req.body).then((user) => {
//     //res.send(patate);

//     const [result, created] = user;
//     if (created === true) {
//       res.json({ data: "Utilisateur enregisté" });
//     } else {
//       res.status(400).json({ data: "deja utiliser" });
//     }
//   });
//   //.catch((err) => res.send(err));
// });
// app.post("/login/", (req, res) => {
//   loginUser(req.body).then((login) => {
//     if (login === null) {
//       res.status(400).json({ data: "badId" });
//     } else {
//       res.send(login);
//     }
//   });
// });
// app.get("/userId/:id", (req, res) => {
//   showUser(req.params.id).then((id) => res.send(id));
// });
// app.post("/croix/", (req, res) => {
//   newCroix(req.body).then((dataCroix) => {
//     const [result, created] = dataCroix;
//     if (created === true) {
//       res.json({ data: "Utilisateur enregisté" });
//     } else {
//       res.status(400).json({ data: "deja utiliser" });
//     }
//   });
// });
// app.get("/rout/:id", (req, res) => {
//   showRout(req.params.id).then((rout) => {
//     //const { count, rows } = rout;
//     //res.json({ data: count });
//     res.json({ data: rout });
//   });
// });
// app.get("/getcroix/:id", (req, res) => {
//   getRout(req.params.id).then((data) => res.json(data));
// });

app.listen(3000, () => {
  console.log("serveur ok sur localhost:3000");
});

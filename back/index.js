const express = require("express");
const app = express();
const cors = require("cors");
const { showTable } = require("./databases/spotCreat");
const { newSpot } = require("./databases/spotCreat");
const { showOneSpot } = require("./databases/spotCreat");
const { delSpot } = require("./databases/spotCreat");
const { editSite } = require("./databases/spotCreat");
const { newUser } = require("./databases/userCreat");
const { loginUser } = require("./databases/userCreat");
const { showUser } = require("./databases/userCreat");
const { newRout } = require("./databases/routCreat");
const { showAllRout } = require("./databases/routCreat");
// const { getRout } = require("./databases/croixCreat");
const { newCroix } = require("./databases/croixCreat");
require("./databases/launch_db");
app.use(express.json());
app.use(cors());
//---------------------------add spot ------------------------
app.post("/spot/", (req, res) => {
  newSpot(req.body)
    .then((newSpotCreat) => {
      const { result, created } = newSpotCreat;
      if (created === true) {
        res.json({ data: "spot created" });
      } else {
        res.status(400).json({ data: "spot already exist" });
      }
    })
    .catch((err) => res.json({ data: err }));
});

app.get("/spot/", (req, res) => {
  showTable()
    .then((oneSpot) => res.json({ data: oneSpot }))
    .catch((err) => res.json(err));
});

app.get("/spot/:id", (req, res) => {
  showOneSpot(req.params.id)
    .then((index) => res.json({ data: index }))
    .catch((err) => res.json({ data: err }));
});

app.delete("/spot/:id", (req, res) => {
  delSpot(req.params.id)
    .then((del) => res.json({ data: del }))
    .catch((err) => res.json(err));
});
app.put("/spot/:id", (req, res) => {
  editSite(req.body, req.params.id)
    .then((edit) => res.json({ data: edit }))
    .catch((err) => res.json({ data: err }));
});

//---------------------------add user ------------------------
app.post("/newuser/", (req, res) => {
  newUser(req.body)
    .then((user) => {
      const [result, created] = user;
      if (created === true) {
        res.json({ data: created });
      } else {
        res.status(400).json({ data: "deja utiliser" });
      }
    })
    .catch((err) => res.send(err));
});
app.post("/login/", (req, res) => {
  loginUser(req.body).then((login) => {
    if (login === null) {
      res.status(400).json({ data: "badId" });
    } else {
      res.send(login);
    }
  });
});

app.get("/userId/:id", (req, res) => {
  showUser(req.params.id).then((user) => res.json({ data: user }));
});

//---------------------------add rout ------------------------
app.post("/rout/", (req, res) => {
  newRout(req.body).then((dataRout) => {
    const [result, created] = dataRout;
    if (created === true) {
      res.json({ data: created });
    } else {
      res.status(400).json({ data: "deja utiliser" });
    }
  });
});
app.get("/rout/:id", (req, res) => {
  showAllRout(req.params.id).then((allRout) => res.json({ data: allRout }));
});

//---------------------------add croix ------------------------
app.post("/croix/", (req, res) => {
  newCroix(req.body).then((dataCroix) => {
    const [result, created] = dataCroix;
    if (created === true) {
      res.json({ data: created });
    } else {
      res.status(400).json({ data: "Already croited" });
    }
  });
});
app.listen(3000, () => {
  console.log("serveur ok sur localhost:3000");
});

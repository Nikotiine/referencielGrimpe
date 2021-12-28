const localS = localStorage.getItem("prenom");
const sendId = localStorage.getItem("id");
const prenom = document.querySelector(".localStore");
const dash = document.getElementById("dashboard");
let routData = [];
let spotname = [];
prenom.innerHTML = `<p><a class="isOnclick" onclick="homePage(sendId)">${localS}</a></p>`;

function deco() {
  window.location.href = "/index.html";
  localStorage.clear();
}

function homePage(sendId) {
  window.location.href = "/acceuil/home.html?id=" + sendId;
}

const findSpot = async () => {
  await fetch("http://localhost:3000/getcroix/" + sendId)
    .then((res) => res.json())
    .then((data) => (spotname = data));
  console.log(spotname);
};

const dashboard = async () => {
  findSpot();
  console.log(spotname);
};
dashboard();
/*const routlog = async () => {
  await fetch("http://localhost:3000/rout/" + sendId)
    .then((res) => res.json())
    .then((rout) => (routData = rout))
    .catch((err) => console.log(err));
};

const dashboard = async () => {
  await routlog();
  console.log(routData);
  //const { count, rows } = routData.data;

  //const idspot = rows.map((spotid) => spotid.id);
   await fetch("http://localhost:3000/spot/")
    .then((res) => res.json())
    .then((spotid) => (spotname = spotid));
  console.log(spotname);
  const niko = spotname.map((toto) => toto.spotName);
  console.log(niko);*/
//console.log(rows);
/*dash.innerHTML = rows
    .map(
      (rout) =>
        `<div class="isFlexRaw"><div><p></div><div><p>${rout.routName} </p></div><div><p>${rout.realisation} </p></div></div>`
    )
    .join("");
};
dashboard();*/

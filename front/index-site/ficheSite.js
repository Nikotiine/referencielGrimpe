const navbar = document.querySelector(".divNavbar");
const prenom = document.querySelector(".localStore");
const localS = localStorage.getItem("prenom");
const sendId = localStorage.getItem("id");
(() => {
  if (localS === null) {
    window.location.href = "/index.html";
  }
})();
prenom.innerHTML = `<p><a class="isOnclick" onclick="homePage(sendId)">${localS}</a></p>`;
function deco() {
  window.location.href = "/index.html";
  localStorage.clear();
}
function homePage(sendId) {
  window.location.href = "/acceuil/home.html?id=" + sendId;
}
window.addEventListener("scroll", () => {
  if (!window.scrollY > 68) {
    navbar.style.opacity = "0.9";
  }
});
// --------------------------- Fetch Get ---------------------------------------------------
let rechercheId = window.location.search;

const id = rechercheId.slice(4);
const ficheSite = document.getElementById("detailSpot");
let monspot = [];

const spot = async () => {
  await fetch("http://localhost:3000/spot/" + id)
    .then((res) => res.json())
    .then((data) => (monspot = data.data));
  ficheSite.innerHTML = `<h1>${monspot.spotName}</h1></br>
  <p>Localisation: <span>${monspot.nearHome}</span></br>
  Saison conseillée: <span>${monspot.printemps ? "Printemps " : ""}${
    monspot.ete ? "Ete " : ""
  }${monspot.automne ? "Automne " : ""}${
    monspot.hiver ? "Hiver " : ""
  }</span></br>
  Exposition:<span> ${monspot.est ? "Est " : ""}${monspot.sud ? "Sud " : ""}${
    monspot.ouest ? "Ouest " : ""
  }${monspot.nord ? "Nord" : ""}</span></br></p>

  <p>Taille du site: <span>${monspot.tailleSite} voies</span></br>
  Ticket d'entrée: <span>${monspot.niveau}</span></br>
  hauteur des voies: <span>${monspot.heightRout} metres</span></br>
  Type d'equipement: <span>${monspot.equipment}</span></br>
  Type de Rocher: <span>"type de rocher"</span></p>
  <p>temps d'approche:<span> ${monspot.approchTime} minutes</span></br>
  type d'approche: <span>${monspot.approchType}</span></p>
  
  <p>Geoloc du parking: ${
    monspot.positionPark ? monspot.positionPark.coordinates[0] : ""
  } , ${monspot.positionPark ? monspot.positionPark.coordinates[1] : ""}
  </br>Geoloc du squatt a camion: ${
    monspot.positionSQuatt ? monspot.positionSQuatt.coordinates[0] : "-----"
  } , ${
    monspot.positionSQuatt ? monspot.positionSQuatt.coordinates[1] : "-----"
  }
  <br><div>Confort du squatt: <ul><li>${
    monspot.commodite ? "Toilettes pratiques " : "Toilettes galeres"
  }</li><li>${monspot.freshWater ? "Eau potable a proximite " : " "}</li><li> ${
    monspot.eauPasLoin ? "Riviere ou lac a proximite " : " "
  }</li><li> ${
    monspot.reseau ? "4g a balle" : "Pas assez de reseau"
  }</li></ul></div><div>
  <input type="button" value="modifier" onclick="modifsite(${
    monspot.id
  })" name="${monspot.id}" title="modifier la page du site"></div>`;
  coordonees();
};
spot();
//------------------------------------------------fin-------fetch get---------------------------------->>>>>>
//----------------------------------carte gps--------------------------->>>>>
let macarte = null;

function coordonees() {
  const lat = monspot.positionPark.coordinates[0];
  const lon = monspot.positionPark.coordinates[1];
  console.log(monspot.positionSQuatt);

  initMap(lat, lon);
  setMarker(lat, lon);
  if (monspot.positionSQuatt !== null) {
    setMarker(
      monspot.positionSQuatt.coordinates[0],
      monspot.positionSQuatt.coordinates[1]
    );
  }
}

// Fonction d'initialisation de la carte
function initMap(lat, lon) {
  macarte = L.map("map").setView([lat, lon], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    attribution:
      'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20,
  }).addTo(macarte);
}

// Fonction pour mettre un marker
function setMarker(lat, lon) {
  L.marker([lat, lon]).addTo(macarte);
}
function valideFormulaire() {
  var x = document.getElementById("reponse3");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
    window.location.reload();
  }, 3000);
}
//--------------------------------------------fin maps------------------------------------------------
const formModif = document.querySelector(".isHidden");

function modifsite(id) {
  formModif.style.display = "flex";
  ficheSite.style.display = "none";
  document.getElementById("map").style.display = "none";

  datavalue();
}
const modifok = () => {
  const point = {
    type: "Point",
    coordinates: [
      document.getElementById("gpsoui").value,
      document.getElementById("gpsoui2").value,
    ],
  };
  const point2 = {
    type: "Point",
    coordinates: [
      document.getElementById("gpsnon").value,
      document.getElementById("gpsnon2").value,
    ],
  };
  const datam = {
    positionPark: point,
    positionSQuatt: point2,
    spotName: document.getElementById("site").value,
    heightRout: document.getElementById("appro").value,
    approchTime: document.getElementById("hauteur").value,
    nearHome: document.getElementById("Emplacement").value,
    hiver: document.getElementById("hiver").checked,
    ete: document.getElementById("ete").checked,
    automne: document.getElementById("automne").checked,
    printemps: document.getElementById("printemps").checked,
    nord: document.getElementById("nord").checked,
    sud: document.getElementById("sud").checked,
    est: document.getElementById("est").checked,
    ouest: document.getElementById("ouest").checked,
    commodite: document.getElementById("toiletteA").checked,
    freshWater: document.getElementById("eaupotable").checked,
    eauPasLoin: document.getElementById("rivlac").checked,
    resau: document.getElementById("reseau").checked,
    approchType: document.getElementById("typeapproche").value,
    niveau: document.getElementById("niveau").value,
    tailleSite: document.getElementById("nombreVoie").value,
  };

  fetch("http://localhost:3000/spot/" + id, {
    method: "PUT",
    body: JSON.stringify(datam),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => valideFormulaire());
};
const annule = () => {
  formModif.style.display = "none";
  window.location.reload();
};
function datavalue() {
  document.getElementById("niveau").value = monspot.niveau;
  document.getElementById("nombreVoie").value = monspot.tailleSite;
  document.getElementById("typeapproche").value = monspot.approchType;
  document.getElementById("appro").value = monspot.approchTime;
  document.getElementById("hauteur").value = monspot.heightRout;
  document.getElementById("site").value = monspot.spotName;
  document.getElementById("Emplacement").value = monspot.nearHome;
  document.getElementById("hiver").checked = monspot.hiver;
  document.getElementById("printemps").checked = monspot.printemps;
  document.getElementById("ete").checked = monspot.ete;
  document.getElementById("automne").checked = monspot.automne;
  document.getElementById("equipement").value = monspot.equipment;
  document.getElementById("nord").checked = monspot.nord;
  document.getElementById("sud").checked = monspot.sud;
  document.getElementById("est").checked = monspot.est;
  document.getElementById("ouest").checked = monspot.ouest;
  document.getElementById("toiletteA").checked = monspot.commodite;
  document.getElementById("reseau").checked = monspot.resau;
  document.getElementById("rivlac").checked = monspot.eauPasLoin;
  document.getElementById("eaupotable").checked = monspot.freshWater;
  document.getElementById("gpsoui").value = monspot.positionPark.coordinates[0];
  document.getElementById("gpsoui2").value =
    monspot.positionPark.coordinates[1];
  if (monspot.positionSQuatt !== null) {
    document.getElementById("gpsnon").value =
      monspot.positionSQuatt.coordinates[0];
    document.getElementById("gpsnon2").value =
      monspot.positionSQuatt.coordinates[1];
  }
}
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const formulaire = document.querySelector("form");

const parking1 = document.getElementById("poui");
const parking2 = document.getElementById("pnon");

parking1.addEventListener("input", (e) => {
  if (e.target.checked === true) {
    document.querySelector(".gps2").style.display = "none";
  }
});
parking2.addEventListener("input", (e) => {
  if (e.target.checked === true) {
    document.querySelector(".gps").style.display = "flex";
    document.querySelector(".gps2").style.display = "flex";
  }
});
//----------------------fin fetch put------------------------------------------>>>>>>>

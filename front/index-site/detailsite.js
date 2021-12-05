const buttonnav = document.getElementById("buttonOpenClose");
const navbar = document.getElementById("navbar");

buttonnav.addEventListener("click", () => {
  if (navbar.style.left === "10px") {
    navbar.style.left = "-300px";
  } else {
    navbar.style.left = "10px";
  }
});
//-----------------------------navbar--------------------------------
//-----------------------------------------------fetch get---------------------------->>>>>>>>>>
let rechercheId = window.location.search;
console.log(rechercheId);
const id = rechercheId.slice(4);
const ficheSite = document.getElementById("detailSpot");
let showSpot = [];

const detail = async () => {
  await fetch("http://localhost:3000/spot/" + id)
    .then((res) => res.json())
    .then((data) => (showSpot = data));
};

const vueSite = async () => {
  await detail();
  ficheSite.innerHTML = `<h1>${showSpot.spotName}</h1></br><h2>Localistaion: ${
    showSpot.nearHome
  }</h2>
  <p>hauteur des voies: ${showSpot.heightRout}
  </br>temps d'approche: ${showSpot.approchTime}</br>
  type d'approche: ${showSpot.approchType}</br>
  Exposition: ${showSpot.est ? "Est " : ""}${showSpot.sud ? "Sud " : ""}${
    showSpot.ouest ? "Ouest " : ""
  }${showSpot.nord ? "Nord" : ""}</br>
  Saison conseillée: ${showSpot.printemps ? "Printemps " : ""}${
    showSpot.ete ? "Ete " : ""
  }${showSpot.automne ? "Automne " : ""}${showSpot.hiver ? "Hiver " : ""}</br>
  Type d'equipement: ${showSpot.equipment}</br>

  </p>
  <p>Geoloc du parking: ${
    showSpot.positionPark ? showSpot.positionPark.coordinates[0] : ""
  } , ${showSpot.positionPark ? showSpot.positionPark.coordinates[1] : ""}
  </br>Geoloc du squatt a camion: ${
    showSpot.positionSQuatt ? showSpot.positionSQuatt.coordinates[0] : "-----"
  } , ${
    showSpot.positionSQuatt ? showSpot.positionSQuatt.coordinates[1] : "-----"
  }
  <br>Confort du squatt: ${
    showSpot.commodite ? "Toilettes pratiques " : "Toilettes galeres"
  } ${showSpot.freshWater ? "Eau potable a proximite " : " "} ${
    showSpot.eauPasLoin ? "Riviere ou lac a proximite " : " "
  } ${showSpot.reseau ? "4g a balle" : "Pas assez de reseau"}</br>
  <input type="button" value="modifier" onclick="modifsite(${
    showSpot.id
  })" name="${showSpot.id}" title="modifier la page du site">`;
  coordonees();
};
vueSite();

//------------------------------------------------fin-------fetch get---------------------------------->>>>>>

//-----------------fetch put ------------------------------->>>>>
const formModif = document.getElementById("modif");

function modifsite(id) {
  formModif.style.display = "flex";
  ficheSite.style.display = "none";

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
  };
  console.log(datam);
  fetch("http://localhost:3000/spot/" + id, {
    method: "PUT",
    body: JSON.stringify(datam),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(
      (res) =>
        (document.getElementById("reponse").innerHTML = `<h2>${res.data}</h2>`)
    );
  setTimeout(function () {
    window.location.reload();
  }, 2000);
};
const annule = () => {
  formModif.style.display = "none";
  window.location.reload();
};
function datavalue() {
  document.getElementById("typeapproche").value = showSpot.approchType;
  document.getElementById("appro").value = showSpot.approchTime;
  document.getElementById("hauteur").value = showSpot.heightRout;
  document.getElementById("site").value = showSpot.spotName;
  document.getElementById("Emplacement").value = showSpot.nearHome;
  document.getElementById("hiver").checked = showSpot.hiver;
  document.getElementById("printemps").checked = showSpot.printemps;
  document.getElementById("ete").checked = showSpot.ete;
  document.getElementById("automne").checked = showSpot.automne;
  document.getElementById("equipement").value = showSpot.equipment;
  document.getElementById("nord").checked = showSpot.nord;
  document.getElementById("sud").checked = showSpot.sud;
  document.getElementById("est").checked = showSpot.est;
  document.getElementById("ouest").checked = showSpot.ouest;
  document.getElementById("toiletteA").checked = showSpot.commodite;
  document.getElementById("reseau").checked = showSpot.resau;
  document.getElementById("rivlac").checked = showSpot.eauPasLoin;
  document.getElementById("eaupotable").checked = showSpot.freshWater;
  document.getElementById("gpsoui").value =
    showSpot.positionPark.coordinates[0];
  document.getElementById("gpsoui2").value =
    showSpot.positionPark.coordinates[1];
  if (showSpot.positionSQuatt !== null) {
    document.getElementById("gpsnon").value =
      showSpot.positionSQuatt.coordinates[0];
    document.getElementById("gpsnon2").value =
      showSpot.positionSQuatt.coordinates[1];
  }
}
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const formulaire = document.querySelector("form");

const parking1 = document.getElementById("poui");
const parking2 = document.getElementById("pnon");

parking1.addEventListener("input", (e) => {
  if (e.target.checked === true) {
    document.getElementById("gps2").style.display = "none";
  }
});
parking2.addEventListener("input", (e) => {
  if (e.target.checked === true) {
    document.getElementById("gps").style.display = "block";
    document.getElementById("gps2").style.display = "block";
  }
});
//----------------------fin fetch put------------------------------------------>>>>>>>
//----------------------------------carte gps--------------------------->>>>>
let macarte = null;

function coordonees() {
  const lat = showSpot.positionPark.coordinates[0];
  const lon = showSpot.positionPark.coordinates[1];
  console.log(showSpot.positionSQuatt);

  initMap(lat, lon);
  setMarker(lat, lon);
  if (showSpot.positionSQuatt !== null) {
    setMarker(
      showSpot.positionSQuatt.coordinates[0],
      showSpot.positionSQuatt.coordinates[1]
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

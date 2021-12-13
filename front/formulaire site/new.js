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

formulaire.addEventListener("submit", (e) => {
  // Recuperer tous les elements du formulaire a cet endroit
  e.preventDefault();

  const hauteur = document.getElementById("hauteur").value;
  const name = document.querySelector('input[type="text"]').value;
  const approch = document.getElementById("approche").value;
  const typeappro = document.getElementById("typeapproche").value;
  const equipement = document.getElementById("equipement").value;
  const localisation = document.getElementById("Emplacement").value;
  const nord = document.getElementById("nord").checked;
  const sud = document.getElementById("sud").checked;
  const est = document.getElementById("est").checked;
  const ouest = document.getElementById("ouest").checked;
  const printemps = document.getElementById("printemps").checked;
  const ete = document.getElementById("ete").checked;
  const automne = document.getElementById("automne").checked;
  const hiver = document.getElementById("hiver").checked;
  const toiletteOk = document.getElementById("toiletteA").checked;

  const eauPotable = document.getElementById("eaupotable").checked;
  const riviere = document.getElementById("rivlac").checked;
  const resau = document.getElementById("reseau").checked;

  const longitude = document.getElementById("gpsoui2").value;
  const latitude = document.getElementById("gpsoui").value;
  const latitude2 = document.getElementById("gpsnon").value;
  const longitude2 = document.getElementById("gpsnon2").value;
  const point = { type: "Point", coordinates: [latitude, longitude] };
  const point2 = { type: "Point", coordinates: [latitude2, longitude2] };
  const data = {
    spotName: name,
    heightRout: hauteur,
    approchTime: approch,
    approchType: typeappro,
    equipment: equipement,
    nearHome: localisation,
    positionPark: point,
    positionSQuatt: point2,
    hiver: hiver,
    printemps: printemps,
    ete: ete,
    automne: automne,
    commodite: toiletteOk,
    resau: resau,
    eauPasLoin: riviere,
    freshWater: eauPotable,
    nord: nord,
    sud: sud,
    est: est,
    ouest: ouest,
    niveau: document.getElementById("niveau").value,
    tailleSite: document.getElementById("nombreVoie").value,
  };
  console.log(data);
  fetch("http://localhost:3000/spot/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => valideFormulaire());
});
function valideFormulaire() {
  var x = document.getElementById("reponse");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
    window.location.reload();
  }, 3000);
}

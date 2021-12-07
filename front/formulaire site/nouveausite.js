const buttonnav = document.getElementById("buttonOpenClose");
const navbar = document.getElementById("navbar");
const name = document.querySelector('input[type="text"]').value;
buttonnav.addEventListener("click", () => {
  // navbar.style.left = navbar.style.left === '10px' ? '-200px' : '10px';
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
});
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
/*function getLabelCheck(checkbox) {
  if (checkbox.checked === true) {
    return document.querySelector(`label[for="${checkbox.id}"]`).textContent;
  }else{
    return '';
  }
}*/
/*function getCheckboxes() {
  const list = [];
  for (let check of checkboxes) {
    console.log(check);
    const labelCheck = document.querySelector(
      `label[for="${check.id}"]`
    ).textContent;
    list.push({ [labelCheck]: check.checked });
  }
  return list;
}*/

formulaire.addEventListener("submit", (e) => {
  // Recuperer tous les elements du formulaire a cet endroit
  e.preventDefault();
  // autre possibilite pour recuperer l'element : formulaire.elements['approche'].value ------------entre[] c'est le "name" de l'input
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
  //const regexlatitude = /^[+-]?(([1-8]?[0-9])(\,[0-9]{1,6})?|90(\.0{1,6})?)$/;
  //const regexlongitude =
  //  /^[+-]?((([1-9]?[0-9]|1[0-7][0-9])(\,[0-9]{1,6})?)|180(\.0{1,6})?)$/;
  /*if (!regexlatitude.test(latitude) || !regexlongitude.test(longitude)) {
    document.getElementById("gpsoui").style.border = "2px solid red";
    document.getElementById("gpsoui2").style.border = "2px solid red";
    return;
  } else {
    document.getElementById("gpsoui").style.border = "2px solid #63ff91";
    document.getElementById("gpsoui2").style.border = "2px solid #63ff91";
  }
  if (!regexlatitude.test(latitude2) && !regexlongitude.test(longitude2)) {
    document.getElementById("gpsnon").style.border = "2px solid red";
    document.getElementById("gpsnon2").style.border = "2px solid red";
  } else {
    document.getElementById("gpsnon").style.border = "2px solid #63ff91";
    document.getElementById("gpsnon2").style.border = "2px solid #63ff91";
  }*/
  // classique : nommer les variables js en camelCase : eauPotable / eauPapotable
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
/*checkboxes.forEach((a) => {
    if (a.checked === true) {
      checkL =
        checkL +
        " " +
        document.querySelector(`label[for="${a.id}"]`).textContent;
    }
  });*/

const buttonnav = document.getElementById("buttonOpenClose");
const navbar = document.getElementById("navbar");
const name = document.querySelector('input[type="text"]').value;
buttonnav.addEventListener("click", () => {
  // navbar.style.left = navbar.style.left === '10px' ? '-200px' : '10px';
  if (navbar.style.left === "10px") {
    navbar.style.left = "-300px";
  } else {
    navbar.style.left = "10px";
  }
});
//let checkL = "";

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

/*function toilette() {
  console.log(toiletteA);
  if (toiletteA.checked === true && toiletteB.checked === true) {
    alert("non tu peux pas faire caca partout");
  }
}*/
/*toiletteA.addEventListener("input", (e) => {
  if (e.target.checked === true) {
    toiletteB.disabled = true;
  } else {
    toiletteB.disabled = false;
  }
});
toiletteB.addEventListener("input", (e) => {
  if (e.target.checked === true) {
    toiletteA.disabled = true;
  } else {
    toiletteA.disabled = false;
  }
});*/

/*function getLabelCheck(checkbox) {
  if (checkbox.checked === true) {
    return document.querySelector(`label[for="${checkbox.id}"]`).textContent;
  }else{
    return '';
  }
}*/
/*function labelCheck(checkbox) {
  if (checkbox.checked === true) {
    return document.querySelector(`label[for="${checkbox.id}"]`).textContent;
  } else {
    return "";
  }
}
let saison1 = labelCheck(document.getElementById("printemps"));
let saison2 = labelCheck(document.getElementById("ete"));
let saison3 = labelCheck(document.getElementById("automne"));
let saison4 = labelCheck(document.getElementById("hiver"));*/
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
  //toilette();
  //name.value;
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
  /*let saison1 = labelCheck(document.getElementById("printemps"));
  let saison2 = labelCheck(document.getElementById("ete"));
  let saison3 = labelCheck(document.getElementById("automne"));
  let saison4 = labelCheck(document.getElementById("hiver"));
  let popook = labelCheck(toiletteA);
  let popopaok = labelCheck(toiletteB);
  let reseau = labelCheck(document.getElementById("reseau"));
  let eaupotable = labelCheck(document.getElementById("eaupotable")); // classique : nommer les variables js en camelCase : eauPotable / eauPapotable
  let eaupapotable = labelCheck(document.getElementById("rivlac"));*/
  const longitude = document.getElementById("gpsoui2").value;
  const latitude = document.getElementById("gpsoui").value;
  const latitude2 = document.getElementById("gpsnon").value;
  const longitude2 = document.getElementById("gpsnon2").value;

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
  const point = { type: "Point", coordinates: [latitude, longitude] };
  const point2 = { type: "Point", coordinates: [latitude2, longitude2] };
  //const gps2 = { type: "Point", coordinates: [latitude2, longitude2] };
  /*document.querySelector(".detailSite").className = "detailSite SiteOk";
  document.getElementById(
    "newsite"
  ).innerHTML = ` <h1>Detail du Site </h1> </br> <h2> ${name} <br/> </h2> <p> Lieu : ${localisation} <br/> <p/> <p> Hauteur: ${hauteur} metres <br/> </p> Temps d'approche :${approch} minutes 
  <br />Type d'approche :${typeappro} <br/> Exposé :${exposi}<br/> Equipé :${equipement} <br/> </p> <p>
  Saison(s) adequate(s): </br>${saison1} <br/> ${saison2} <br/> ${saison3} <br/> ${saison4}</p> `;
  document.getElementById(
    "confort"
  ).innerHTML = `<p><h2> confort:</h2><br/>  ${popook}<br/> ${popopaok}<br/>${reseau}<br/>${eaupapotable}<br/>${eaupotable} </p>`;

  if (regexlongitude.test(longitude) && regexlatitude.test(latitude)) {
    // pas logique
    positionGps.innerHTML = `<p>Position GPS parking</br>Longitude :${longitude} </br>Latitude : ${latitude}<p/>`;
    positionGps.classList.remove("error");
  } else {
    // du coup
    positionGps.innerHTML = `<h2>Coordonnées GPS invalides </h2>`; // pas de fin de h2 ?
    positionGps.classList.add("error"); // mieux: mettre une classe css .has-error avec color:red qui soit réutilisable
  }
  if (parking2.checked === false) {
    return;
  }
  if (!longitude2 || !latitude2) {
    // if(!longitude ou !latitude). sinon privilégier les equalités strictes ( === )
    positionGps2.innerHTML = `<h2>Merci de renseigner les coordonnees gps</h2>`; // early return, le if suivant peut etre un if() et non un else if. (équivalent)
  } else if (regexlongitude.test(longitude2) && regexlatitude.test(latitude2)) {
    positionGps2.innerHTML = `<p>Position GPS du squatt</br>Longitude :${longitude2} </br>Latitude : ${latitude2}<p/>`;
    positionGps2.classList.remove("error");
  } else {
    positionGps2.innerHTML = `<h2>Coordonnee Gps invalide</h2>`;
    positionGps2.classList.add("error");
  }*/
  /*const list = getCheckboxes();
  console.log(list);*/
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
  };
  console.log(data);
  fetch("http://localhost:3000/spot/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then(
      (res) =>
        (document.getElementById("reponse").innerHTML = `<h2>${res.data}</h2>`)
    );
});
/*let niko = "";
  if (eaupotable.checked === true) {
    niko = "eau potable";
  }*/

//let eauPotableLabel = getLabelCheck(document.getElementById("eaupotable"));
//let toiletteLabel = getLabelCheck(toiletteA);
//let eauRiviere = getLabelCheck(document.getElementById("eauRiviere"));

//.log(toiletteA.);
//const checkbox = formulaire.elements["toiletteA"];

/*checkboxes.forEach((a) => {
    if (a.checked === true) {
      checkL =
        checkL +
        " " +
        document.querySelector(`label[for="${a.id}"]`).textContent;
    }
  });*/

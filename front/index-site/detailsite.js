let rechercheId = window.location.search;
console.log(rechercheId);
const id = rechercheId.slice(4);
console.log(id);
const ficheSite = document.getElementById("detailSpot");
let showSpot = [];

const detail = async () => {
  await fetch("http://localhost:3000/spot/" + id)
    .then((res) => res.json())
    .then((data) => (showSpot = data));
  console.log(showSpot);
};

const niko = async () => {
  await detail();
  ficheSite.innerHTML = `<h1>${showSpot.spotName}</h1><p>hauteur des voies:${showSpot.heightRout}</br>temps d'approche:${showSpot.approchTime}`;
};
niko();

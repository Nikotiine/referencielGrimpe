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
  ficheSite.innerHTML = `<h1>${showSpot.spotName}</h1><p>hauteur des voies:${showSpot.heightRout}
  </br>temps d'approche:${showSpot.approchTime}</br>
  <input type="button" value="modifier" onclick="modifsite(${showSpot.id})" name="${showSpot.id}" title="modifier la page du site"></p>`;
};
vueSite();

const formModif = document.getElementById("modif");

function modifsite(id) {
  formModif.style.display = "flex";

  modifok = () => {
    const name = document.getElementById("site").value;
    const appro = document.getElementById("appro").value;
    const hauteur = document.getElementById("hauteur").value;
    const datam = {
      spotName: name,
      heightRout: hauteur,
      approchTime: appro,
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
          (document.getElementById(
            "reponse"
          ).innerHTML = `<h2>${res.data}</h2>`)
      );
    location.reload;
  };
  annule = () => {
    formModif.style.display = "none";
    location.reload;
  };

  /*fetch("http://localhost:3000/spot/" + id, {
    method: "PUT",
  }).then((res) => res.json());*/
}

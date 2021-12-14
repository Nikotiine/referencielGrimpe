const siteDisPlay = document.getElementById("SiteDisplay");
let listSpot = [];

const fetchSpot = async () => {
  await fetch("http://localhost:3000/spot/")
    .then((res) => res.json())
    .then((data) => (listSpot = data));
};

const spotDisplay = async () => {
  await fetchSpot();
  //const bestSaison =(saison)=>{}

  siteDisPlay.innerHTML = listSpot
    .map(
      (nomdusite) =>
        `<tr><td><a href="detailsite.html?id=${nomdusite.id}">${
          nomdusite.spotName
        }</a></td><td class="hidden320">${nomdusite.nearHome}</td>
        <td>${nomdusite.heightRout}</td><td>${nomdusite.approchTime}</td>
        <td>${nomdusite.nord ? "Nord " : ""}${nomdusite.sud ? "Sud " : ""}${
          nomdusite.est ? "Est " : ""
        }${nomdusite.ouest ? "Ouest" : ""}</td><td class="hidden320">${
          nomdusite.equipment
        }</td>
        <td class="hidden320">${nomdusite.hiver ? "hiver/" : ""}${
          nomdusite.ete ? "ete/" : ""
        }${nomdusite.automne ? "automne/" : ""}${
          nomdusite.printemps ? "printemps" : ""
        }</td><td class="hidden">${
          nomdusite.tailleSite
        }</td><td class="hidden">${
          nomdusite.niveau
        }<td class="hidden"><input type="button" onclick="momo(${
          nomdusite.id
        })" value="delete" name="${nomdusite.id}" title="Supprimer le site ${
          nomdusite.spotName
        }"></td>
        </tr>`
    )

    .join("");
};
spotDisplay();

function momo(popo) {
  //let popo = event.target.name;
  const modal = document.getElementById("myModal");
  const delok = document.getElementById("deleteYes");
  const delNO = document.getElementById("deleteNone");
  const span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  delok.addEventListener("click", () => {
    fetch("http://localhost:3000/spot/" + popo, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => {
        modal.style.display = "none";
        valideFormulaire();
      });
  });
  delNO.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
function valideFormulaire() {
  var x = document.getElementById("reponse2");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
    window.location.reload();
  }, 2000);
}

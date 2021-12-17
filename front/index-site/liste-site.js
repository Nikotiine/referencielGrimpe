const winterLogo = '<i class="fas fa-snowflake"></i>';
const springLogo = '<i class="fas fa-seedling"></i>';
const summerLogo = '<i class="fas fa-sun"></i>';
const fallLogo = '<i class="fab fa-canadian-maple-leaf"></i>';
const siteDisPlay = document.getElementById("SiteDisplay");
let listSpot = [];
const navbar = document.querySelector(".divNavbar");
function goHome() {
  window.location.href = "/index.html";
}
window.addEventListener("scroll", () => {
  if (window.scrollY > 68) {
    navbar.style.opacity = "0.9";
  } else {
    navbar.style.opacity = "0.6";
  }
});

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
        `<tr><td><a href="ficheSite.html?id=${nomdusite.id}">${
          nomdusite.spotName
        }</a></td><td class="hidden320 hidden600">${nomdusite.nearHome}</td>
        <td>${nomdusite.heightRout}</td><td>${nomdusite.approchTime}</td>
        <td>${nomdusite.nord ? "Nord " : ""}${nomdusite.sud ? "Sud " : ""}${
          nomdusite.est ? "Est " : ""
        }${nomdusite.ouest ? "Ouest" : ""}</td><td class="hidden320">${
          nomdusite.equipment
        }</td>
        <td class="hidden">${nomdusite.hiver ? "hiver -" : ""}${
          nomdusite.ete ? "ete -" : ""
        }${nomdusite.automne ? "automne -" : ""}${
          nomdusite.printemps ? "printemps" : ""
        }</td><td class="showLogo">${nomdusite.hiver ? winterLogo : ""}${
          nomdusite.printemps ? springLogo : ""
        }${nomdusite.ete ? summerLogo : ""}${nomdusite.automne ? fallLogo : ""}
        <td class="hidden">${nomdusite.tailleSite}</td><td class="hidden">${
          nomdusite.niveau
        }<td><input type="button" id="btnDel" onclick="supSite(${
          nomdusite.id
        })" value="Sup." name="${nomdusite.id}" title="Supprimer le site ${
          nomdusite.spotName
        }"></td>
        </tr>`
    )

    .join("");
};
spotDisplay();

function supSite(index) {
  //let index = event.target.name;
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
    fetch("http://localhost:3000/spot/" + index, { method: "DELETE" })
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

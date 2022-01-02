const winterLogo = '<i class="fas fa-snowflake"></i>';
const springLogo = '<i class="fas fa-seedling"></i>';
const summerLogo = '<i class="fas fa-sun"></i>';
const fallLogo = '<i class="fab fa-canadian-maple-leaf"></i>';
const siteDisPlay = document.getElementById("SiteDisplay");
const navbar = document.querySelector(".divNavbar");
const prenom = document.querySelector(".localStore");
const localS = localStorage.getItem("prenom");
const sendId = localStorage.getItem("id");
let listSpot = [];

prenom.innerHTML = `<p><a class="isOnclick" onclick="homePage(sendId)">${localS}</a></p>`;
function deco() {
  window.location.href = "/index.html";
  localStorage.clear();
}
function homePage(sendId) {
  window.location.href = "/acceuil/home.html?id=" + sendId;
}
(() => {
  if (localS === null) {
    window.location.href = "/index.html";
  }
})();
function newSpot() {
  window.location.href = "/formulaireSite/new-spot.html";
}
window.addEventListener("scroll", () => {
  if (window.scrollY > 68) {
    navbar.style.opacity = "0.9";
  } else {
    navbar.style.opacity = "0.6";
  }
});

(async () => {
  await fetch("http://localhost:3000/spot/")
    .then((res) => res.json())
    .then((data) => (listSpot = data.data));
  siteDisPlay.innerHTML = listSpot
    .map(
      (listSpot) =>
        `<tr><td><a href="ficheSite.html?id=${listSpot.id}">${
          listSpot.spotName
        }</a></td><td class="hidden320 hidden600">${listSpot.nearHome}</td>
        <td>${listSpot.heightRout}</td><td>${listSpot.approchTime}</td>
        <td>${listSpot.nord ? "Nord " : ""}${listSpot.sud ? "Sud " : ""}${
          listSpot.est ? "Est " : ""
        }${listSpot.ouest ? "Ouest" : ""}</td><td class="hidden320">${
          listSpot.equipment
        }</td>
        <td class="hidden">${listSpot.hiver ? "hiver -" : ""}${
          listSpot.ete ? "ete -" : ""
        }${listSpot.automne ? "automne -" : ""}${
          listSpot.printemps ? "printemps" : ""
        }</td><td class="showLogo">${listSpot.hiver ? winterLogo : ""}${
          listSpot.printemps ? springLogo : ""
        }${listSpot.ete ? summerLogo : ""}${listSpot.automne ? fallLogo : ""}
        <td class="hidden">${listSpot.tailleSite}</td><td class="hidden">${
          listSpot.niveau
        }<td><input type="button" id="btnDel" onclick="supSite(${
          listSpot.id
        })" value="Sup." name="${listSpot.id}" title="Supprimer le site ${
          listSpot.spotName
        }"></td>
        </tr>`
    )

    .join("");
})();

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

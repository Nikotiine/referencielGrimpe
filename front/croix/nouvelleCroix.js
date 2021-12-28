const prenom = document.querySelector(".localStore");
const localS = localStorage.getItem("prenom");
const sendId = localStorage.getItem("id");
const formulaireCroix = document.querySelector("form");
const travail = document.getElementById("essai");
const essai = document.getElementById("essais");
const spot = document.getElementById("nomSite");
let listSpot = [];

console.log(listSpot);
prenom.innerHTML = `<p><a class="isOnclick" onclick="homePage(sendId)">${localS}</a></p>`;
function deco() {
  window.location.href = "/index.html";
  localStorage.clear();
}
function homePage(sendId) {
  window.location.href = "/acceuil/home.html?id=" + sendId;
}
function verifUser() {
  if (localS === null) {
    window.location.href = "/index.html";
  }
}
verifUser();
travail.addEventListener("input", (e) => {
  if (e.target.checked === true) {
    essai.disabled = false;
  }
});
const fetchName = async () => {
  await fetch("http://localhost:3000/spot/")
    .then((res) => res.json())
    .then((data) => (listSpot = data));
};
const siteName = async () => {
  await fetchName();

  spot.innerHTML = listSpot
    .map(
      (dataspot) =>
        `
        <option value="${dataspot.id}">${dataspot.spotName}</option>`
    )
    .join("");
};
siteName();

formulaireCroix.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataCroix = {
    routName: document.getElementById("rout").value,
    routCotation1: document.getElementById("degre").value,
    routCotation2: document.getElementById("degreL").value,
    routProfil: document.getElementById("profil").value,
    realisation: document.querySelector('input[type="radio"]:checked').value,
    essai: essai.value,
    degaines: document.getElementById("paires").value,
    effort: document.querySelector('input[type="checkbox"]:checked').value,
    routHeight: document.getElementById("longueur").value,
    commentaires: document.getElementById("remarque").value,
    userId: sendId,
    climbingSpotId: spot.value,
  };

  fetch("http://localhost:3000/croix/", {
    method: "POST",
    body: JSON.stringify(dataCroix),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
});

const prenom = document.querySelector(".localStore");
const localS = localStorage.getItem("prenom");
const sendId = localStorage.getItem("id");
const formulaireVoie = document.querySelector("form");

const spot = document.getElementById("nomSite");
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

(async () => {
  await fetch("http://localhost:3000/spot/")
    .then((res) => res.json())
    .then((data) => (listSpot = data));
  spot.innerHTML = listSpot
    .map(
      (dataspot) =>
        `
        <option value="${dataspot.id}">${dataspot.spotName}</option>`
    )
    .join("");
})();

formulaireVoie.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataCroix = {
    name: document.getElementById("rout").value,
    cotation1: document.getElementById("degre").value,
    cotation2: document.getElementById("degreL").value,
    profil: document.getElementById("profil").value,
    degaines: document.getElementById("paires").value,
    effort: document.querySelector('input[type="checkbox"]:checked').value,
    height: document.getElementById("longueur").value,
    spotId: spot.value,
    equipement: document.querySelector('input[type="radio]:checked').value,
  };

  fetch("http://localhost:3000/rout/", {
    method: "POST",
    body: JSON.stringify(dataCroix),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
});

const prenom = document.querySelector(".localStore");
const localS = localStorage.getItem("prenom");
const sendId = localStorage.getItem("id");
const spot = document.getElementById("nomSite");
const rout = document.getElementById("routeName");
const formNewCroix = document.querySelector("form");
const essai = document.getElementById("essai");
const radioBtn1 = document.getElementById("flash");
const radioBtn2 = document.getElementById("avue");
const nombreEssai = document.getElementById("nombreEssai");
let listSpot = [];
let listRout = [];

prenom.innerHTML = `<p><a class="isOnclick" onclick="homePage(sendId)">${localS}</a></p>`;
function deco() {
  window.location.href = "/index.html";
  localStorage.clear();
}
function homePage(sendId) {
  window.location.href = "/acceuil/home.html?id=" + sendId;
}
/*(() => {
  if (localS === null) {
    window.location.href = "/index.html";
  }
})();*/
function newRout() {
  window.location.href = "/croix/nouvelleVoie.html";
}
const spotName = async () => {
  await fetch("http://localhost:3000/spot/")
    .then((res) => res.json())
    .then((data) => (listSpot = data.data));
};
const routName = async () => {
  await fetch("http://localhost:3000/rout/")
    .then((res) => res.json())
    .then((data) => (listRout = data.data));
};
const selectCroix = async () => {
  await spotName();
  await routName();
  console.log(listSpot);
  spot.innerHTML = listSpot.map(
    (listSpot) => `<option value="${listSpot.id}">${listSpot.spotName}</option>`
  );
  rout.innerHTML = listRout.map(
    (listRout) => `<option value="${listRout.id}"}>${listRout.name}</option>`
  );
};
selectCroix();
essai.addEventListener("click", (e) => {
  if (e.target.checked === true) {
    nombreEssai.disabled = false;
  }
});
radioBtn2.addEventListener("click", (e) => {
  if (e.target.checked === true) {
    nombreEssai.disabled = true;
  }
});
radioBtn1.addEventListener("click", (e) => {
  if (e.target.checked === true) {
    nombreEssai.disabled = true;
  }
});
function addNewCroix() {}

formNewCroix.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataCroix = {
    date: document.getElementById("date").value,
    realisation: document.querySelector('input[type="radio"]:checked').value,
    essai: document.getElementById("nombreEssai").value,
    post: document.getElementById("com").value,
    like: document.getElementById("like").checked,
  };
  fetch("http://locahost:3000/croix/"),
    {
      method: "POST",
      body: JSON.stringify(dataCroix),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
});

const buttonnav = document.getElementById("buttonOpenClose");
const navbar = document.getElementById("navbar");
const siteDisPlay = document.getElementById("siteDisplay");
buttonnav.addEventListener("click", () => {
  if (navbar.style.left === "10px") {
    navbar.style.left = "-300px";
  } else {
    navbar.style.left = "10px";
  }
});
//----------------------------------navbar----------------------------------------
let listSpot = [];

const fetchSpot = async () => {
  await fetch("http://localhost:3000/spot/")
    .then((res) => res.json())
    .then((data) => (listSpot = data));
  console.log(listSpot);
};

const spotDisplay = async () => {
  await fetchSpot();
  siteDisPlay.innerHTML = listSpot.map(
    (nomdusite) => `<p>${nomdusite.spotName},hauteur${nomdusite.heightRout}</p>`
  );
};
spotDisplay();

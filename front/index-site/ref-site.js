const buttonnav = document.getElementById("buttonOpenClose");
const navbar = document.getElementById("navbar");
const siteDisPlay = document.getElementById("SiteDisplay");
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
  //const bestSaison =(saison)=>{}

  siteDisPlay.innerHTML = listSpot
    .map(
      (nomdusite) =>
        `<tr><td><a href="detailsite.html?id=${nomdusite.id}">${
          nomdusite.spotName
        }</a></td><td>${nomdusite.nearHome}</td>
        <td>${nomdusite.heightRout}</td><td>${nomdusite.approchTime}</td>
        <td>${nomdusite.approchType}</td><td>${nomdusite.equipment}</td>
        <td>${nomdusite.hiver ? "hiver/" : ""}${nomdusite.ete ? "ete/" : ""}${
          nomdusite.automne ? "automne/" : ""
        }${nomdusite.printemps ? "printemps" : ""}</td><td>${
          nomdusite.positionPark ? nomdusite.positionPark.coordinates[0] : ""
        } / ${
          nomdusite.positionPark ? nomdusite.positionPark.coordinates[1] : ""
        }</td><td><input type="button" value="&#9760"></td>
        </tr>`
    )
    .join("");
};
spotDisplay();

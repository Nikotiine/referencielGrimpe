const buttonnav = document.getElementById("buttonOpenClose");
const navbar = document.getElementById("navbar");
const siteDisPlay = document.getElementById("SiteDisplay");

buttonnav.addEventListener("click", () => {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
});
//----------------------------------navbar----------------------------------------
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
        }</a></td><td>${nomdusite.nearHome}</td>
        <td>${nomdusite.heightRout}</td><td>${nomdusite.approchTime}</td>
        <td>${nomdusite.nord ? "Nord " : ""}${nomdusite.sud ? "Sud " : ""}${
          nomdusite.est ? "Est " : ""
        }${nomdusite.ouest ? "Ouest" : ""}</td><td>${nomdusite.equipment}</td>
        <td>${nomdusite.hiver ? "hiver/" : ""}${nomdusite.ete ? "ete/" : ""}${
          nomdusite.automne ? "automne/" : ""
        }${nomdusite.printemps ? "printemps" : ""}</td><td>${
          nomdusite.tailleSite
        }</td><td>${nomdusite.niveau}<td><input type="button" onclick="momo(${
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
  const validesupp = document.querySelector(".confirmation");
  const delok = document.getElementById("deleteYes");
  const delNO = document.getElementById("deleteNone");
  validesupp.style.display = "block";
  delok.addEventListener("click", () => {
    fetch("http://localhost:3000/spot/" + popo, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => valideFormulaire());
  });
  delNO.addEventListener("click", () => {
    validesupp.style.display = "none";
  });
}
function valideFormulaire() {
  var x = document.getElementById("reponse2");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
    window.location.reload();
  }, 3000);
}
/*if (valide.target.id === true) {
    fetch("http://localhost:3000/spot/" + popo, { method: "DELETE" })
      .then((res) => res.json())
      .then(
        (res) =>
          (document.getElementById(
            "confirmDelete"
          ).innerHTML = `<h3>${res.data}`)
      );
  }
  if (annule.onclick()) {
    document.querySelector(".confirmation").style.display = "none";
  }
}*/

/*for (let i = 0; i < buttonDelete.length; i++) {
  buttonDelete[i].addEventListener("click", showComment, false, () => {
    console.log("ok");
  });
}*/

//fetch("localhost:3000/spot/"), { method: "DELETE" };

/*Array.from(buttonDelete).map((button) => {
  button.addEventListener("click", () => {
    console.log(button.name);
  });
});*/

/*buttonDelete.addEventListener("click", () => {
  let idfetch = this.formAction;
  fetch(idfetch, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(
      (res) =>
        (document.getElementById("reponse").innerHTML = `<h2>${res.data}</h2>`)
    );
});*/
/*function momo() {
  let popo = event.target.name;
  fetch("http://localhost:3000/spot/" + popo, { method: "DELETE" })
    .then((res) => res.json())
    .then(
      (res) =>
        (document.getElementById("confirmDelete").innerHTML = `<h3>${res.data}`)
    );
}*/
/*const valide = document.getElementById("deleteYes");
valide.addEventListener("click");
const annule = document.getElementById("deleteNone");
document.querySelector(".confirmation").style.display = "block";*/

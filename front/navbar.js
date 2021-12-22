const navbar = document.querySelector(".divNavbar");
const user = document.getElementById("newUser");
const password = document.getElementById("userpassword").value;
const newusersData = document.getElementById("userCreat");
const login = document.getElementById("login");

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

function affiche() {
  newusersData.classList.remove("isHidden");
  login.classList.add("isHidden");
}
function connection() {
  newusersData.classList.add("isHidden");
  login.classList.remove("isHidden");
}
const formulaire = document.getElementById("userCreat");
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  const userdata = {
    userName: user.value,
    userPass: password,
  };

  fetch("http://localhost:3000/newuser/", {
    method: "POST",
    body: JSON.stringify(userdata),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => toto(res))
    .catch((err) => {
      console.log(err);
    });
});

function toto(res) {
  if (res.data == "Utilisateur enregisté") {
    document.getElementById("niko").innerHTML = `<p>${res.data}</p>`;
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } else {
    document.getElementById("niko").innerHTML = `<p>${res.data}</p>`;
    user.value = "";
  }
}

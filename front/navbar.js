const navbar = document.querySelector(".divNavbar");
const user = document.getElementById("newUser");
const password = document.getElementById("userpassword");
const newusersData = document.getElementById("userCreat");
const login = document.getElementById("login");
const formulaire = document.getElementById("userCreat");
const loginUser = document.getElementById("usr");
const loginPass = document.getElementById("psw");
const logged = document.getElementById("logged");
const registerButton = document.getElementById("register");
const connectionBtn = document.getElementById("btnConnection");
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
  registerButton.classList.add("isHidden");
  connectionBtn.classList.remove("isHidden");
}
function connection() {
  newusersData.classList.add("isHidden");
  login.classList.remove("isHidden");
  registerButton.classList.remove("isHidden");
  connectionBtn.classList.add("isHidden");
}
//---------------------------------------------post NewUSer-----------**************************
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  const userdata = {
    userName: user.value,
    userPass: password.value,
  };

  fetch("http://localhost:3000/newuser/", {
    method: "POST",
    body: JSON.stringify(userdata),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    //.then((res) => res.json())
    .then((res) => verifNewUser(res))
    .catch((err) => {
      console.log(err);
    });
});

function verifNewUser(res) {
  console.log(res.ok);
  if (res.ok === true) {
    newUser();
  } else {
    falseUser();
  }
}
function newUser() {
  const toast = document.getElementById("resTrue");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
    window.location.reload();
  }, 3000);
}
function falseUser() {
  const toast = document.getElementById("resFalse");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
    user.value = "";
    password.value = "";
  }, 2000);
}
//--------------------------------------------------fin POST newUser---------------------************************

//-------------------------------------------Autentification----------------------****************************
login.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginData = {
    userName: loginUser.value,
    userPass: loginPass.value,
  };

  fetch("http://localhost:3000/login/", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  }).then((res) => loginTest(res));
});
function loginTest(res) {
  console.log(res);
  if (res.ok === true) {
    loginOk(res);
  } else {
    badId();
  }
}
function loginOk() {
  navbar.classList.remove("isHidden");
  login.classList.add("isHidden");

  logged.innerHTML = `<h3 class="isFlexCollum">bienvenue copain</h3>`;
}

function badId() {
  const toast = document.getElementById("badLog");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
    loginUser.value = "";
    loginPass.value = "";
  }, 2000);
}

const navbar = document.querySelector(".divNavbar");
const user = document.getElementById("newUser");
const password = document.getElementById("userpassword");

const login = document.getElementById("login");
const formulaire = document.getElementById("userCreat");
const loginUser = document.getElementById("usr");
const loginPass = document.getElementById("psw");
const logged = document.getElementById("logged");
const registerButton = document.getElementById("register");
const connectionBtn = document.getElementById("btnConnection");
const newusr = document.getElementById("newUsr");

function affiche() {
  newusr.classList.remove("isHidden");
  logged.classList.add("isHidden");
  registerButton.classList.add("isHidden");
  connectionBtn.classList.remove("isHidden");
}
function connection() {
  newusr.classList.add("isHidden");
  logged.classList.remove("isHidden");
  registerButton.classList.remove("isHidden");
  connectionBtn.classList.add("isHidden");
}
//---------------------------------------------post NewUSer-----------**************************
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();

  const userdata = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
    sex: document.querySelector('input[type="radio"]:checked').value,

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
let data = [];

//-------------------------------------------Autentification----------------------****************************
login.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginData = {
    userName: loginUser.value,
    userPass: loginPass.value,
  };
  sendLogin(loginData);
});

function sendLogin(loginData) {
  fetch("http://localhost:3000/login/", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    testLogin(res);
  });
}

function testLogin(res) {
  if (!res.ok) {
    wrongLogin();
  } else {
    res.json().then((data) => goToIndex(data));
  }
}

function goToIndex(data) {
  window.location.href = `/acceuil/home.html?id=${data.id}`;
}

function wrongLogin() {
  const toast = document.getElementById("badLog");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
    loginUser.value = "";
    loginPass.value = "";
  }, 2000);
}

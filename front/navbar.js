const navbar = document.querySelector(".divNavbar");
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
const newusersData = document.getElementById("userCreat");
const login = document.getElementById("login");
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
  const user = document.getElementById("newUser").value;
  const password = document.getElementById("userpassword").value;

  const userdata = {
    userName: user,
    userPass: password,
  };

  fetch("http://localhost:3000/newuser/", {
    method: "POST",
    body: JSON.stringify(userdata),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => console.log("ok"))
    .catch((err) => console.log("pasok"));
});

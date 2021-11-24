const buttonnav = document.getElementById("buttonOpenClose");
const navbar = document.getElementById("navbar");

buttonnav.addEventListener("click", () => {
  if (navbar.style.left === "10px") {
    navbar.style.left = "-200px";
  } else {
    navbar.style.left = "10px";
  }
});

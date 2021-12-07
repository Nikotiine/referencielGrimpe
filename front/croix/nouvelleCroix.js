const buttonnav = document.getElementById("buttonOpenClose");
const navbar = document.getElementById("navbar");

buttonnav.addEventListener("click", () => {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
});

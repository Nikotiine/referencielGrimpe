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

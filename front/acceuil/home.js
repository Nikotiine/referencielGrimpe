const homeUser = document.getElementById("homeUser");
const carnetDeBord = document.getElementById("carnetDeBord");
let searchId = window.location.search;
const userId = searchId.slice(4);
let userData = [];
function deco() {
  window.location.href = "/index.html";
  localStorage.clear();
}
const userLog = async () => {
  await fetch("http://localhost:3000/userId/" + userId)
    .then((res) => res.json())
    .then((data) => (userData = data))
    .catch((err) => (window.location.href = "/index.html"));
};

const ficheUser = async () => {
  await userLog();
  const dataDate = userData.createdAt;
  const date = dataDate.slice(0, 10);

  homeUser.innerHTML = `
  <p>${userData.userName}</p>`;
  carnetDeBord.innerHTML = `<div><h4>Salut ${userData.firstName}<h4></div>
  <div>membre depuis ${date} </div>
  <div><p>Tu as realisé "$ {}" voies</br>Ta meuilleure perf est "$ {}"</br>Ici des statistiques .....`;
  localStorage.setItem("prenom", userData.userName);
  localStorage.setItem("id", userData.id);
};
ficheUser();

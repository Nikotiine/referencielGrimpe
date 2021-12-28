const homeUser = document.getElementById("homeUser");
const carnetDeBord = document.getElementById("carnetDeBord");
let searchId = window.location.search;
const userId = searchId.slice(4);
let userData = [];
let routData = [];
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
const routlog = async () => {
  await fetch("http://localhost:3000/rout/" + userId)
    .then((res) => res.json())
    .then((rout) => (routData = rout))
    .catch((err) => console.log(err));
};

const ficheUser = async () => {
  await userLog();
  await routlog();
  const dataDate = userData.createdAt;
  const date = dataDate.slice(0, 10);
  const count = routData.data;
  console.log(count);
  homeUser.innerHTML = `
  <p>${userData.userName}</p>`;
  carnetDeBord.innerHTML = `<div><h4>Salut ${userData.firstName}<h4></div>
  <div>membre depuis ${date} </div>
  <div><p>Tu as realisé "${count}" <a href="/acceuil/dashboard.html">voies</a></br>
  Ta meuilleure perf est "$ {}"</br>Ici des statistiques .....`;
  localStorage.setItem("prenom", userData.userName);
  localStorage.setItem("id", userData.id);
};
ficheUser();

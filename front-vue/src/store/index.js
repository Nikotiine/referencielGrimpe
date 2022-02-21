import { createStore } from "vuex";
let userLogged = localStorage.getItem("user");
// if (!userLogged) {
//   this.$router.push("/Home");
//   this.$store.commit("setStatus", 1);
// }
export default createStore({
  state: {
    mode: "",
    site: "card",
    user: "user",
    voies: "normal",
    croix: "normal",
    formSite: 0,
    pseudo: userLogged,
    allSite: [],
    spotId: null,
    cardSite: "all",
    oneSiteButton: "",
  },
  mutations: {
    setStatus(state, newStatus) {
      state.mode = newStatus;
    },
    setSite(state, newStatus) {
      state.site = newStatus;
    },
    setUser(state, newStatus) {
      state.user = newStatus;
    },
    setFormSite(state, newStatus) {
      state.formSite = newStatus;
    },
    setVoies(state, newStatus) {
      state.voies = newStatus;
    },
    setCroix(state, newStatus) {
      state.croix = newStatus;
    },
    setLogin(state, newUser) {
      state.pseudo = newUser.nickName;
      localStorage.setItem("userId", newUser.id);
      localStorage.setItem("user", newUser.nickName);
    },
    setAllSite(state, all) {
      state.allSite = all;
    },
    setCardSite(state, newStatus) {
      state.cardSite = newStatus;
    },
    spotid(state, id) {
      state.spotId = id;
    },
    clearPseudo(state, clear) {
      state.pseudo = clear;
    },
    oneSiteButton(state, newStatus) {
      state.oneSiteButton = newStatus;
    },
  },
  actions: {},
  modules: {},
});

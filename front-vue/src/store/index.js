import { createStore } from "vuex";

export default createStore({
  state: {
    mode: "",
    site: "card",
    user: "user",
    voies: "normal",
    croix: "normal",
    formSite: 0,
    login: null,
    allSite: [],
    spotId: null,
    cardSite: "all",
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
      state.login = newUser;
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
  },
  actions: {},
  modules: {},
});

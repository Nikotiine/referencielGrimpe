import { createStore } from "vuex";

export default createStore({
  state: {
    mode: "",
    site: "normal",
    user: "user",
    voies: "normal",
    croix: "normal",
    formSite: 0,
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
  },
  actions: {},
  modules: {},
});

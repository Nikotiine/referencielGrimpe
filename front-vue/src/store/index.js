import { createStore } from "vuex";

export default createStore({
  state: {
    mode: "",
    site: "normal",
    user: "user",
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
  },
  actions: {},
  modules: {},
});

import { createStore } from "vuex";

export default createStore({
  state: {
    mode: "",
    site: "normal",
    user: "user",
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
  },
  actions: {},
  modules: {},
});

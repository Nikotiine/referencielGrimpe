import { createStore } from "vuex";

export default createStore({
  state: {
    mode: "",
    site: "",
  },
  mutations: {
    setStatus(state, newStatus) {
      state.mode = newStatus;
    },
    setSite(state, newStatus) {
      state.site = newStatus;
    },
  },
  actions: {},
  modules: {},
});

<template>
  <form class="box m-lr-auto max-width-50">
    <div class="field">
      <label class="label">Pseudo</label>
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Pseudo" />
        <span class="icon is-small is-left">
          <i class="fas fa-user-tag"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <label class="label">Mot de passe</label>
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <button class="button" @click="cancel">Annuler</button>
    <button class="button is-primary m-l-15p">Sign in</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "authentication",
  data() {
    return {};
  },
  methods: {
    cancel: function () {
      this.$store.commit("setStatus", "0");
    },
  },
  signIn: function () {
    axios.post("http://localhost:3000/login/");
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/theme";
</style>

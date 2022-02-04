<template>
  <form class="box m-lr-auto max-width-50" v-on:submit.prevent="onSubmit">
    <div class="field">
      <label class="label">Pseudo</label>
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Pseudo" v-model="user" />
        <span class="icon is-small is-left">
          <i class="fas fa-user-tag"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <label class="label">Mot de passe</label>
      <p class="control has-icons-left">
        <input
          class="input"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <button class="button" @click="cancel">Annuler</button>
    <button class="button is-primary m-l-15p" @click="signIn">Sign in</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "authentication",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    cancel: function () {
      this.$store.commit("setStatus", "0");
    },
    signIn: function () {
      console.log("click");
      axios
        .post("http://localhost:3000/login/", {
          userName: this.user,
          userPass: this.password,
        })
        .then((res) => console.log(res));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/theme";
</style>

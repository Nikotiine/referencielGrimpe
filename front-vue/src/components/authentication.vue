<template>
  <form class="box m-lr-auto max-width-50" v-on:submit.prevent="onSubmit">
    <div class="field">
      <label class="label">email</label>
      <p class="control has-icons-left">
        <input class="input" type="email" placeholder="Email" v-model="email" />
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
    <div class="notification is-danger" v-if="badId === true">
      <button class="delete" @click="badId = !badId"></button>

      <strong>Mot de passe ou Email invalide</strong>
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
      email: "",
      password: "",
      token: "",
      badId: false,
    };
  },
  methods: {
    loadUserInfo: function () {
      axios.get("user").then((res) => {
        this.$store.commit("setLogin", res.data);
        console.log("user valide");
        this.$store.commit("setStatus", "");
      });
    },
    cancel: function () {
      this.$store.commit("setStatus", "0");
    },
    signIn: async function () {
      await axios
        .post("login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          // axios.defaults.headers.common[
          //   "authorization"
          // ] = `Bearer ${res.data.token.accessToken}`;
          localStorage.setItem("accessToken", res.data.token.accessToken);
          localStorage.setItem("refreshToken", res.data.token.refreshToken);

          this.loadUserInfo();
        })
        .catch(() => {
          this.badId = true;
        });
    },
  },
  computed: {},
  setup() {
    // axios.interceptors.response.use(
    //   (response) => {
    //     console.log("toto");
    //     return response;
    //   },
    //   async (error) => {
    //     console.log("COUCOU");
    //     console.log(error);
    //     const originalRequest = error.config;
    //     if (
    //       // error.config.url != "/refreshToken/" &&
    //       error.response.status === 401 &&
    //       originalRequest._retry !== true
    //     ) {
    //       originalRequest._retry = true;
    //       if (this.token && this.token != "") {
    //         axios.defaults.headers.common[
    //           "authorization"
    //         ] = `Bearer ${this.token}`;
    //         console.log("refresh token");
    //         await axios
    //           .post("/refreshToken/")
    //           .then((response) => {
    //             axios.defaults.headers.common[
    //               "authorization"
    //             ] = `Bearer ${response.data.accessToken}`;
    //             originalRequest.headers[
    //               "authorization"
    //             ] = `Bearer ${response.data.accessToken}`;
    //             console.log(response);
    //           })
    //           .catch((error) => {
    //             console.log(error.response.status);
    //             this.token = null;
    //           });
    //         return axios(originalRequest);
    //       }
    //     }
    //   }
    // );
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/theme";
</style>

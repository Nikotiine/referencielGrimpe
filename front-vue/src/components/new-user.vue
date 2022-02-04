<template>
  <form class="box m-lr-auto max-width-50">
    <div class="field">
      <label class="label">Nom</label>
      <p class="control has-icons-left">
        <input
          class="input"
          :class="{ 'is-success': this.lastName }"
          type="text"
          v-model="lastName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <label class="label">Prenom</label>
      <p class="control has-icons-left">
        <input
          class="input"
          :class="{ 'is-success': this.firstName }"
          type="text"
          v-model="firstName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <p class="control has-icons-left">
        <input
          class="input"
          :class="{ 'is-success': validEmail }"
          type="email"
          v-model="email"
        />
        <span class="icon is-small is-left">
          <i class="far fa-envelope"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <label class="label">Pseudo</label>
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          v-model="nickName"
          :class="{ 'is-success': this.nickName != '' }"
        />
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
          :class="{ 'is-success': this.password }"
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
    <button class="button is-primary m-l-15p" :disabled="validateField">
      Sign in
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "newUser",
  data() {
    return {
      password: null,
      nickName: null,
      email: null,
      firstName: null,
      lastName: null,
    };
  },
  methods: {
    cancel: function () {
      this.$store.commit("setStatus", "0");
    },
    newUser: function () {
      axios.post("http://localhost:3000/newuser/", {
        nickName: this.nickName,
        firstname: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    validEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },
    validateField() {
      if (
        !this.firstName ||
        !this.nickName ||
        !this.password ||
        !this.lastName ||
        !this.validEmail
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

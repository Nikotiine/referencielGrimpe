<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a class="navbar-item">
        <router-link to="/"
          ><img src="../../src/assets/img/logo.png" alt="logo mousqueton"
        /></router-link>
      </a>
      <div
        class="navbar-burger"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div :class="{ 'is-active': showNav }" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item is-hoverable">
          <a class="navbar-link" @click="showUserCard"
            ><router-link to="/user">{{ name }}</router-link></a
          >
          <div class="navbar-dropdown">
            <a class="navbar-item">Ton profil</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Tes Stats</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Tes contributions</a>
          </div>
        </div>

        <div class="navbar-item is-hoverable">
          <a class="navbar-link" @click="switchToSite"
            ><router-link to="/site">Sites</router-link></a
          >
          <div class="navbar-dropdown">
            <a class="navbar-item" @click="navToAllSite">
              voir tous les sites
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="navToSearchSite">
              Rechercher un site
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="navToAddSite"> Ajouter un site </a>
          </div>
        </div>
        <div class="navbar-item is-hoverable">
          <a class="navbar-link"
            ><router-link to="/croix">Croix</router-link></a
          >
          <div class="navbar-dropdown">
            <a class="navbar-item"> Voir toute tes croix </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Ajouter une croix </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Ajouter un projet </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" @click="addUser">
                <span class="icon">
                  <i class="fas fa-user-plus"></i>
                </span>
                <span> S'enregistrer</span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary" @click="loggin">
                <span class="icon">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>Se connecter</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return { showNav: false, name: "Niko" };
  },
  methods: {
    addUser: function () {
      this.$store.commit("setStatus", "2");
    },
    loggin: function () {
      this.$store.commit("setStatus", "1");
    },
    switchToSite: function () {
      this.$store.commit("setSite", "normal");
    },
    navToAllSite: function () {
      this.$router.push("site");
      return this.$store.commit("setSite", "all");
    },
    navToSearchSite: function () {
      this.$router.push("site");
      return this.$store.commit("setSite", "search");
    },
    navToAddSite: function () {
      this.$router.push("site");
      return this.$store.commit("setSite", "add");
    },
    showUserCard: function () {
      this.$store.commit("setUser", "user");
    },
  },
};
</script>

<style lang="scss" scoped></style>

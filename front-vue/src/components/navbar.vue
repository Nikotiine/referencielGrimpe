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
          <a class="navbar-link" @click="switchToUser"
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
          <a class="navbar-link" @click="switchToVoies"
            ><router-link to="/voies">Voies</router-link></a
          >
          <div class="navbar-dropdown">
            <a class="navbar-item" @click="navToAllvoie">
              Voir toute les voies
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="navToAddvoie"> Ajouter une voie </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="navToSearchvoie"
              >Rechercher une voie
            </a>
          </div>
        </div>
        <div class="navbar-item is-hoverable">
          <a class="navbar-link" @click="switchToCroix"
            ><router-link to="/croix">Croix</router-link></a
          >
          <div class="navbar-dropdown">
            <a class="navbar-item" @click="navToALLCroix">
              Voir toute tes croix
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="navToAddCroix">
              Ajouter une croix
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="navToAddProject">
              Ajouter un projet
            </a>
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
    switchToUser: function () {
      this.$store.commit("setUser", "user");
    },
    switchToSite: function () {
      this.$store.commit("setSite", "normal");
    },
    switchToVoies: function () {
      this.$store.commit("setVoies", "normal");
    },
    switchToCroix: function () {
      this.$store.commit("setCroix", "normal");
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
    navToAddvoie: function () {
      this.$router.push("voies");
      return this.$store.commit("setVoies", "add");
    },
    navToAllvoie: function () {
      this.$router.push("voies");
      return this.$store.commit("setVoies", "all");
    },
    navToSearchvoie: function () {
      this.$router.push("voies");
      return this.$store.commit("setVoies", "search");
    },
    navToAddCroix: function () {
      this.$router.push("croix");
      return this.$store.commit("setCroix", "add");
    },
    navToALLCroix: function () {
      this.$router.push("croix");
      return this.$store.commit("setCroix", "all");
    },
    navToAddProject: function () {
      this.$router.push("croix");
      return this.$store.commit("setCroix", "addPoject");
    },
  },
};
</script>

<style lang="scss" scoped></style>

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
        @click="closeBurger"
        :class="{ 'is-active': showNav }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div :class="{ 'is-active': showNav }" class="navbar-menu">
      <div class="navbar-start" v-if="login != null">
        <div class="navbar-item is-hoverable">
          <a class="navbar-link" @click="closeBurger"
            ><router-link to="/user">{{ login }}</router-link></a
          >
          <div class="navbar-dropdown">
            <a class="navbar-item" @click="closeBurger"
              ><router-link to="/user/profil">Ton profil</router-link></a
            >
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="closeBurger"
              ><router-link to="/user/stats">Tes Stats</router-link></a
            >
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="closeBurger"
              ><router-link to="/user/contributions"
                >Tes contibutions</router-link
              ></a
            >
          </div>
        </div>

        <div class="navbar-item is-hoverable">
          <a class="navbar-link" @click="closeBurger"
            ><router-link to="/site">Sites</router-link></a
          >
          <div class="navbar-dropdown">
            <a class="navbar-item" @click="closeBurger">
              <router-link to="/site/all">Tous les sites</router-link>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="closeBurger">
              <router-link to="/site/search">Rechercher un site</router-link>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="closeBurger">
              <router-link to="/site/add">Ajouter un site</router-link>
            </a>
          </div>
        </div>
        <div class="navbar-item is-hoverable">
          <a class="navbar-link" @click="closeBurger"
            ><router-link to="/voies">Voies</router-link></a
          >
          <div class="navbar-dropdown">
            <a class="navbar-item" @click="closeBurger">
              <router-link to="/voies/all">toutes les Voies</router-link>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="closeBurger">
              <router-link to="/voies/add">Ajouter une voie</router-link>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="closeBurger"
              ><router-link to="/voies/search">Rechercher une voie</router-link>
            </a>
          </div>
        </div>
        <div class="navbar-item is-hoverable">
          <a class="navbar-link" @click="closeBurger"
            ><router-link to="/croix">Croix</router-link></a
          >
          <div class="navbar-dropdown">
            <a class="navbar-item" @click="closeBurger">
              <router-link to="/croix/all">toutes tes Croix</router-link>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="closeBurger">
              <router-link to="/croix/addCroix">ajoueter une Croix</router-link>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="closeBurger">
              <router-link to="/croix/addProject">Tes projets</router-link>
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end" v-if="login === null">
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
      <div class="navbar-end" v-if="login != null">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" @click="logOut">
                <span class="icon">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
                <span> Se deconnecter</span>
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
    return { showNav: false };
  },
  methods: {
    closeBurger: function () {
      this.showNav = !this.showNav;
    },
    addUser: function () {
      this.$store.commit("setStatus", "2");
    },
    loggin: function () {
      this.$store.commit("setStatus", "1");
    },
    logOut: function () {
      this.$store.commit("setLogin", "");
      this.$store.commit("clearPseudo", null);
      this.$router.push("/");
      localStorage.clear();
    },
    switchToUser: function () {
      this.$store.commit("setUser", "user");
    },
    switchToSite: function () {
      this.$store.commit("setSite", "card");
    },
    switchToVoies: function () {
      this.$store.commit("setVoies", "normal");
    },
    switchToCroix: function () {
      this.$store.commit("setCroix", "normal");
    },
    navToProfil: function () {
      this.$router.push("user");
      return this.$store.commit("setUser", "profil");
    },
    navToAllSite: function () {
      this.$router.push("site");
      this.$store.commit("setSite", "all");
      this.$store.commit("setCardSite", "all");
    },
    navToSearchSite: function () {
      this.$router.push("site");
      return this.$store.commit("setSite", "search");
    },
    navToAddSite: function () {
      this.$router.push("site");
      this.$store.commit("setSite", "add");
      this.$store.commit("setFormSite", 0);
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
  computed: {
    login() {
      return this.$store.state.pseudo;
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="flex-raw m-t-10 space-evenly">
    <div class="card" @click="switchToAll">
      <div class="card-image">
        <figure class="image">
          <img src="../../src/assets/img/site1.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Liste des sites</p>
            <p class="subtitle is-6">
              Actuellement {{ totalSite }} sites referencés
            </p>
          </div>
        </div>

        <div class="content">
          <p>Retrouvez ici tous les sites et leurs infomations relatives</p>
        </div>
      </div>
    </div>
    <div class="card" @click="switchToSearch">
      <div class="card-image">
        <figure class="image">
          <img src="../../src/assets/img/where.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Rechercher un site</p>
            <p class="subtitle is-6">Entrez vos criteres de recherche</p>
          </div>
        </div>

        <div class="content">
          <p>
            Vous recherche un site particulier suivant son exposition ou sa
            situation geographique , rien de plus simple ..
          </p>
        </div>
      </div>
    </div>
    <div class="card" @click="switchToAdd">
      <div class="card-image">
        <figure class="image">
          <img src="../../src/assets/img/ajout.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Ajouter un site</p>
            <p class="subtitle is-6">Un site manque a l'appel ?</p>
          </div>
        </div>

        <div class="content">
          <p>
            Aidez nous a completer la liste des site disponibles , pensez a
            completer le formulaire correctement
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "cardsites",
  data() {
    return {
      totalSite: 0,
    };
  },
  methods: {
    switchToAll: function () {
      this.$router.push("/site/all");
    },
    switchToAdd: function () {
      this.$store.commit("setSite", "add");
    },
    switchToSearch: function () {
      this.$store.commit("setSite", "search");
    },
  },
  computed: {},
  mounted() {
    axios.get("totalSpot").then((res) => {
      this.totalSite = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 25%;
  box-shadow: 2px 2px 0 black;
}
img {
  max-height: 200px;
}
</style>

<template>
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
</template>

<script>
export default {
  name: "cardSearch",
  methods: {
    switchToSearch: function () {
      this.$store.commit("setSite", "search");
    },
  },
};
</script>

<style lang="scss" scoped></style>

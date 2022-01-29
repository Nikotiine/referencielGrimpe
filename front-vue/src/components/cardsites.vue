<template>
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
          <p class="subtitle is-6">Actuellement --- sites referencés</p>
        </div>
      </div>

      <div class="content">
        <p>Retrouvez ici tous les sites et leurs infomations relatives</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardsites",
  methods: {
    switchToAll: function () {
      return this.$store.commit("setSite", "all");
    },
  },
};
</script>

<style lang="scss" scoped></style>

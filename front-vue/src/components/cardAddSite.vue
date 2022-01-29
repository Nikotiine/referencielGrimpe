<template>
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
</template>

<script>
export default {
  name: "cardAddSite",
  methods: {
    switchToAdd: function () {
      this.$store.commit("setSite", "add");
    },
  },
};
</script>

<style lang="scss" scoped></style>

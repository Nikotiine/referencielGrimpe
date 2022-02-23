<template>
  <div class="flex-raw m-t-10 space-evenly">
    <div class="card" @click="switchToAll">
      <div class="card-image">
        <figure class="image">
          <img src="../../assets/img/site1.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Toutes tes croix</p>
            <p class="subtitle is-6">Il y a -- voies referencées</p>
          </div>
        </div>
        <div class="content">
          <p>blablabla blablabla blablabla</p>
        </div>
      </div>
    </div>
    <div class="card" @click="switchToAddCroix">
      <div class="card-image">
        <figure class="image">
          <img src="../../assets/img/where.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Croiter une voie</p>
            <p class="subtitle is-6">
              Ajouter une voie a un site <br />Tu as ajoueter --- voies
            </p>
          </div>
        </div>

        <div class="content">
          <p>blablabla blablabla blablabla</p>
        </div>
      </div>
    </div>
    <div class="card" @click="switchToProject">
      <div class="card-image">
        <figure class="image">
          <img src="../../assets/img/ajout.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Ajouter un projet</p>
            <p class="subtitle is-6">Il y a --- sites differents</p>
          </div>
        </div>

        <div class="content">
          <p>Voir toutes tes contributions en dtails</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardcroix",
  methods: {
    switchToAddCroix: function () {
      this.$router.push("/croix/addCroix");
    },
    switchToAll: function () {
      this.$router.push("/croix/all");
    },
    switchToProject: function () {
      this.$router.push("/croix/addProject");
    },
  },
};
</script>

<style lang="scss" scoped></style>

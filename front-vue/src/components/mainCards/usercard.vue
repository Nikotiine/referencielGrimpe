<template>
  <div class="flex-raw m-t-10 space-evenly">
    <div class="card" @click="switchToProfil">
      <div class="card-image">
        <figure class="image">
          <img src="../../assets/img/where.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Ton Profil</p>
            <p class="subtitle is-6">
              Voir et modifier tes information personnel
            </p>
          </div>
        </div>
        <div class="content">
          <p>blablabla blablabla blablabla</p>
        </div>
      </div>
    </div>
    <div class="card" @click="switchToStat">
      <div class="card-image">
        <figure class="image">
          <img src="../../assets/img/ajout.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Tes Statistiques</p>
            <p class="subtitle is-6">Tu as fait --- croix</p>
          </div>
        </div>

        <div class="content">
          <p>Retrouve ici tous tes Statistiques de grimpe</p>
        </div>
      </div>
    </div>
    <div class="card" @click="switchToContribution">
      <div class="card-image">
        <figure class="image">
          <img src="../../assets/img/site1.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Voir tes contributions</p>
            <p class="subtitle is-6">
              Tu as ajouter --- site <br />Tu as ajoueter --- voies
            </p>
          </div>
        </div>

        <div class="content">
          <p>Voir toutes tes contributions en details</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usercard",
  methods: {
    switchToProfil: function () {
      this.$router.push("/user/profil");
    },
    switchToStat: function () {
      this.$router.push("/user/stats");
    },
    switchToContribution: function () {
      this.$router.push("/user/contributions");
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  max-height: 200px;
}
</style>

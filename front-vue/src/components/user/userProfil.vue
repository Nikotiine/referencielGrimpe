<template>
  <div class="flex-raw m-t-10 space-evenly">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img src="../../assets/img/profil.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Information personnelles</p>
            <p class="subtitle is-6">
              Prenom:{{ profil.firstName }}<br />nom:{{ profil.lastName }}
              <br />Pseudo:{{ profil.nickName }}
            </p>
          </div>
        </div>

        <div class="content">
          <p>
            ton email:"{{ profil.email }} <br />
            Membre depuis :{{ profil.createdAt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "userProfil",
  data() {
    return {};
  },
  methods: {},
  setup() {},
  computed: {
    profil() {
      return this.$store.state.login;
    },
  },
};
</script>

<style lang="scss" scoped></style>

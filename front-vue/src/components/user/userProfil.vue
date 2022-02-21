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
              Prenom:{{ userData.firstName }}<br />nom:{{ userData.lastName }}
              <br />Pseudo:{{ userData.nickName }}
            </p>
          </div>
        </div>

        <div class="content">
          <p>
            ton email: {{ userData.email }} <br />
            Membre depuis :{{}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "userProfil",
  data() {
    return { userData: "" };
  },
  methods: {
    loadUser: function () {
      axios.get("user").then((res) => {
        console.log("user loaded");
        this.userData = res.data;
      });
    },
  },
  setup() {},
  computed: {},
  mounted() {},
  created() {
    this.loadUser();
  },
};
</script>

<style lang="scss" scoped></style>

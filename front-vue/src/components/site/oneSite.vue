<template>
  <div class="card">
    <div class="card-content">
      <h4 class="title is-4 text-center">Detail du site</h4>
      <h1 class="title is-2 text-center">{{ site.name }}</h1>
      <div class="m-t-10p">
        <p class="title is-4 text-center">Situation Geographique</p>
        <p class="subtitle is-6 text-center">
          Region :{{ region }} <br />
          Departement:{{ departement }} <br />
          Temps d'approche:{{ site.tempsApproche }} <br />
          Type d'approche:{{ site.typeApproche }}
        </p>
      </div>
      <div class="m-t-10p">
        <p class="title is-4 text-center">Saison et orientation</p>
        <p class="subtitle is-6 text-center">
          Saison : a Faire <br />
          orientation:{{ site.exposition }}
        </p>
      </div>
      <div class="m-t-10p">
        <p class="title is-4 text-center">Informations generales</p>
        <p class="subtitle is-6 text-center">
          Type de Rocher : {{ site.rockType }} <br />
          Nombre de ligne:{{ site.nombreLignes }} <br />
          Niveau mini:{{ site.niveauMini }} <br />
          Hauteur max des voies:{{ site.hauteurMax }}
        </p>
      </div>
      <div class="m-t-10p">
        <p class="title is-4 text-center">Secteurs</p>
        <p class="subtitle is-6 text-center">
          Secteur:{{
            site.secteur ? site.secteurs.length : "1 secteur principal"
          }}
          <br />
          Mettre un dropdown pour afficher tout les secteurs
        </p>
      </div>
      <div class="m-t-10p">
        <p class="title is-4 text-center">Voies</p>
        <p class="subtitle is-6 text-center">
          afficher le nombre de voies: <br />
          puis Mettre un dropdown pour afficher tout les Voies
        </p>
      </div>
    </div>
    <div class="modal is-active" v-if="modalOpenStreetMap">
      <div
        class="modal-background"
        @click="modalOpenStreetMap = !modalOpenStreetMap"
      ></div>
      <div class="modal-content">
        <maps :parking="positionPark" :parkingCamion="positionCam" />
      </div>
    </div>
    <footer class="card-footer">
      <p
        class="card-footer-item"
        @click="modalOpenStreetMap = !modalOpenStreetMap"
      >
        <span> Afficher la carte </span>
      </p>
      <p class="card-footer-item left-border-2sb">
        <span v-if="isInSearch === false"> Editer le site</span>
        <span v-if="isInSearch === true" @click="backToResult"
          >Revenir au resultat</span
        >
      </p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import maps from "../site/maps.vue";
export default {
  name: "oneSite",
  components: { maps },
  data() {
    return {
      modalOpenStreetMap: false,
      site: {},
      region: "",
      departement: "",
      positionPark: null,
      positionCam: null,
    };
  },
  computed: {
    isInSearch() {
      return this.$store.state.seachButton;
    },
  },
  methods: {
    backToResult: function () {
      this.$store.commit("searchButton", false);
      this.$emit("returnToSearch");
    },
    // getSpot: function (id) {
    //   console.log("niko");
    //   axios.get("spot/" + id).then((res) => {
    //     console.log(res.data);
    //     this.site = res.data;

    //     this.getRegion();
    //   });
    // },
    getRegion: function () {
      axios
        .get(
          "https://geo.api.gouv.fr/regions/" + this.site.region + "?fields=code"
        )
        .then((res) => (this.region = res.data.nom));
    },
    getDepartement: function () {
      axios
        .get(
          "https://geo.api.gouv.fr/departements/" +
            this.site.departement +
            "?fields=code"
        )
        .then((res) => (this.departement = res.data.nom));
    },
  },
  mounted() {
    axios.get("spot/" + this.$store.state.spotId).then((res) => {
      console.log(res.data);
      this.site = res.data;
      this.positionPark = res.data.positionParking?.coordinates;
      this.positionCam = res.data.positionParkingCamion?.coordinates;
      this.getRegion();
      this.getDepartement();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/theme";
.card {
  background-color: $b-g-transparent;
  overflow: auto;
  max-height: 90vh;
  min-width: 100%;
}
.card-footer {
  background-color: $primary;
  border: 1px solid black;
}
footer {
  cursor: pointer;
}
</style>

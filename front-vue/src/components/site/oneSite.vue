<template>
  <div class="card">
    <div class="card-content">
      <span
        class="icon-text absolu"
        @click="backToAll"
        v-if="isInSearch === 'all'"
      >
        <span class="icon">
          <i class="fas fa-backward"></i>
        </span>
        <span>Retour</span>
      </span>
      <span
        class="icon-text absolu"
        @click="goToAll"
        v-if="isInSearch === 'add'"
      >
        <span class="icon">
          <i class="fas fa-backward"></i>
        </span>
        <span>Tous les sites</span>
      </span>
      <h4 class="title is-4 text-center">Detail du site</h4>
      <h1 class="title is-2 text-center">{{ site.name }}</h1>
      <div class="m-t-10p">
        <p class="title is-4 text-center" @click="divGeo = !divGeo">
          Situation Geographique
          <span class="icon" v-if="!divGeo">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
          <span class="icon" v-if="divGeo">
            <i class="fas fa-angle-up"></i>
          </span>
        </p>

        <div>
          <Transition>
            <p class="box subtitle is-5 shadow" v-if="divGeo">
              Region :{{ region }} <br />
              Departement:{{ departement }} <br />
              Temps d'approche:{{ site.tempsApproche }} <br />
              Type d'approche:{{ site.typeApproche }}
            </p>
          </Transition>
        </div>
      </div>
      <div class="m-t-10p">
        <p class="title is-4 text-center" @click="divSaison = !divSaison">
          Saison et Orientation
          <span class="icon" v-if="!divSaison">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
          <span class="icon" v-if="divSaison">
            <i class="fas fa-angle-up"></i>
          </span>
        </p>

        <div>
          <Transition>
            <p class="box subtitle is-5 shadow" v-if="divSaison">
              Saison :{{ site.ete ? "Eté" : "" }}
              {{ site.hiver ? "Hiver" : "" }}
              {{ site.automne ? "Automne" : "" }}
              {{ site.printemps ? "Printemps" : "" }} <br />
              Orientation:{{ site.exposition }}
            </p>
          </Transition>
        </div>
      </div>
      <div class="m-t-10p">
        <p class="title is-4 text-center" @click="divGenerale = !divGenerale">
          Informations generales
          <span class="icon" v-if="!divGenerale">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
          <span class="icon" v-if="divGenerale">
            <i class="fas fa-angle-up"></i>
          </span>
        </p>

        <div>
          <Transition>
            <p class="box subtitle is-5 shadow" v-if="divGenerale">
              Type de Rocher : {{ site.rockType }} <br />
              Nombre de ligne: {{ site.nombreLignes }} <br />
              Niveau mini: {{ site.niveauMini }} <br />
              Hauteur max des voies: {{ site.hauteurMax }}
            </p>
          </Transition>
        </div>
      </div>

      <div class="m-t-10p">
        <p class="title is-4 text-center" @click="divSecteur = !divSecteur">
          <span v-if="site.secteur">{{ site.secteurs.length }} Secteurs</span>
          <span v-if="!site.secteur">Secteur</span>
          <span class="icon" v-if="!divSecteur">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
          <span class="icon" v-if="divSecteur">
            <i class="fas fa-angle-up"></i>
          </span>
        </p>
        <div v-if="!site.secteur">
          <Transition>
            <p class="box subtitle is-5 shadow" v-if="divSecteur">
              1 Secteur Principal uniquement
            </p></Transition
          >
        </div>
        <div v-for="item in secteurs" :key="item.id">
          <Transition>
            <p class="box subtitle is-5 shadow" v-if="divSecteur">
              {{ item.name }} + affiche le nombre de lignes par secteur
            </p></Transition
          >
        </div>
      </div>

      <div class="m-t-10p">
        <p class="title is-4 text-center" @click="divVoies = !divVoies">
          Voies
          <span class="icon" v-if="!divVoies">
            <i class="fas fa-angle-down" aria-hidden="true"></i> </span
          ><span class="icon" v-if="divVoies">
            <i class="fas fa-angle-up"></i>
          </span>
        </p>

        <div>
          <Transition>
            <p class="box subtitle is-5 shadow" v-if="divVoies">
              afficher les Voies
            </p>
          </Transition>
        </div>
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
        <span v-if="isInSearch === 'all'" @click="showNotif">
          Editer le site</span
        >
        <span v-if="isInSearch === 'search'" @click="backToResult"
          >Revenir a la recherche</span
        >
      </p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

import maps from "../site/maps.vue";
// import { watch } from "@vue/runtime-core";
export default {
  name: "oneSite",
  components: { maps },
  props: ["spotId"],

  //{
  // validate: {
  //   type: Function,
  // },
  // spotId: {
  //   type: Number,
  //   },
  // },
  // setup(props) {
  //   watch(props.validate, () => {
  //     this.validate();
  //   });
  // },
  watch() {},
  data() {
    return {
      divVoies: false,
      divSecteur: false,
      divGeo: true,
      divGenerale: false,
      divSaison: false,
      modalOpenStreetMap: false,
      site: {},
      secteurs: null,
      region: "",
      departement: "",
      positionPark: null,
      positionCam: null,
    };
  },
  computed: {
    isInSearch() {
      return this.$store.state.oneSiteButton;
    },
  },
  methods: {
    backToResult: function () {
      this.$store.commit("oneSiteButton", "");
      this.$emit("returnToSearch");
    },
    backToAll: function () {
      this.$emit("back");
    },
    goToAll: function () {
      this.$router.push("/site/all");
      this.$store.commit("oneSiteButton", "");
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
    axios.get("spot/" + this.spotId).then((res) => {
      console.log(res.data);
      this.site = res.data;
      this.secteurs = res.data.secteurs;
      this.positionPark = res.data.positionParking?.coordinates;
      this.positionCam = res.data.positionParkingCamion?.coordinates;
      this.getRegion();
      this.getDepartement();
    });
    this.show;
  },
  created() {},
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
.absolu {
  position: absolute;
  border: 1px solid black;
  padding: 5px;
  top: 2.1%;
  left: 1%;
  box-shadow: 0 3px 6px rgb(0 0 0 / 34%);
  cursor: pointer;
  &:hover {
    background-color: $hoverable;
  }
}
.card-footer-item:hover {
  background-color: $hoverable;
}
.v-enter-active {
  transition: opacity 0.8s ease;
}
.v-leave-active {
  transition: opacity 0.4s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

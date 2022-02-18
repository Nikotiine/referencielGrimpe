<template>
  <form class="box m-lr-auto m-t-10p" v-on:submit.prevent="onSubmit">
    <div class="field flex-column align-center">
      <h1 class="title text-center">Details de la voie</h1>
      <div class="field has-addons flex-column">
        <label class="label m-a-auto m-t-10p">Indiquez un site</label>

        <div class="m-t-10p">
          <VueMultiselect
            v-model="selectedSite"
            :options="sites"
            placeholder="Selectionez un site"
            track-by="name"
            label="name"
            selectLabel="Pressez Entrer pour choisir"
            @select="getSecteur"
          >
          </VueMultiselect>
        </div>
        <div class="m-t-10p" v-if="showSecteur">
          <VueMultiselect
            v-model="selectedSecteur"
            :options="secteurs"
            placeholder="Selectionez un secteur"
            track-by="name"
            label="name"
            selectLabel="Pressez Entrer pour choisir"
          >
          </VueMultiselect>
        </div>
        <label class="label m-a-auto m-t-10p">Nom de la voie</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="text" placeholder="nom" />
          <span class="icon is-small is-left">
            <i class="fas fa-tag"></i>
          </span>
        </p>
        <label class="label m-a-auto m-t-10p">Cotation</label>

        <div class="m-t-10p">
          <VueMultiselect
            v-model="selectedCotations"
            :options="cotations"
            placeholder="Chercher une cote"
          >
          </VueMultiselect>
        </div>

        <label class="label m-a-auto m-t-10p">Nombre de paires</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="tel" placeholder="nom" />
          <span class="icon is-small is-left">
            <i class="fas fa-mountain"></i>
          </span>
        </p>
        <label class="label m-a-auto m-t-10p">longueur de la voie</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="tel" placeholder="longueur" />
          <span class="icon is-small is-left">
            <i class="fas fa-route"></i>
          </span>
        </p>
        <label class="label m-a-auto m-t-10p">type d'effort</label>
        <div class="flex-column space-evenly">
          <div class="flex-raw space-evenly">
            <label class="checkbox">
              <input type="checkbox" />
              resi </label
            ><label class="checkbox">
              <input type="checkbox" />
              conti </label
            ><label class="checkbox">
              <input type="checkbox" />
              bloc
            </label>
          </div>
          <label class="label m-a-auto m-t-10p">Profil de la voie</label>
          <div class="flex-raw space-evenly">
            <div class="flex-column">
              <label class="checkbox">
                <input type="checkbox" />
                dalle
              </label>
              <label class="checkbox">
                <input type="checkbox" />
                vertical</label
              >
            </div>
            <div class="flex-column">
              <label class="checkbox">
                <input type="checkbox" />
                devers
              </label>
              <label class="checkbox">
                <input type="checkbox" />
                surplomb</label
              >
            </div>
          </div>
          <label class="label m-a-auto m-t-10p">Equipement</label>
          <div class="flex-raw space-evenly">
            <label class="radio">
              <input type="radio" name="equipement" />
              plaquette </label
            ><label class="radio">
              <input type="radio" name="equipement" />
              broches </label
            ><label class="radio">
              <input type="radio" name="equipement" />
              trad
            </label>
          </div>
        </div>
        <div class="flex-raw m-t-10p justify-center">
          <button class="button control isSecondary" @click="back">
            precedent
          </button>
          <button class="button control is-primary m-l-15p" @click="next">
            Suivant
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import VueMultiselect from "vue-multiselect";
import axios from "axios";
export default {
  name: "addvoie",

  data() {
    return {
      showSecteur: false,
      newVoie: { name: null },
      selectedSecteur: null,
      selectedSite: null,
      secteurs: [],
      selectedCotations: null,
      cotations: [
        "4a",
        "4a+",
        "4b",
        "4b+",
        "4c",
        "4c+",
        "5a",
        "5a+",
        "5b",
        "5b+",
        "5c",
        "5c+",
        "6a",
        "6a+",
        "6b",
        "6b+",
        "6c",
        "6c+",
        "7a",
        "7a+",
        "7b",
        "7b+",
        "7c",
        "7c+",
        "8a",
        "8a+",
        "8b",
        "8b+",
        "8c",
        "8c+",
        "9a",
        "9a+",
        "9b",
        "9b+",
        "9c",
      ],
      sites: [],
    };
  },
  components: { VueMultiselect },
  methods: {
    getSecteur: function (value) {
      if (value.secteur) {
        axios.get("spot/" + value.id).then((res) => {
          this.secteurs = res.data.secteurs;
          this.showSecteur = true;
        });
      }
      this.showSecteur = false;
    },
  },
  computed: {},
  mounted() {
    axios.get("spot").then((res) => {
      this.sites = res.data;
      //console.log(res.data);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/theme";

form {
  background-color: $b-g-transparent;
  overflow: auto;
  max-height: 90vh;
}
</style>

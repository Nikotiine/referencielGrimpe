<template>
  <div class="field">
    <h1 class="title text-center">Details de la localistion</h1>
    <div class="field has-addons flex-column">
      <label class="label m-a-auto m-t-10p">Situation Geographique</label>
      <div class="select m-lr-auto">
        <select v-model="selectRegion" @change="getDept(selectRegion)">
          <option :value="null">Selectionnez la region</option>
          <option
            v-for="region in regions"
            :key="region.code"
            v-bind:value="region.code"
          >
            {{ region.nom }}
          </option>
        </select>
      </div>
      <div class="select m-lr-auto m-t-10p">
        <select v-model="selectDept">
          <option :value="null">Sélectionnez le departement</option>
          <option
            v-for="departement in departements"
            :key="departement.code"
            v-bind:value="departement.code"
          >
            {{ departement.nom }}
          </option>
        </select>
      </div>
      <label class="label m-a-auto m-t-10p"
        >Possibilite de dormir sur place ?</label
      >
      <div class="control m-lr-auto m-t-10p">
        <label class="radio">
          <input
            type="radio"
            name="parking"
            :checked="parking === false"
            v-on:change="parking = !parking"
          />
          Oui
        </label>
        <label class="radio">
          <input type="radio" name="parking" v-on:change="parking = !parking" />
          Non
        </label>
      </div>
      <label class="label m-a-auto m-t-10p">Geoloc du parking</label>
      <p class="control has-icons-left">
        <input
          class="input m-b-10p"
          type="number"
          placeholder="Longitude"
          step="any"
          min="-180"
          max="180"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-globe-europe"></i>
        </span>
      </p>
      <p class="control has-icons-left">
        <input
          class="input"
          type="number"
          placeholder="Latitude"
          step="any"
          min="-90"
          max="90"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-globe-europe"></i>
        </span>
      </p>
      <div class="control m-lr-auto m-t-10p" v-if="parking === true">
        <label class="label m-a-auto m-t-10p text-center"
          >Geoloc du Squatt</label
        >
        <p class="control has-icons-left">
          <input
            class="input m-b-10p"
            type="number"
            placeholder="Longitude"
            step="any"
            min="-180"
            max="180"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-globe-europe"></i>
          </span>
        </p>
        <p class="control has-icons-left">
          <input
            class="input"
            type="number"
            placeholder="Latitude"
            step="any"
            min="-90"
            max="90"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-globe-europe"></i>
          </span>
        </p>
      </div>
      <label class="label m-a-auto m-t-10p">Confort sur place</label>
      <div class="flex-raw space-evenly">
        <div class="flex-column">
          <label class="checkbox">
            <input type="checkbox" />
            Eau potable </label
          ><label class="checkbox">
            <input type="checkbox" />
            Toilettes pratiques
          </label>
        </div>
        <div class="flex-column m-l-15p">
          <label class="checkbox">
            <input type="checkbox" />
            Riviere ou lac pas loin </label
          ><label class="checkbox">
            <input type="checkbox" />
            Reseau 4G ok
          </label>
        </div>
      </div>
    </div>
    <div class="flex-raw m-t-10p">
      <button class="button control isSecondary" @click="back">
        precedent
      </button>
      <button class="button control is-primary m-l-15p" @click="next">
        Suivant
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addSiteFormLoc",
  data() {
    return {
      parking: false,
      selectRegion: null,
      selectDept: null,
      regions: [],
      departements: [],
    };
  },
  methods: {
    getDept: function (code) {
      axios
        .get("https://geo.api.gouv.fr/regions/" + code + "/departements")
        .then((res) => (this.departements = res.data));
    },
    back: function () {
      this.$store.commit("setFormSite", 1);
    },
    next: function () {
      const site = {
        region: this.selectRegion,
        departement: this.selectDept,
        parking: this.parking,
      };
      this.$emit("site", site);
      this.$store.commit("setFormSite", 0);
    },
  },
  mounted() {
    axios
      .get("https://geo.api.gouv.fr/regions")
      .then((res) => (this.regions = res.data.slice(5 - 17)));
  },
};
</script>

<style lang="scss" scoped>
.field.has-addons .control:not(:last-child) {
  margin: auto;
}
</style>

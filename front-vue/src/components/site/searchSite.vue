<template>
  <div class="text-center flex-raw space-evenly">
    <div class="card m-t-1m">
      <div class="card-content flex-column">
        <h4 class="title is-4 text-center">Rechercher un Site</h4>
        <h5 class="subtitle is-5">
          <label class="checkbox m-t-2m">
            <input type="checkbox" v-model="regDept" />
            Par Region et Departement
          </label>
        </h5>

        <div class="select m-lr-auto">
          <select
            v-model="selectRegion"
            @change="getDept(selectRegion)"
            :disabled="!regDept"
          >
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
          <select v-model="selectDept" :disabled="!selectRegion">
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

        <h5 class="subtitle is-5">
          <label class="checkbox m-t-2m">
            <input type="checkbox" v-model="expo" />
            Par Exposition
          </label>
        </h5>
        <div class="select m-lr-auto">
          <select v-model="exposition" :disabled="!expo">
            <option :value="null">Sélectionnez l'exposition</option>
            <option v-for="expo in expositions" :key="expo.id">
              {{ expo.name }}
            </option>
          </select>
        </div>

        <h5 class="subtitle is-5">
          <label class="checkbox m-t-2m">
            <input type="checkbox" v-model="haut" />
            Par hauteur max
          </label>
        </h5>
        <div class="select m-lr-auto">
          <select v-model="hauteurMax" :disabled="!haut">
            <option :value="null">Sélectionnez la hauteur</option>
            <option v-for="hauteur in hauteurs" :key="hauteur.id">
              {{ hauteur.size }}
            </option>
          </select>
        </div>

        <h5 class="subtitle is-5">
          <label class="checkbox m-t-2m">
            <input type="checkbox" v-model="sais" />
            Par saisons
          </label>
        </h5>
        <div class="flex-raw space-evenly">
          <div class="flex-column">
            <label class="checkbox">
              <input type="checkbox" v-model="ete" :disabled="!sais" />
              Ete </label
            ><label class="checkbox">
              <input type="checkbox" v-model="hiver" :disabled="!sais" />
              Hiver
            </label>
          </div>
          <div class="flex-column m-l-15p">
            <label class="checkbox">
              <input type="checkbox" v-model="printemps" :disabled="!sais" />
              Printemps </label
            ><label class="checkbox">
              <input type="checkbox" v-model="automne" :disabled="!sais" />
              Automne
            </label>
          </div>
        </div>
      </div>
    </div>
    <filteredList :filter="filteredList" />
  </div>
</template>

<script>
import axios from "axios";
import filteredList from "./filteredList.vue";
export default {
  name: "searchSite",
  components: { filteredList },
  data() {
    return {
      sais: false,
      haut: false,
      expo: false,
      regDept: true,
      selectRegion: null,
      selectDept: null,
      hauteurMax: null,
      exposition: null,
      ete: false,
      hiver: false,
      printemps: false,
      automne: false,
      expositions: [
        { id: 0, name: "nord" },
        { id: 1, name: "nord - est" },
        { id: 2, name: "nord - ouest" },
        { id: 3, name: "sud " },
        { id: 4, name: "sud - est" },
        { id: 5, name: "sud - ouest" },
        { id: 6, name: "est" },
        { id: 7, name: "ouest" },
        { id: 8, name: "Multiple" },
      ],
      hauteurs: [
        { id: 0, size: "10 metres" },
        { id: 1, size: "15 metres" },
        { id: 2, size: "20 metres" },
        { id: 3, size: "25 metres" },
        { id: 4, size: "30 metres" },
        { id: 5, size: "35 metres" },
        { id: 6, size: "40 metres" },
      ],
      sites: [],
      regions: [],
      departements: [],
    };
  },
  mounted() {
    axios.get("spot").then((res) => {
      this.sites = res.data;
    });
    axios.get("https://geo.api.gouv.fr/regions").then((res) => {
      this.regions = res.data.slice(5 - 17);
    });
  },
  computed: {
    // regionSearch() {
    //   return this.sites.filter((site) => {
    //     if (this.selectDept) {
    //       console.log(this.selectDept);
    //       return site.departement === Number(this.selectDept);
    //     }
    //     if (this.selectRegion) {
    //       return site.region === Number(this.selectRegion);
    //     }
    //   });
    // },
    // toto() {
    //   return this.sites.filter((site) => {
    //     if (this.regDept && this.expo && this.haut && this.sais) {
    //       return site.region.toString().includes(this.selectRegion) &&
    //         site.departement.toString().includes(this.selectDept) &&
    //         site.exposition === this.exposition &&
    //         site.hauteurMax === this.hauteurMax &&
    //         this.automne
    //         ? site.automne === this.automne
    //         : false || this.hiver
    //         ? site.hiver === this.hiver
    //         : false || this.ete
    //         ? site.ete === this.ete
    //         : false || this.print
    //         ? site.printemps === this.print
    //         : false;
    //     }
    //     if (this.regDept && this.expo && this.haut) {
    //       return (
    //         site.region.toString().includes(this.selectRegion) &&
    //         site.departement.toString().includes(this.selectDept) &&
    //         site.exposition === this.exposition &&
    //         site.hauteurMax === this.hauteurMax
    //       );
    //     }
    //     if (this.regDept && this.expo) {
    //       return (
    //         site.region.toString().includes(this.selectRegion) &&
    //         site.departement.toString().includes(this.selectDept) &&
    //         site.exposition === this.exposition
    //       );
    //     }
    //     if (this.regDept) {
    //       const regDetpSearch =
    //         site.region.toString().includes(this.selectRegion) &&
    //         site.departement.toString().includes(this.selectDept);
    //       return regDetpSearch;
    //     }

    //     return false;
    //   });
    // },
    filteredList() {
      return this.sites.filter((site) => {
        if (this.regDept) {
          if (
            (Number(this.selectDept) &&
              site.departement !== Number(this.selectDept)) ||
            (Number(this.selectRegion) &&
              site.region !== Number(this.selectRegion))
          ) {
            return false;
          }
          if (
            Number(this.selectRegion) &&
            site.region !== Number(this.selectRegion)
          ) {
            return false;
          }
          if (
            this.expo &&
            this.exposition &&
            site.exposition !== this.exposition
          ) {
            return false;
          }
          if (
            this.haut &&
            this.hauteurMax &&
            site.hauteurMax !== this.hauteurMax
          ) {
            return false;
          }
          if (this.sais) {
            return this.saisonFilter(site);
          }
          return true;
        }
        if (this.expo) {
          if (this.exposition && site.exposition !== this.exposition) {
            return false;
          }
          if (
            this.haut &&
            this.hauteurMax &&
            site.hauteurMax !== this.hauteurMax
          ) {
            return false;
          }
          if (this.sais) {
            return this.saisonFilter(site);
          }

          return true;
        }
        if (this.haut) {
          if (this.hauteurMax && site.hauteurMax !== this.hauteurMax) {
            return false;
          }
          if (this.sais) {
            return this.saisonFilter(site);
          }
          return true;
        }
        if (this.sais) {
          return this.saisonFilter(site);
          // if (this.ete && site.ete !== this.ete) {
          //   return false;
          // }
          // if (this.hiver && site.hiver !== this.hiver) {
          //   return false;
          // }
          // if (this.automne && site.automne !== this.automne) {
          //   return false;
          // }
          // if (this.printemps && site.printemps !== this.printemps) {
          //   return false;
          // }
          // return true;
        }
        return false;
      });
    },
  },

  methods: {
    getDept: function (code) {
      axios
        .get("https://geo.api.gouv.fr/regions/" + code + "/departements")
        .then((res) => (this.departements = res.data));
    },
    saisonFilter: function (site) {
      if (this.ete && site.ete !== this.ete) {
        return false;
      }
      if (this.hiver && site.hiver !== this.hiver) {
        return false;
      }
      if (this.automne && site.automne !== this.automne) {
        return false;
      }
      if (this.printemps && site.printemps !== this.printemps) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/theme";
.card {
  max-width: 40%;
  min-width: 40%;
  background-color: $b-g-transparent;
}
</style>

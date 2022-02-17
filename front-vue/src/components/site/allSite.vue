<template>
  <div class="flex-raw">
    <div class="max-width-25 field m-lr-auto m-t-1m" v-if="status === 'all'">
      <p class="control has-icons-left">
        <input
          class="input"
          type="search"
          placeholder="Rechercher par nom"
          v-model="search"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
    <button
      class="button is-fullwidth m-lr-auto max-width-25 m-t-1m but"
      @click="switchToSearch"
      v-if="status === 'all'"
    >
      Recherche avancée
    </button>
  </div>
  <div class="">
    <div
      class="flex-raw space-evenly flex-wrap stretch m-t-1m over"
      v-if="status === 'all'"
    >
      <div
        class="box m-b-10p text-center"
        v-for="site in searchSite"
        :key="site.id"
        @click="switchToOne(site.id)"
      >
        <p class="subtitle">{{ site.name }}</p>
      </div>
    </div>
    <div class="m-lr-auto max-width-60" v-if="status === 'one'">
      <oneSite class="m-t-1m m-lr-auto" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import oneSite from "../site/oneSite.vue";
export default {
  name: "allSite",
  components: {
    oneSite,
  },
  data() {
    return {
      sites: [],

      search: "",
    };
  },
  methods: {
    switchToOne: function (id) {
      console.log(id);
      console.log("toto");
      this.$store.commit("spotid", id);
      this.$store.commit("setCardSite", "one");
      this.$store.commit("searchButton", false);
    },
    switchToSearch: function () {
      this.$router.push("site");
      return this.$store.commit("setSite", "search");
    },
    // showOne: function (id) {
    //   axios.get("spot/" + id).then((res) => {
    //     console.log(res.data);
    //     this.fiche = res.data;
    //     this.status = "site";
    //     this.getRegion();
    //   });
    // },
    // getRegion: function () {
    //   axios
    //     .get(
    //       "https://geo.api.gouv.fr/regions/" +
    //         this.fiche.region +
    //         "?fields=code"
    //     )
    //     .then((res) => (this.regions = res.data.nom));
    // },
  },
  mounted() {
    axios.get("spot").then((res) => {
      this.sites = res.data;
    });
  },

  computed: {
    status() {
      return this.$store.state.cardSite;
    },
    searchSite() {
      return this.sites.filter((site) => {
        return site.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/theme";

.over {
  overflow: auto;
  max-height: 79vh;
}
.but {
  background-color: $b-g-transparent;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 34%);
  &:hover {
    background-color: $hoverable;
  }
}
.box {
  max-width: 15%;
  min-width: 15%;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 34%);
  background-color: $b-g-transparent;
  cursor: pointer;
  &:hover {
    background-color: $hoverable;
  }
}
.input {
  box-shadow: 0px 3px 6px rgb(0 0 0 / 34%);
}
.max-width-60 {
  max-width: 60%;
}
</style>

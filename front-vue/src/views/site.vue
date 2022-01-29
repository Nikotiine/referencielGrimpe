<template>
  <navbar />
  <div class="flex-raw m-t-10 space-evenly" v-if="status === 'normal'">
    <cardsites />
    <cardSearch />
    <cardAddSite />
  </div>
  <div class="flex-raw m-t-10 m-lr-auto max-width-50" v-if="status === 'add'">
    <addSite />
  </div>
  <div class="flex-raw m-t-10 m-lr-auto max-width-50" v-if="status === 'all'">
    <allSite />
  </div>
  <div
    class="flex-raw m-t-10 m-lr-auto max-width-50"
    v-if="status === 'search'"
  >
    <searchSite />
  </div>
</template>
<script>
import navbar from "../components/navbar.vue";
import cardsites from "../components/cardsites.vue";
import cardSearch from "../components/cardSearch.vue";
import cardAddSite from "../components/cardAddSite.vue";
import addSite from "../components/addSite.vue";
import allSite from "../components/allSite.vue";
import searchSite from "../components/searchSite.vue";
export default {
  data() {
    return {};
  },
  components: {
    navbar,
    cardsites,
    cardSearch,
    cardAddSite,
    addSite,
    allSite,
    searchSite,
  },
  methods: {},
  computed: {
    status() {
      return this.$store.state.site;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  max-width: 25%;
}
img {
  max-height: 200px;
}
</style>

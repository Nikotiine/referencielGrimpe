<template>
  <div v-if="status === 'card'">
    <cardsites />
  </div>
  <div v-if="status === 'add'">
    <addSite />
  </div>
  <div class="" v-if="status === 'all'">
    <allSite />
  </div>
  <div class="text-center flex-raw space-evenly" v-if="status === 'search'">
    <searchSite />
  </div>
</template>
<script>
//import navbar from "../components/navbar.vue";
import cardsites from "../components/cardsites.vue";
import addSite from "../components/addSite/addSite.vue";
import allSite from "../components/site/allSite.vue";
import searchSite from "../components/site/searchSite.vue";
export default {
  data() {
    return {};
  },
  components: {
    cardsites,
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
img {
  max-height: 200px;
}
</style>

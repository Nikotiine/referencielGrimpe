<template>
  <div class="card m-t-1m min-wi" v-if="mode === 'search'">
    <div class="card-content flex-column">
      <h4 class="title is-4 text-center">{{ this.filter.length }} Resultats</h4>
      <div class="tags are-large">
        <span
          class="tag"
          v-for="site in this.filter"
          :key="site.id"
          @click="switchToOne(site.id)"
          >{{ site.name }}</span
        >
      </div>
    </div>
  </div>
  <div v-if="mode === 'one'" class="min-wi m-t-1m">
    <oneSite />
  </div>
</template>

<script>
import oneSite from "./oneSite.vue";
export default {
  name: "filteredList",
  props: ["filter"],
  components: { oneSite },
  data() {
    return {
      mode: "search",
    };
  },
  methods: {
    switchToOne: function (id) {
      this.$store.commit("spotid", id);
      this.mode = "one";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/theme";
.card {
  max-width: 40%;
  background-color: $b-g-transparent;
  overflow: auto;
  max-height: 90vh;
}
.min-wi {
  min-width: 40%;
}
</style>

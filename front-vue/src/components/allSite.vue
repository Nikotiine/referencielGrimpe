<template>
  <div class="flex-raw m-t-10 space-evenly">
    <div class="card" v-for="site in sites" :key="site.id">
      <div class="card-image">
        <figure class="image">
          <img src="../../src/assets/img/site1.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ site.spotName }}</p>
            <p class="subtitle is-6">{{ site.nearHome }}</p>
          </div>
        </div>

        <div class="content">
          <p>{{ site.tailleSite }} {{ site.rockType }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "allSite",
  data() {
    return {
      sites: [],
    };
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:3000/spot/")
  //     .then((res) => (this.sites = res.data));
  // },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 25%;
  box-shadow: 2px 2px 0 black;
}
img {
  max-height: 200px;
}
</style>

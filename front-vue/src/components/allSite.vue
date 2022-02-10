<template>
  <div class="flex-column space-evenly flex-wrap stretch over m-t-10p">
    <div class="box m-b-10p text-center" v-for="site in sites" :key="site.id">
      <p class="subtitle">{{ site.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allSite",
  data() {
    return {
      sites: [],
    };
  },
  mounted() {
    axios.get("spot").then((res) => (this.sites = res.data));
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 35%;

  box-shadow: 2px 2px 0 black;
  max-height: 10%;
}
img {
  max-height: 200px;
}
.over {
  overflow: scroll;
  max-height: 100vh;
}
.grow1 {
  flex-grow: 1;
}
.box {
  max-width: 15%;
  min-width: 15%;
}
</style>

<template>
  <div>
    <cardsites />
  </div>
</template>
<script>
//import navbar from "../components/navbar.vue";
import cardsites from "../components/mainCards/cardsites.vue";

export default {
  data() {
    return {};
  },
  components: {
    cardsites,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
img {
  max-height: 200px;
}
</style>

<template>
  <div>
    <cardvoies v-if="status === 'normal'" />
  </div>
  <div class="max-width-60 m-lr-auto" v-if="status === 'add'">
    <addVoie />
  </div>
</template>

<script>
//import navbar from "../components/navbar.vue";
import cardvoies from "../components/cardvoies.vue";
import addVoie from "../components/addVoie/addVoie.vue";
export default {
  name: "voies",
  components: { cardvoies, addVoie },
  methods: {},

  computed: {
    status() {
      return this.$store.state.voies;
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <p>{{ profil.email }}</p>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "userProfil",
  data() {
    return {
      profil: this.$store.state.login,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped></style>

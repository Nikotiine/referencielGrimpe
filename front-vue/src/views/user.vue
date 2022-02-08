<template>
  <navbar />
  <div v-if="status === 'user'">
    <usercard />
  </div>
  <div v-if="status === 'profil'">
    <userProfil />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import usercard from "../components/usercard.vue";
import userProfil from "../components/user/userProfil.vue";
export default {
  name: "user",
  components: { navbar, usercard, userProfil },
  computed: {
    status() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped></style>

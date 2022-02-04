<template>
  <navbar />
  <div v-if="status === 'user'">
    <usercard />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import usercard from "../components/usercard.vue";
export default {
  name: "user",
  components: { navbar, usercard },
  computed: {
    status() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped></style>

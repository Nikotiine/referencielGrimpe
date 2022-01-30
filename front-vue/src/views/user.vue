<template>
  <navbar />
  <div v-if="status === 'user'">
    <mainCard />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import mainCard from "../components/maincard.vue";
export default {
  name: "user",
  components: { navbar, mainCard },
  computed: {
    status() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <usercard />
  </div>
</template>

<script>
//import navbar from "../components/navbar.vue";
import usercard from "../components/mainCards/usercard.vue";

export default {
  name: "user",
  components: { usercard },
  computed: {},
};
</script>

<style lang="scss" scoped></style>

<template>
  <authentication v-if="mode === '1'" />
  <newUser v-if="mode === '2'" />
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

import authentication from "../components/authentication.vue";
import newUser from "../components/new-user.vue";

export default {
  name: "Home",
  components: { authentication, newUser },
  data() {
    return {};
  },
  computed: {
    mode() {
      return this.$store.state.mode;
    },
  },
};
</script>

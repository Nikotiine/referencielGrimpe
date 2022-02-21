<template>
  <cardcroix v-if="status === 'normal'" />
  <div class="max-width-60 m-lr-auto" v-if="status === 'add'">
    <addcroix />
  </div>

  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import cardcroix from "../components/croix/cardcroix.vue";
import addcroix from "../components/croix/addCroix.vue";

export default {
  data() {
    return {};
  },
  components: { cardcroix, addcroix },
  computed: {
    status() {
      return this.$store.state.croix;
    },
  },
};
</script>

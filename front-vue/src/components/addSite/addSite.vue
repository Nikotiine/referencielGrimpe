<template>
  <form class="box m-lr-auto m-t-10p" v-on:submit.prevent="onSubmit">
    <div class="field flex-column align-center">
      <div class="field has-addons" v-if="status === 0">
        <label class="label m-a-auto">Nom du site</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="text" v-model="newSite.name" />
          <span class="icon is-small is-left">
            <i class="fas fa-tag"></i>
          </span>
        </p>
      </div>
      <addSiteFormInfo v-if="status === 1" @site="addInfo" />
      <addSiteFormLoc v-if="status === 2" @site="addLoc" />
      <div class="flex-raw m-t-10p">
        <button
          class="button control is-primary m-l-15p"
          @click="next"
          v-if="status === 0"
        >
          Suivant
        </button>
      </div>
      <div>{{ newSite }}</div>
    </div>
  </form>
</template>

<script>
import addSiteFormInfo from "./addSiteFormInfo.vue";
import addSiteFormLoc from "./addSiteFormLoc.vue";

export default {
  name: "addSite",
  components: { addSiteFormInfo, addSiteFormLoc },
  data() {
    return {
      newSite: { name: null },
    };
  },
  methods: {
    next: function () {
      this.$store.commit("setFormSite", 1);
    },

    addInfo: function (e) {
      this.newSite = {
        ...this.newSite,
        ...e,
      };
    },
    addLoc: function (e) {
      this.newSite = {
        ...this.newSite,
        ...e,
      };
    },
  },
  mounted() {},

  created() {},
  computed: {
    status() {
      return this.$store.state.formSite;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/theme";
form {
  background-color: $b-g-transparent;
  overflow: auto;
  max-height: 90vh;
}
</style>

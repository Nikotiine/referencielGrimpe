<template>
  <form class="box m-lr-auto m-t-10p" v-on:submit.prevent="onSubmit">
    <div class="field flex-column align-center">
      <div class="field has-addons" v-if="form === 0">
        <label class="label m-a-auto">Nom du site</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="text" />
          <span class="icon is-small is-left">
            <i class="fas fa-tag"></i>
          </span>
        </p>
      </div>
      <addSiteFormInfo v-if="form === 1" />
      <addSiteFormLoc v-if="form === 2" />
      <div class="flex-raw m-t-10p">
        <button
          class="button control isSecondary"
          @click="back"
          v-if="addStatus === 1"
        >
          precedent
        </button>
        <button class="button control is-primary m-l-15p" @click="next">
          Suivant
        </button>
      </div>
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
      form: 0,
      addStatus: 0,
    };
  },
  methods: {
    next: function () {
      this.form += 1;
      this.addStatus = 1;
    },
    back: function () {
      this.form -= 1;
      if (this.form === 0) {
        this.addStatus = 0;
      }
    },
  },
  mounted() {},

  created() {},
  computed: {},
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

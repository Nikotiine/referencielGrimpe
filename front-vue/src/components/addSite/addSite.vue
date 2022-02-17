<template>
  <form class="box m-lr-auto m-t-10p" v-on:submit.prevent="onSubmit">
    <div class="field flex-column align-center">
      <div class="field has-addons" v-if="status === 0">
        <label class="label m-a-auto">Nom du site</label>
        <p class="control has-icons-left m-l-15p">
          <input
            class="input"
            :class="{
              'is-success': fieldIsValide,
              'is-danger': nameIsUsed.length === 1,
            }"
            type="text"
            v-model="newSite.name"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-tag"></i>
          </span>
        </p>
        <Transition>
          <div
            class="notification is-danger is-light danger-shadow"
            v-if="nameIsUsed.length === 1"
          >
            <strong>Nom deja utilisé</strong>
          </div></Transition
        >
      </div>
      <addSiteFormInfo v-if="status === 1" @site="addInfo" />
      <addSiteFormLoc v-if="status === 2" @site="addLoc" />
      <div class="flex-raw m-t-10p">
        <button
          class="button control is-primary m-l-15p"
          @click="next"
          v-if="status === 0"
          :disabled="!fieldIsValide || nameIsUsed.length === 1"
        >
          Suivant
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import addSiteFormInfo from "./addSiteFormInfo.vue";
import addSiteFormLoc from "./addSiteFormLoc.vue";

export default {
  name: "addSite",
  components: { addSiteFormInfo, addSiteFormLoc },
  data() {
    return {
      newSite: { name: "" },
      sites: [],
    };
  },
  methods: {
    next: function () {
      if (this.fieldIsValide === false) {
        return;
      } else {
        this.$store.commit("setFormSite", 1);
      }
    },

    addInfo: function (info) {
      this.newSite = {
        ...this.newSite,
        ...info,
      };
    },
    addLoc: function (loc) {
      this.newSite = {
        ...this.newSite,
        ...loc,
      };
      console.log(this.newSite);
      axios.post("spot", this.newSite).then((res) => console.log(res));
    },
  },
  mounted() {
    axios.get("spot").then((res) => {
      this.sites = res.data;
    });
  },

  created() {},
  computed: {
    status() {
      return this.$store.state.formSite;
    },
    fieldIsValide() {
      if (this.newSite.name != "") {
        return true;
      }
      return false;
    },
    nameIsUsed() {
      return this.sites.filter((site) => {
        if (this.newSite.name && site.name !== this.newSite.name) {
          return false;
        }
        return true;
      });
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
.notification {
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%);
  width: 25%;
  text-align: center;
  z-index: 2;
}
.v-enter-active {
  transition: opacity 1.2s ease;
}
.v-leave-active {
  transition: opacity 0.8s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

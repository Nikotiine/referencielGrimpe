<template>
  <form class="box m-lr-auto" v-on:submit.prevent="onSubmit">
    <div class="field">
      <div class="field has-addons" v-if="form === 0">
        <label class="label m-a-auto">Nom du site</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="text" />
          <span class="icon is-small is-left">
            <i class="fas fa-tag"></i>
          </span>
        </p>
      </div>
      <div class="field has-addons" v-if="form === 1">
        <label class="label m-a-auto">Exposition</label>
        <div class="select m-l-15p">
          <select>
            <option>Selectionez l'exposition</option>
            <option v-for="expo in exposition" :key="expo.id">
              {{ expo.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="field has-addons" v-if="form === 2">
        <label class="label m-a-auto">temps d'approche</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="number" />
          <span class="icon is-small is-left">
            <i class="far fa-clock"></i>
          </span>
        </p>
      </div>
      <div class="field has-addons" v-if="form === 2">
        <label class="label m-a-auto">Type d'approche</label>
        <div class="select m-l-15p">
          <select>
            <option>Selectionez l'approche</option>
            <option v-for="approche in approches" :key="approche.id">
              {{ approche.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="field has-addons" v-if="form === 3">
        <label class="label m-a-auto">Hauteur des voies</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="number" />
          <span class="icon is-small is-left">
            <i class="fas fa-mountain"></i>
          </span>
        </p>
      </div>

      <div class="field has-addons" v-if="form === 3">
        <label class="label m-a-auto">Profil des Voies</label>
        <div class="flex-raw">
          <div class="flex-column">
            <label class="checkbox">
              <input type="checkbox" />
              dalle </label
            ><label class="checkbox">
              <input type="checkbox" />
              vertical
            </label>
          </div>
          <div class="flex-column m-l-15p">
            <label class="checkbox">
              <input type="checkbox" />
              Devers </label
            ><label class="checkbox">
              <input type="checkbox" />
              surplomb
            </label>
          </div>
        </div>
      </div>

      <div class="field" v-if="mode === '4'">
        <label class="label">Mot de passe</label>
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <button class="button control is-primary" @click="next">Suivant</button>
      <button
        class="button control isSecondary"
        @click="back"
        v-if="addStatus === 1"
      >
        precedent
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "addSite",
  data() {
    return {
      form: 0,
      addStatus: 0,
      exposition: [
        { id: 0, name: "nord" },
        { id: 1, name: "nord - est" },
        { id: 2, name: "nord - ouest" },
        { id: 3, name: "sud " },
        { id: 4, name: "sud - est" },
        { id: 5, name: "sud - ouest" },
        { id: 6, name: "est" },
        { id: 7, name: "ouest" },
      ],
      approches: [
        {
          id: 0,
          name: "en montée legere",
        },
        {
          id: 1,
          name: "en montée raide",
        },
        {
          id: 2,
          name: "sur du plat",
        },
        {
          id: 3,
          name: "en descente legere",
        },
        {
          id: 4,
          name: "en descente raide",
        },
      ],
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
  created() {},
};
</script>

<style lang="scss" scoped></style>

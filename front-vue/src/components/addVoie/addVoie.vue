<template>
  <form class="box m-lr-auto m-t-10p" v-on:submit.prevent="onSubmit">
    <div class="field flex-column align-center">
      <h1 class="title text-center">Details de la voie</h1>
      <div class="field has-addons flex-column">
        <label class="label m-a-auto m-t-10p">Choisir un site</label>
        <div class="select m-lr-auto">
          <select>
            <option>Selectionnez le site</option>
            <option v-for="site in sites" :key="site.id">
              {{ site.name }}
            </option>
          </select>
        </div>
        <div class="select m-lr-auto m-t-10p">
          <select>
            <option>Sélectionnez le secteur</option>
            <option>un secteur</option>
          </select>
        </div>
        <label class="label m-a-auto m-t-10p">Nom de la voie</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="text" placeholder="nom" />
          <span class="icon is-small is-left">
            <i class="fas fa-tag"></i>
          </span>
        </p>
        <label class="label m-a-auto m-t-10p">Cotation</label>
        <div class="select m-lr-auto">
          <select>
            <option>Selectionnez le degres</option>
            <option v-for="degre in cotations" :key="degre.id">
              {{ degre.number }}
            </option>
          </select>
        </div>
        <div class="select m-lr-auto m-t-10p">
          <select>
            <option>Selectionnez le abc</option>
            <option v-for="degre in cotations" :key="degre.id">
              {{ degre.lettre }}
            </option>
          </select>
        </div>
        <label class="label m-a-auto m-t-10p">Nombre de paires</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="tel" placeholder="nom" />
          <span class="icon is-small is-left">
            <i class="fas fa-tag"></i>
          </span>
        </p>
        <label class="label m-a-auto m-t-10p">longueur de la voie</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="tel" placeholder="longueur" />
          <span class="icon is-small is-left">
            <i class="fas fa-tag"></i>
          </span>
        </p>
        <label class="label m-a-auto m-t-10p">type d'effort</label>
        <div class="flex-column space-evenly">
          <div class="flex-raw space-evenly">
            <label class="checkbox">
              <input type="checkbox" />
              resi </label
            ><label class="checkbox">
              <input type="checkbox" />
              conti </label
            ><label class="checkbox">
              <input type="checkbox" />
              bloc
            </label>
          </div>
          <label class="label m-a-auto m-t-10p">Profil de la voie</label>
          <div class="flex-raw space-evenly">
            <div class="flex-column">
              <label class="checkbox">
                <input type="checkbox" />
                dalle
              </label>
              <label class="checkbox">
                <input type="checkbox" />
                vertical</label
              >
            </div>
            <div class="flex-column">
              <label class="checkbox">
                <input type="checkbox" />
                devers
              </label>
              <label class="checkbox">
                <input type="checkbox" />
                surplomb</label
              >
            </div>
          </div>
          <label class="label m-a-auto m-t-10p">Equipement</label>
          <div class="flex-raw space-evenly">
            <label class="radio">
              <input type="radio" name="equipement" />
              plaquette </label
            ><label class="radio">
              <input type="radio" name="equipement" />
              broches </label
            ><label class="radio">
              <input type="radio" name="equipement" />
              trad
            </label>
          </div>
        </div>
        <div class="flex-raw m-t-10p justify-center">
          <button class="button control isSecondary" @click="back">
            precedent
          </button>
          <button class="button control is-primary m-l-15p" @click="next">
            Suivant
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "addvoie",
  data() {
    return {
      newVoie: { name: null },
      cotations: [
        { id: 0, number: "4", lettre: "A" },
        { id: 1, number: "5", lettre: "A+" },
        { id: 2, number: "6", lettre: "B" },
        { id: 3, number: "7", lettre: "B+" },
        { id: 4, number: "8", lettre: "C" },
        { id: 5, number: "9", lettre: "C+" },
      ],
      sites: null,
    };
  },
  mounted() {
    axios.get("spot").then((res) => {
      this.sites = res.data;
    });
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

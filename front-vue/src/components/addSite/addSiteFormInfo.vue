<template>
  <div class="field">
    <h1 class="title text-center">Details du site</h1>
    <div class="field has-addons flex-column">
      <label class="label m-a-auto">Exposition</label>
      <div class="select m-lr-auto">
        <select v-model="site.exposition">
          <option :value="null">Sélectionnez l'exposition</option>
          <option v-for="expo in exposition" :key="expo.id">
            {{ expo.name }}
          </option>
        </select>
      </div>
      <label class="label m-a-auto m-t-10p">Meilleure saison</label>
      <div class="flex-raw space-evenly">
        <div class="flex-column">
          <label class="checkbox">
            <input type="checkbox" v-model="site.ete" />
            Ete </label
          ><label class="checkbox">
            <input type="checkbox" v-model="site.hiver" />
            Hiver
          </label>
        </div>
        <div class="flex-column m-l-15p">
          <label class="checkbox">
            <input type="checkbox" v-model="site.printemps" />
            Printemps </label
          ><label class="checkbox">
            <input type="checkbox" v-model="site.automne" />
            Automne
          </label>
        </div>
      </div>

      <label class="label m-a-auto m-t-10p">Temps d'approche</label>
      <div class="select m-lr-auto">
        <select v-model="site.tempsApproche">
          <option :value="null">Sélectionnez le temps</option>
          <option v-for="approche in approches" :key="approche.id">
            {{ approche.temps }}
          </option>
        </select>
      </div>

      <label class="label m-a-auto m-t-10p">Type d'approche</label>
      <div class="select m-lr-auto">
        <select v-model="site.typeApproche">
          <option :value="null">Sélectionnez l'approche</option>
          <option v-for="approche in approches" :key="approche.id">
            {{ approche.name }}
          </option>
        </select>
      </div>

      <label class="label m-a-auto m-t-10p">Hauteur max des voies</label>
      <div class="select m-lr-auto">
        <select v-model="site.hauteurMax">
          <option :value="null">Sélectionnez la hauteur</option>
          <option v-for="hauteur in hauteurs" :key="hauteur.id">
            {{ hauteur.size }}
          </option>
        </select>
      </div>
      <label class="label m-a-auto m-t-10p">Type de rocher</label>
      <div class="select m-lr-auto">
        <select v-model="site.rockType">
          <option :value="null">Sélectionnez le type</option>
          <option v-for="rock in rocks" :key="rock.id">
            {{ rock.name }}
          </option>
        </select>
      </div>
      <label class="label m-a-auto m-t-10p">Profil des voies</label>
      <div class="flex-raw space-evenly">
        <div class="flex-column">
          <label class="checkbox">
            <input type="checkbox" v-model="site.dalle" />
            Dalle </label
          ><label class="checkbox">
            <input type="checkbox" v-model="site.vertical" />
            Vertical
          </label>
        </div>
        <div class="flex-column m-l-15p">
          <label class="checkbox">
            <input type="checkbox" v-model="site.devers" />
            Devers</label
          ><label class="checkbox">
            <input type="checkbox" v-model="site.surplomb" />
            Surplomb
          </label>
        </div>
      </div>

      <label class="label m-a-auto m-t-10p">Engagement des voies</label>
      <div class="flex-raw space-evenly">
        <div class="flex-column">
          <label class="checkbox">
            <input type="checkbox" v-model="site.rapproche" />
            Rapproché </label
          ><label class="checkbox">
            <input type="checkbox" v-model="site.normal" />
            Normal
          </label>
        </div>
        <div class="flex-column m-l-15p">
          <label class="checkbox">
            <input type="checkbox" v-model="site.engage" />
            Engagé </label
          ><label class="checkbox">
            <input type="checkbox" v-model="site.expose" />
            Exposé
          </label>
        </div>
      </div>

      <label class="label m-a-auto m-t-10p">Nombre de lignes</label>
      <div class="select m-lr-auto">
        <select v-model="site.nombreLignes">
          <option :value="null">Sélectionnez le nombre</option>
          <option v-for="route in routes" :key="route.id">
            {{ route.total }}
          </option>
        </select>
      </div>
      <label class="label m-a-auto m-t-10p">Ticket D'entree</label>
      <div class="select m-lr-auto">
        <select v-model="site.niveauMini">
          <option :value="null">Sélectionnez le niveau</option>
          <option v-for="level in levels" :key="level.id">
            {{ level.levelMini }}
          </option>
        </select>
      </div>
      <label class="label m-a-auto m-t-10p">Nombre de secteurs</label>
      <div class="control m-lr-auto m-t-10p">
        <label class="radio">
          <input
            type="radio"
            name="secteur"
            :checked="secteur === false"
            v-model="site.secteur"
          />
          1 seul
        </label>
        <label class="radio">
          <input
            type="radio"
            name="secteur"
            v-on:change="secteur = !secteur"
            v-model="site.secteur"
          />
          plusieurs
        </label>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': secteur }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Ajouter les differents secteurs</p>
          <button class="button is-success" @click="addSecteur">
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
            <span>Ajouter</span>
          </button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <div class="flex-raw space-between align-center">
            <label class="label">Nom des differents secteurs</label>
            <button
              class="button is-white"
              @click="supSecteur"
              v-if="inputs.length > 1"
            >
              <span class="icon is-small">
                <i class="fas fa-times-circle"></i>
              </span>
            </button>
          </div>
          <div class="field has-addons flex-column">
            <input
              class="input is-primary m-t-10p"
              type="text"
              :placeholder="'Secteur#' + input.ref"
              v-for="input in inputs"
              :key="input.ref"
              v-model="input.name"
            />
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-info" @click="saveSecteurs">
            Enregistrer
          </button>
          <button class="button" @click="cancel">Cancel</button>
        </footer>
      </div>
    </div>
    <div class="flex-raw m-t-10p">
      <button class="button control isSecondary" @click="back">
        precedent
      </button>
      <button
        class="button control is-primary m-l-15p"
        @click="next"
        :disabled="validateField"
      >
        Suivant
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addSiteFormInfo",

  data() {
    return {
      site: {
        exposition: null,
        ete: false,
        hiver: false,
        automne: false,
        printemps: false,
        tempsApproche: null,
        typeApproche: null,
        hauteurMax: null,
        rockType: null,
        vertical: false,
        dalle: false,
        devers: false,
        surplomb: false,
        rapproche: false,
        normal: false,
        expose: false,
        engage: false,
        nombreLignes: null,
        niveauMini: null,
        secteur: false,
        secteurs: [],
      },
      secteur: false,
      exposition: [
        { id: 0, name: "nord" },
        { id: 1, name: "nord - est" },
        { id: 2, name: "nord - ouest" },
        { id: 3, name: "sud " },
        { id: 4, name: "sud - est" },
        { id: 5, name: "sud - ouest" },
        { id: 6, name: "est" },
        { id: 7, name: "ouest" },
        { id: 8, name: "Multiple" },
      ],
      approches: [
        {
          id: 0,
          name: "en montée legere",
          temps: "- de 15 minutes",
        },
        {
          id: 1,
          name: "en montée raide",
          temps: "de 15 à 30 minutes",
        },
        {
          id: 2,
          name: "sur du plat",
          temps: "de 30 à 45 minutes",
        },
        {
          id: 3,
          name: "en descente legere",
          temps: "de 45 à 60 minutes",
        },
        {
          id: 4,
          name: "en descente raide",
          temps: "+ d'une heure",
        },
      ],
      rocks: [
        { id: 0, name: "Calcaire" },
        { id: 1, name: "Granit" },
        { id: 2, name: "Molasse" },
        { id: 3, name: "Gneiss" },
        { id: 4, name: "Gres" },
        { id: 5, name: "Quartzite" },
        { id: 6, name: "Pudding" },
        { id: 7, name: "Ardoise" },
        { id: 8, name: "Marbre" },
        { id: 9, name: "Basalt" },
        { id: 10, name: "Autre" },
      ],
      routes: [
        { id: 0, total: "- de 25 voies" },
        { id: 1, total: "de 25 à 50 voies" },
        { id: 2, total: "de 50 à 100 voies" },
        { id: 3, total: "de 100 à 200 voies" },
        { id: 4, total: "+ de 200 voies" },
      ],
      levels: [
        { id: 0, levelMini: "4/4sup" },
        { id: 1, levelMini: "5 moins" },
        { id: 2, levelMini: "5 sup" },
        { id: 3, levelMini: "6 A/B" },
        { id: 4, levelMini: "6sup/7" },
      ],
      inputs: [{ ref: 0, name: "" }],
      hauteurs: [
        { id: 0, size: "10 metres" },
        { id: 1, size: "15 metres" },
        { id: 2, size: "20 metres" },
        { id: 3, size: "25 metres" },
        { id: 4, size: "30 metres" },
        { id: 5, size: "35 metres" },
        { id: 6, size: "40 metres" },
      ],
    };
  },
  methods: {
    addSecteur: function () {
      this.inputs.push({ ref: this.inputs.length });
    },
    supSecteur: function () {
      this.inputs.pop();
    },
    cancel: function () {
      this.secteur = !this.secteur;

      this.inputs = [{ ref: 0 }];
    },
    saveSecteurs: function () {
      //this.inputs.push({ name: this.inputs.name });
      this.inputs.name = this.inputs.value;
      this.site.secteurs = this.inputs;
      this.site.secteur = true;
      this.secteur = !this.secteur;
    },
    next: function () {
      this.$emit("site", this.site);
      this.$store.commit("setFormSite", 2);
    },
    back: function () {
      this.$store.commit("setFormSite", 0);
    },
  },
  computed: {
    validateField() {
      if (
        !this.site.exposition ||
        !this.site.tempsApproche ||
        !this.site.typeApproche ||
        !this.site.hauteurMax ||
        !this.site.rockType ||
        !this.site.niveauMini ||
        !this.site.nombreLignes
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.field.has-addons .control:not(:last-child) {
  margin: auto;
}
</style>

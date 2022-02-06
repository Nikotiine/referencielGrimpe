<template>
  <form class="box m-lr-auto m-t-10p" v-on:submit.prevent="onSubmit">
    <div class="field flex-column align-center">
      <h1 class="title text-center">Details de la voie</h1>
      <div class="field has-addons flex-column">
        <label class="label m-a-auto m-t-10p">Choisir un site</label>
        <div class="select m-lr-auto">
          <select>
            <option>Selectionnez le site</option>
            <option>un site</option>
          </select>
        </div>
        <div class="select m-lr-auto m-t-10p">
          <select>
            <option>Sélectionnez le secteur</option>
            <option>un secteur</option>
          </select>
        </div>
        <label class="label m-a-auto m-t-10p">Sectionner la voie</label>
        <div class="select m-lr-auto">
          <select>
            <option>Selectionnez la voie</option>
            <option>une voie</option>
          </select>
        </div>

        <label class="label m-a-auto m-t-10p">Realisation</label>
        <div class="flex-raw space-evenly">
          <label class="radio">
            <input type="radio" name="equipement" />
            A vue </label
          ><label class="radio">
            <input type="radio" name="equipement" />
            Flash </label
          ><label class="radio">
            <input type="radio" name="equipement" />
            apres travail
          </label>
        </div>
        <label class="label m-a-auto m-t-10p">date Realisation</label>
        <div class="flex-raw space-evenly">
          <input type="date" class="input" />
        </div>
        <div class="select m-lr-auto m-t-10p">
          <label class="label m-a-auto m-t-10p">Nombre d'essais</label>
          <p class="control has-icons-left m-l-15p">
            <input class="input" type="tel" placeholder="essai" />
            <span class="icon is-small is-left">
              <i class="fas fa-tag"></i>
            </span>
          </p>
        </div>

        <label class="label m-a-auto m-t-10p">Commentaires</label>
        <p class="control has-icons-left m-l-15p">
          <input class="input" type="text" placeholder="commentaire" />
          <span class="icon is-small is-left">
            <i class="fas fa-tag"></i>
          </span>
        </p>
        <label class="label m-a-auto m-t-10p">type d'effort</label>
        <div class="flex-column space-evenly">
          <div class="flex-raw space-evenly">
            <label class="checkbox">
              <input type="checkbox" />
              coup de coeur
            </label>
          </div>
          <label class="label m-a-auto m-t-10p">Profil de la voie</label>
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
export default {
  name: "addcroix",
};
</script>

<style lang="scss" scoped></style>

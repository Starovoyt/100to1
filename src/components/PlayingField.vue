<template>
  <div class="playing-field__container">
    <template v-if="isAppInit">
      <AsideField color="blue"></AsideField>
      <CenterField></CenterField>
      <AsideField color="red"></AsideField>
    </template>
    <GameLoader v-else></GameLoader>
  </div>
</template>

<script>
import AsideField from "@/components/AsideField";
import CenterField from "@/components/CenterField";
import GameLoader from "@/components/GameLoader";

import {mapGetters} from 'vuex'

export default {
  name: "PlayingField",

  components: {
    AsideField,
    CenterField,
    GameLoader,
  },

  computed: {
    ...mapGetters([
        'isAppInit',
    ]),
  }
}
</script>

<style scoped>
.playing-field__container {
  display: flex;
  height: 100%;
}
</style>

<style>
.playing-field__container .aside-field__container:first-child .score-counter__container {
  box-shadow: 7px 3px 10px black;
}

.playing-field__container .aside-field__container:last-child .score-counter__container {
  box-shadow: -7px 3px 10px black;
}
</style>
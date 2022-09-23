<template>
<div class="big-game-section__container">
  <BigGameAnswers
      v-for="player in players"
      :player="player"
      :key="player._id"
  ></BigGameAnswers>
</div>
</template>

<script>
import BigGameAnswers from "@/components/BigGameAnswers";

import {mapState} from 'vuex';

export default {
  name: "BigGameSection",

  components: {BigGameAnswers},

  computed: {
    ...mapState([
      'players',
    ]),
  },
}
</script>

<style scoped>
.big-game-section__container {
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 10% 2% 15% 2%;
}
</style>

<style>
.big-game-section__container .big-game-answers__container:last-child .big-game-answer-item__container {
  flex-direction: row-reverse;
}
</style>
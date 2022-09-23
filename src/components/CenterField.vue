<template>
  <div class="center-field__container">
    <div class="center-field__border"></div>
    <div class="center-field__main">
      <div class="center-field__main-header">
        <ScoreCounter
            :score="currentRound === 5 ? bigGameScore : generalScore"
        ></ScoreCounter>
      </div>
      <AnswersSection v-if="currentRound < 5"></AnswersSection>
      <BigGameSection v-else></BigGameSection>
    </div>
    <div class="center-field__border"></div>
  </div>
</template>

<script>
import ScoreCounter from "@/components/ScoreCounter";
import AnswersSection from "@/components/AnswersSection";
import BigGameSection from "@/components/BigGameSection";

import {mapGetters, mapState} from 'vuex'

export default {
  name: "CenterField",

  components: {
    ScoreCounter,
    AnswersSection,
    BigGameSection,
  },

  computed: {
    ...mapGetters([
      'generalScore',
      'currentRound',
    ]),

    ...mapState([
      'players',
    ]),

    bigGameScore() {
      return this.players.reduce((res1, player) => {
        res1 += player.answers.reduce((res2, answer) => {
          res2 += answer.score;

          return res2;
        }, 0);

        return res1;
      }, 0);
    },
  }
}
</script>

<style scoped>
.center-field__container {
  display: flex;
  width: 60%;
}

.center-field__border {
  position: relative;
  width: 5%;
  background-color: #b7ae99;
  z-index: 9;
}

.center-field__border:first-child {
  box-shadow: 5px 0px 8px black;
}

.center-field__border:last-child {
  box-shadow: -5px 0px 8px black;
}

.center-field__main {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  z-index: 1;
}

.center-field__main-header {
  display: flex;
  align-items: center;
  height: 25%;
  min-height: 70px;
  background-color: #d1d1d1;
}

.center-field__main {
  background-color: #d1d1d1;
}
</style>

<style>
.center-field__main-header .score-counter__container {
  box-shadow: inset 0px 2px 5px black;
}
</style>
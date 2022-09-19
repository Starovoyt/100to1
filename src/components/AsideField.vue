<template>
  <div class="aside-field__container" :class="color">
    <ScoreCounter :score="score" :color="color"></ScoreCounter>
  </div>
</template>

<script>
import ScoreCounter from "@/components/ScoreCounter";

import {mapGetters} from 'vuex'

export default {
  name: "AsideField",

  components: {
    ScoreCounter,
  },

  props: {
    color: {
      type: String,
      required: true,
      default: 'blue',
      validator(value) {
        return ['red', 'blue'].includes(value)
      },
    },
  },

  computed: {
    ...mapGetters([
        'blueTeamScore',
        'redTeamScore',
    ]),

    score() {
      switch (this.color) {
        case 'blue':
          return this.blueTeamScore;
        case 'red':
          return this.redTeamScore;
        default:
          return 0;
      }
    }
  },
}
</script>

<style scoped>
.aside-field__container {
  width: 20%;
  background: url("../assets/bg.jpg");
  -webkit-background-size: 100%;
  background-size: 100%;
  padding-top: 33vh;
}
</style>

<style>
.aside-field__container .score-counter__container {
  border: 15px solid #9a7e5d;
}
</style>
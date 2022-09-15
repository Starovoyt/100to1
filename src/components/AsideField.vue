<template>
  <div class="aside-field__container" :class="color">
    <ScoreCounter score="0" :color="color"></ScoreCounter>
  </div>
</template>

<script>
import ScoreCounter from "@/components/ScoreCounter";

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
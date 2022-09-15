<template>
  <div class="score-counter__container" :class="color">{{ score }}</div>
</template>

<script>
export default {
  name: "ScoreCounter",

  props: {
    score: {
      type: [String, Number],
      required: true,
      default: 0,
    },

    color: {
      type: String,
      required: true,
      default: 'gradient',
      validator(value) {
        return ['red', 'blue', 'gradient'].includes(value)
      },
    }
  }
}
</script>

<style scoped>
.score-counter__container {
  width: 185px;
  height: 70px;
  max-width: 80%;
  color: #ffffff;
  font-size: 66px;
  font-weight: 600;
  line-height: 68px;
  text-align: center;
  margin: 0px auto;
}

.score-counter__container.gradient {
  background: rgb(197,0,0);
  background: linear-gradient(335deg, rgba(197,0,0,1) 0%, rgba(121,9,83,1) 50%, rgba(98,0,196,1) 100%);
}

.score-counter__container.blue {
  background-color: rgba(98,0,196,1);

}

.score-counter__container.red {
  background-color: rgba(197,0,0,1);
}
</style>
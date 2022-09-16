<template>
  <div class="big-game-answer-item__container">
    <template v-if="answer && answer.text && answer.score">
      <div class="big-game-answer-item__text">{{ answer.text }}</div>
      <div class="big-game-answer-item__score">{{ answer.score }}</div>
    </template>
    <div class="big-game-answer-item__hider" v-else>HIDER</div>
  </div>
</template>

<script>
export default {
  name: "BigGameAnswerItem",

  props: {
    answer: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped>
.big-game-answer-item__container {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: #d8f375;
  font-size: 3vh;
  padding: 3% 2%;
}

.big-game-answer-item__hider {
  width: 100%;
  background-color: #d8f375;
}
</style>
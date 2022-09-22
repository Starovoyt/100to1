<template>
  <div class="big-game-question-item__container">
    <div class="big-game-question-item__text">{{ question.text }}</div>
    <div class="big-game-question-item__answers">
      <select v-model="selectedAnswer">
        <option
            v-for="answer in question.answers"
            :value="answer"
            :key="answer._id"
        >
          {{ answer.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigGameQuestionItem",

  data() {
    return {
      selectedAnswer: '',
    };
  },

  props: {
    player: {
      type: String,
      required: true,
      validator(value) {
        return ['first', 'second'].includes(value)
      },
    },

    question: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
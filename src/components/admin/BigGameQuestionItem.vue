<template>
  <div class="big-game-question-item__container">
    <div
        class="big-game-question-item__text"
        @click="isAnswersShown = !isAnswersShown"
    >
      {{ question.text }}
    </div>
    <div class="big-game-question-item__answers" v-if="isAnswersShown">
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
      isAnswersShown: false,
    };
  },

  props: {
    player: {
      type: Object,
      required: true,
    },

    question: {
      type: Object,
      required: true,
    },
  },

  computed: {
    selectedAnswer: {
      get() {
        return this.player.answers.find((answer) => answer.order === this.question.order);
      },

      set(answer) {
        this.$socket.emit('SET_PLAYER_ANSWER', this.player._id, answer);
      },
    },
  },
}
</script>

<style scoped>
.big-game-question-item__text {
  padding: 10px;
  background-color: slategray;
  border-bottom: 1px solid black;
}

.big-game-question-item__answers {
  padding: 0px 10px;
}

.big-game-question-item__answers select {
  height: 30px;
  width: 100%;
}
</style>
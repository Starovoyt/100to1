<template>
  <div class="simple-answer-item__container" :class="{opened: isOpened}" @click="clickHandler">
    <div class="simple-answer-item__text">{{ text }}</div>
    <div class="simple-answer-item__score">{{ score }}</div>
  </div>
</template>

<script>
export default {
  name: "SimpleAnswerItem",

  props: {
    answer: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },

  computed: {
    id() {
      return this.answer._id;
    },

    text() {
      return this.answer.text;
    },

    score() {
      return this.answer.score;
    },

    isOpened() {
      return this.answer.isOpened;
    },
  },

  methods: {
    clickHandler() {
      this.isOpened
          ? this.closeAnswer(this.id)
          : this.openAnswer(this.id);
    },

    openAnswer(id) {
      this.$socket.emit('OPEN_ANSWER', id);
    },

    closeAnswer(id) {
      this.$socket.emit('CLOSE_ANSWER', id);
    },
  },
}
</script>

<style scoped>
.simple-answer-item__container {
  display: flex;
  padding: 7px;
  margin: 10px 5px;
  background: lightseagreen;
}

.simple-answer-item__container.opened {
  background-color: limegreen;
}

.simple-answer-item__text {
  width: 90%;
}

.simple-answer-item__score {
  width: 10%;
  text-align: right;
}
</style>
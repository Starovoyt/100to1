<template>
  <div class="answer-item__container" :class="{opened: isOpened}">
    <div class="answer-item__text__number">{{ number }}</div>
    <div class="answer-item__text">{{ text }}</div>
    <div class="answer-item__score">{{ score }}</div>
  </div>
</template>

<script>
export default {
  name: "AnswerItem",

  props: {
    answer: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },

  computed: {
    number() {
      return this.answer.order;
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
}
</script>

<style scoped>
.answer-item__container {
  display: flex;
  align-items: center;
  width: 87%;
  height: 12%;
  box-shadow: inset 0px 1px 4px black;
  border-radius: 5px;
  background: #ffb2b2;
  margin: 0px auto;
  padding: 0px 3%;
}

.answer-item__container:not(.opened) {
  justify-content: center;
}

.answer-item__container.opened {
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: #dfd7d7;
  text-transform: uppercase;
  font-size: 5vh;
  font-weight: bold;
}

.answer-item__text,
.answer-item__score,
.answer-item__container.opened .answer-item__text__number {
  display: none;
}

.answer-item__container.opened .answer-item__text,
.answer-item__container.opened .answer-item__score{
  display: block;
}

.answer-item__text__number {
  font-size: 6vh;
  font-weight: bold;
}
</style>
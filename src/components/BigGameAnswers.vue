<template>
  <div class="big-game-answers__container">
    <BigGameAnswerItem
        v-for="answer in answersByOrder"
        :answer="answer"
        :key="answer._id"
    ></BigGameAnswerItem>
  </div>
</template>

<script>
import BigGameAnswerItem from "@/components/BigGameAnswerItem";

export default {
  name: "BigGameAnswers",

  components: {
    BigGameAnswerItem,
  },

  props: {
    player: {
      type: Object,
      required: true,
    },
  },

  computed: {
    answersByOrder() {
      return [undefined, undefined, undefined, undefined, undefined]
          .map((el, index) => this.player.answers.find((answer) => answer.order === index + 1) || {_id: index});
    },
  },
}
</script>

<style scoped>
.big-game-answers__container {
  width: 100%;
  padding: 0px 1%;
}
</style>
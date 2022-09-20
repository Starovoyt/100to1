<template>
  <div class="question-field__container">{{ currentQuestionText }}</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "QuestionField",

  computed: {
    ...mapGetters([
      'currentQuestionText',
    ]),
  },
}
</script>

<style scoped>
.question-field__container {
  padding: 5px;
  text-align: center;
  background-color: #eb8745;
  font-weight: bold;
  border-bottom: 1px solid #9a7e5d;
}
</style>
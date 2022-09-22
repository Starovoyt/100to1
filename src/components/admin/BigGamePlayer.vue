<template>
  <div class="big-game-player__container">
    <BigGameQuestionItem
        v-for="question in bigGameQuestionsWithAnswers"
        :question="question"
        :key="question._id"
    ></BigGameQuestionItem>
  </div>
</template>

<script>
import BigGameQuestionItem from "@/components/admin/BigGameQuestionItem";

import {mapGetters} from 'vuex';

export default {
  name: "BigGamePlayer",

  components: {
    BigGameQuestionItem,
  },

  props: {
    player: {
      type: String,
      required: true,
      validator(value) {
        return ['first', 'second'].includes(value)
      },
    },
  },

  computed: {
    ...mapGetters([
      'bigGameQuestionsWithAnswers',
    ])
  },
}
</script>

<style scoped>

</style>
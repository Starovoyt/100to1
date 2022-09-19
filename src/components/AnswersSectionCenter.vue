<template>
  <div class="answers-section-center__container">
    <AnswerItem
        v-for="answer in currentRoundAnswers"
        :answer="answer"
        :key="answer._id"
    ></AnswerItem>
  </div>
</template>

<script>
import AnswerItem from "@/components/AnswerItem";

import {mapGetters} from 'vuex'

export default {
  name: "AnswersSectionCenter",

  components: {
    AnswerItem,
  },

  computed: {
    ...mapGetters([
        'currentRoundAnswers',
    ]),
  },
}
</script>

<style scoped>
.answers-section-center__container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  padding-top: 4%;
  padding-bottom: 4%;
  background: rgb(108, 143, 218);
  background: linear-gradient(90deg, rgba(108, 143, 218, 1) 0%, rgba(108, 143, 218, 1) 50%, rgba(255, 93, 93, 1) 50%, rgba(255, 93, 93, 1) 100%);
}
</style>
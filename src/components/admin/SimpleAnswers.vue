<template>
  <div class="simple-answers__container">
    <SimpleAnswerItem
        v-for="answer in currentRoundAnswers"
        :answer="answer"
        :key="answer._id"
    ></SimpleAnswerItem>
  </div>
</template>

<script>
import SimpleAnswerItem from "@/components/admin/SimpleAnswerItem";

import {mapGetters} from 'vuex'

export default {
  name: "SimpleAnswers",

  components: {
    SimpleAnswerItem,
  },

  computed: {
    ...mapGetters([
      'currentRoundAnswers',
    ]),
  },
}
</script>

<style scoped>
.simple-answers__container {
  background-color: bisque;
  border-bottom: 1px solid #9a7e5d;
}
</style>
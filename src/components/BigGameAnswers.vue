<template>
<div class="big-game-answers__container">
  <BigGameAnswerItem></BigGameAnswerItem>
  <BigGameAnswerItem :answer="{text: 'За корешками', score: 99}"></BigGameAnswerItem>
  <BigGameAnswerItem :answer="{text: 'За вкусняшками', score: 11}"></BigGameAnswerItem>
  <BigGameAnswerItem :answer="{text: 'За штукатуркой', score: 53}"></BigGameAnswerItem>
  <BigGameAnswerItem :answer="{text: 'За полярным кругом', score: 72}"></BigGameAnswerItem>
</div>
</template>

<script>
import BigGameAnswerItem from "@/components/BigGameAnswerItem";

export default {
  name: "BigGameAnswers",

  components: {
    BigGameAnswerItem,
  }
}
</script>

<style scoped>
.big-game-answers__container {
  width: 100%;
  padding: 0px 1%;
}
</style>
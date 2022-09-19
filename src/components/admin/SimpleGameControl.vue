<template>
  <div class="simple-game-control__container">
    <ScoreSwitcher></ScoreSwitcher>
    <QuestionField></QuestionField>
    <SimpleAnswers></SimpleAnswers>
    <ErrorsControl></ErrorsControl>
    <GameStarterBtn></GameStarterBtn>
  </div>
</template>

<script>
import QuestionField from "@/components/admin/QuestionField";
import ScoreSwitcher from "@/components/admin/ScoreSwitcher";
import SimpleAnswers from "@/components/admin/SimpleAnswers";
import ErrorsControl from "@/components/admin/ErrorsControl";
import GameStarterBtn from "@/components/admin/GameStarterBtn";

export default {
  name: "SimpleGameControl",

  components: {
    ErrorsControl,
    QuestionField,
    ScoreSwitcher,
    SimpleAnswers,
    GameStarterBtn,
  },
}
</script>

<style scoped>

</style>
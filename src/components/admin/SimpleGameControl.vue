<template>
  <div class="simple-game-control__container">
    <ScoreSwitcher></ScoreSwitcher>
    <QuestionField></QuestionField>
    <SimpleAnswers></SimpleAnswers>
    <ErrorsControl></ErrorsControl>
  </div>
</template>

<script>
import QuestionField from "@/components/admin/QuestionField";
import ScoreSwitcher from "@/components/admin/ScoreSwitcher";
import SimpleAnswers from "@/components/admin/SimpleAnswers";
import ErrorsControl from "@/components/admin/ErrorsControl";

export default {
  name: "SimpleGameControl",

  components: {
    ErrorsControl,
    QuestionField,
    ScoreSwitcher,
    SimpleAnswers,
  },
}
</script>

<style scoped>

</style>
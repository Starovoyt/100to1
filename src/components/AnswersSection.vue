<template>
  <div class="answer-section__container">
    <AnswersSectionAside color="blue"></AnswersSectionAside>
    <AnswersSectionCenter></AnswersSectionCenter>
    <AnswersSectionAside color="red"></AnswersSectionAside>
  </div>
</template>

<script>
import AnswersSectionAside from "@/components/AnswersSectionAside";
import AnswersSectionCenter from "@/components/AnswersSectionCenter";

export default {
  name: "AnswersSection",

  components: {
    AnswersSectionAside,
    AnswersSectionCenter,
  },
}
</script>

<style scoped>
.answer-section__container {
  display: flex;
  height: 100%;
  border-top: 15px solid #000000;
  border-bottom: 15px solid #000000;
}
</style>

<style>
.answer-section__container .answers-section-aside__container:first-child {
  box-shadow: inset -1px 0px 5px black;
}

.answer-section__container .answers-section-aside__container:last-child {
  box-shadow: inset 1px 0px 5px black;
}

.answer-section__container .answers-section-aside__container:first-child .round-counter__container {
  box-shadow: inset 2px 3px 4px black;
}

.answer-section__container .answers-section-aside__container:last-child .round-counter__container {
  box-shadow: inset -2px 3px 4px black;
}

.answer-section__container .answers-section-aside__container:first-child .error-marker__container {
  box-shadow: 3px 3px 3px black;
}

.answer-section__container .answers-section-aside__container:last-child .error-marker__container {
  box-shadow: -3px 3px 3px black;
}
</style>
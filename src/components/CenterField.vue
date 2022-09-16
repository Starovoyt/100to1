<template>
  <div class="center-field__container">
    <div class="center-field__border"></div>
    <div class="center-field__main">
      <div class="center-field__main-header">
        <ScoreCounter score="0"></ScoreCounter>
      </div>
<!--      <AnswersSection></AnswersSection>-->
      <BigGameSection></BigGameSection>
    </div>
    <div class="center-field__border"></div>
  </div>
</template>

<script>
import ScoreCounter from "@/components/ScoreCounter";
// import AnswersSection from "@/components/AnswersSection";
import BigGameSection from "@/components/BigGameSection";

export default {
  name: "CenterField",

  components: {
    ScoreCounter,
    // AnswersSection,
    BigGameSection,
  },
}
</script>

<style scoped>
.center-field__container {
  display: flex;
  width: 60%;
}

.center-field__border {
  position: relative;
  width: 5%;
  background-color: #b7ae99;
  z-index: 9;
}

.center-field__border:first-child {
  box-shadow: 5px 0px 8px black;
}

.center-field__border:last-child {
  box-shadow: -5px 0px 8px black;
}

.center-field__main {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  z-index: 1;
}

.center-field__main-header {
  display: flex;
  align-items: center;
  height: 25%;
  min-height: 70px;
  background-color: #d1d1d1;
}

.center-field__main {
  background-color: #d1d1d1;
}
</style>

<style>
.center-field__main-header .score-counter__container {
  box-shadow: inset 0px 2px 5px black;
}
</style>
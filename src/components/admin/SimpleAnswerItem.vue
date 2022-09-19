<template>
  <div class="simple-answer-item__container">
    <div class="simple-answer-item__text">За сапогами</div>
    <div class="simple-answer-item__score">12</div>
  </div>
</template>

<script>
export default {
  name: "SimpleAnswerItem",
}
</script>

<style scoped>
.simple-answer-item__container {
  display: flex;
  padding: 7px;
  margin: 10px 5px;
  background: lightseagreen;
}

.simple-answer-item__container.opened {
  background-color: limegreen;
}

.simple-answer-item__text {
  width: 90%;
}

.simple-answer-item__score {
  width: 10%;
  text-align: right;
}
</style>
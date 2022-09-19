<template>
  <div class="score-switcher__container">
    <div class="score-switcher__item blue">Отдать очки</div>
    <div class="score-switcher__item red">Отдать очки</div>
  </div>
</template>

<script>
export default {
  name: "ScoreSwitcher"
}
</script>

<style scoped>
.score-switcher__container {
  display: flex;
  padding: 5px 0px;
  background-color: #b7ae99;
}

.score-switcher__item {
  width: 50%;
  text-align: center;
  padding: 5px;
  margin: 0px 10px;
  font-weight: bold;
}

.score-switcher__item.red {
  background-color: rgb(108 143 218);
}

.score-switcher__item.blue {
  background-color: rgb(255 93 93);
}
</style>
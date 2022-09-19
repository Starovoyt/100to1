<template>
  <div class="round-switcher__container">
    <div class="round-swithcer__cur-round">Одинарная игра</div>
    <div class="round-switcher__controls">
      <div class="round-switcher__control-prev">Предыдущий раунд</div>
      <div class="round-switcher__control-next">Следующий раунд</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoundSwitcher"
}
</script>

<style scoped>
.round-swithcer__cur-round {
  padding: 3px 0px;
  font-weight: bold;
  border-bottom: 1px solid #9a7e5d;
}

.round-swithcer__cur-round {
  text-align: center;
}

.round-switcher__controls {
  display: flex;
  padding: 5px 0px;
  border-bottom: 1px solid #9a7e5d;
}

.round-switcher__control-prev,
.round-switcher__control-next {
  width: 50%;
  text-align: center;
  padding: 5px 0px;
  margin: 0px 10px;
  background-color: darkslategray;
  color: white;
  font-weight: bold;
}
</style>
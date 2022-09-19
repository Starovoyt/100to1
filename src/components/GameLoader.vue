<template>
<div class="game-loader__container">
  <div class="game-loader__loader"></div>
  <div class="game-loader__text">Загрузка...</div>
</div>
</template>

<script>
export default {
  name: "GameLoader"
}
</script>

<style scoped>
.game-loader__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.game-loader__loader {
  background-image: url("../assets/hourglass.gif");
  width: 64px;
  height: 64px;
}
</style>
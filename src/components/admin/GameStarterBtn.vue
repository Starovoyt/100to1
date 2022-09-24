<template>
  <div class="game-starter-btn__container" @click="btnClickHandler">Определить ход</div>
</template>

<script>
export default {
  name: "GameStarterBtn",

  methods: {
    btnClickHandler() {
      this.$socket.emit('TOGGLE_GAME_STARTER_MODE');
    },
  },
}
</script>

<style scoped>
.game-starter-btn__container {
  background-color: darkslategray;
  color: white;
  font-weight: bold;
  padding: 5px;
  margin: 0px 5px;
  text-align: center;
}
</style>
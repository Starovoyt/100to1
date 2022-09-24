<template>
  <div class="game-starter__container">
    <div class="game-starter__player blue" :class="{on: winner === 'blue' && isLampOn}"></div>
    <div class="game-starter__player red" :class="{on: winner === 'red' && isLampOn}"></div>
  </div>
</template>

<script>
export default {
  name: "GameStarter",

  data() {
    return {
      winner: null,
      isLampOn: false,
      onLampInterval: null,
    };
  },

  methods: {
    onLamp(player) {
      this.winner = player
      this.onLampInterval = setInterval(() => this.isLampOn = !this.isLampOn, 350)
    },

    listenLampKeys() {
      window.addEventListener('keydown', this.listenLampKeysHandler);
    },

    removeListenLampKeys() {
      window.removeEventListener('keydown', this.listenLampKeysHandler);
    },

    listenLampKeysHandler(event) {
      if (event.code !== 'F11' && event.code !== 'F5' && event.key !== 'Control') {
        event.preventDefault()
      }

      switch (event.code) {
        case 'ShiftLeft':
          this.onLamp('blue')

          break
        case 'ShiftRight':
          this.onLamp('red')

          break
      }
    },
  },

  mounted() {
    this.listenLampKeys();
  },

  unmounted() {
    this.removeListenLampKeys();
    clearInterval(this.onLampInterval);
  },
};
</script>

<style scoped>
.game-starter__container {
  display: flex;
  height: 100%;
  width: 100%;
}

.game-starter__player {
  width: 50%;
  height: 100%;
}

.game-starter__player.blue {
  background-color: rgba(98, 0, 196, 1);
}

.game-starter__player.blue.on {
  background-color: rgb(188 126 250);
}

.game-starter__player.red {
  background-color: rgba(197, 0, 0, 1);
}

.game-starter__player.red.on {
  background-color: rgb(255 122 122);
}
</style>

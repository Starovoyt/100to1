<template>
  <div class="big-game-control__section">
    <div
        class="big-game-control__hide-btn"
        @click="hideBtnClickHandler"
    >
      Скрыть все ответы
    </div>
    <div class="big-game-control__players">
      <BigGamePlayer
          :player="player"
          v-for="player in players"
          :key="player._id"
      ></BigGamePlayer>
    </div>
  </div>
</template>

<script>
import BigGamePlayer from "@/components/admin/BigGamePlayer";

import {mapState} from 'vuex';

export default {
  name: "BigGameControl",

  components: {
    BigGamePlayer,
  },

  computed: {
    ...mapState([
      'players',
    ])
  },

  methods: {
    hideBtnClickHandler() {
      this.$socket.emit('TOGGLE_BIG_GAME_ANSWERS_SHOWN');
    },
  },
}
</script>

<style scoped>
.big-game-control__section {
  padding-top: 10px;
}

.big-game-control__hide-btn {
  padding: 5px;
  text-align: center;
  font-weight: bold;
  background-color: #eb8745;
  margin: 0px 10px;
}

.big-game-control__players {
  padding-top: 10px;
}
</style>
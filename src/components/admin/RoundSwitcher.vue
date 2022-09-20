<template>
  <div class="round-switcher__container">
    <div class="round-swithcer__cur-round">{{ currentRoundName }}</div>
    <div class="round-switcher__controls">
      <div class="round-switcher__control-prev" @click="decrementRound">Предыдущий раунд</div>
      <div class="round-switcher__control-next" @click="incrementRound">Следующий раунд</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "RoundSwitcher",

  methods: {
    decrementRound() {
      this.$socket.emit('DECREMENT_ROUND');
    },

    incrementRound() {
      this.$socket.emit('INCREMENT_ROUND');
    },
  },

  computed: {
    ...mapGetters([
      'currentRoundName',
    ]),
  },
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
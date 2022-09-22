<template>
<div class="errors-controllers__container">
  <div class="errors-controllers__btn add" @click="incrementRound">Добавить</div>
  <div class="errors-controllers__btn delete" @click="decrementRound">Удалить</div>
</div>
</template>

<script>
export default {
  name: "ErrorsControllers",

  props: {
    color: {
      type: String,
      required: true,
      default: 'blue',
      validator(value) {
        return ['red', 'blue'].includes(value)
      },
    },
  },

  methods: {
    decrementRound() {
      this.$socket.emit('DECREMENT_TEAM_ERRORS', this.color);
    },

    incrementRound() {
      this.$socket.emit('INCREMENT_TEAM_ERRORS', this.color);
    },
  },
}
</script>

<style scoped>
.errors-controllers__container {
  display: flex;
  flex-direction: column;
  padding: 5px 5px 0px 5px;
  width: 100%;
}

.errors-controllers__btn {
  text-align: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
}

.errors-controllers__btn.add {
  background-color: crimson;
}

.errors-controllers__btn.delete {
  background-color: darkgreen;
}
</style>
<template>
  <div class="round-counter__container" :class="color">{{ round }}</div>
</template>

<script>
export default {
  name: "RoundCounter",

  props: {
    round: {
      type: [String, Number],
      required: true,
      default: 1,
    },

    color: {
      type: String,
      required: true,
      default: 'gradient',
      validator(value) {
        return ['red', 'blue'].includes(value)
      },
    }
  },
}
</script>

<style scoped>
.round-counter__container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15vh;
  font-weight: bold;
  width: 70%;
  height: 30%;
  margin: 0px auto;
  border-radius: 10px;
}

.round-counter__container.red {
  background-color: rgb(108 143 218);
}

.round-counter__container.blue {
  background-color: rgb(255 93 93);
}
</style>
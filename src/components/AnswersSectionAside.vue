<template>
  <div class="answers-section-aside__container" :class="color">
    <RoundCounter round="1" :color="color"></RoundCounter>
    <ErrorsCounter></ErrorsCounter>
  </div>
</template>

<script>
import RoundCounter from "@/components/RoundCounter";
import ErrorsCounter from "@/components/ErrorsCounter";

export default {
  name: "AnswersSectionAside",

  components: {
    RoundCounter,
    ErrorsCounter,
  },

  props: {
    color: {
      type: String,
      required: true,
      default: 'gradient',
      validator(value) {
        return ['red', 'blue'].includes(value)
      },
    }
  }
}
</script>

<style scoped>
.answers-section-aside__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  padding: 3% 0px;
}

.answers-section-aside__container.blue {
  background-color: rgb(108 143 218);
}

.answers-section-aside__container.red {
  background-color: rgb(255 93 93);
}
</style>
<template>
  <div class="errors-counter__container">
    <ErrorMarker v-for="i in 3" :is-active="i <= errorsCount" :key="i"></ErrorMarker>
  </div>
</template>

<script>
import ErrorMarker from "@/components/ErrorMarker";

import {mapGetters} from 'vuex';

export default {
  name: "ErrorsCounter",

  components: {
    ErrorMarker,
  },

  props: {
    color: {
      type: String,
      required: true,
      default: 'gradient',
      validator(value) {
        return ['red', 'blue'].includes(value)
      },
    },
  },

  computed: {
    ...mapGetters([
        'blueTeamErrors',
        'redTeamErrors',
    ]),

    errorsCount() {
      switch (this.color) {
        case 'blue':
          return this.blueTeamErrors;
        case 'red':
          return this.redTeamErrors;
        default:
          return 0;
      }
    },
  }
}
</script>

<style scoped>
.errors-counter__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50%;
}
</style>
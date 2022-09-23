<template>
  <div class="big-game-player__container">
    <div
        class="big-game-player__name"
        :class="player.name"
        @click="isQuestionsShown = !isQuestionsShown"
    >
      {{ playerName }}
    </div>
    <template v-if="isQuestionsShown">
      <BigGameQuestionItem
          v-for="question in bigGameQuestionsWithAnswers"
          :question="question"
          :player="player"
          :key="question._id"
      ></BigGameQuestionItem>
    </template>
  </div>
</template>

<script>
import BigGameQuestionItem from "@/components/admin/BigGameQuestionItem";

import {mapGetters} from 'vuex';

export default {
  name: "BigGamePlayer",

  components: {
    BigGameQuestionItem,
  },

  props: {
    player: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isQuestionsShown: false,
    };
  },

  computed: {
    ...mapGetters([
      'bigGameQuestionsWithAnswers',
    ]),

    playerName() {
      switch (this.player.name) {
        case 'first':
          return 'Первый игрок';
        case 'second':
          return 'Второй игрок';
        default:
          return '';
      }
    },
  },
}
</script>

<style scoped>
.big-game-player__name {
  padding: 10px;
  border-bottom: 1px solid black;
}

.big-game-player__name.first {
  background-color: darkcyan;
}

.big-game-player__name.second {
  background-color: seagreen;
}
</style>
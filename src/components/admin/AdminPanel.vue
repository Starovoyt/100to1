<template>
  <div class="admin-panel__container">
    <RoundSwitcher></RoundSwitcher>
    <SimpleGameControl v-if="currentRound < 5"></SimpleGameControl>
    <BigGameControl v-else></BigGameControl>
  </div>
</template>

<script>
import RoundSwitcher from "@/components/admin/RoundSwitcher";
import SimpleGameControl from "@/components/admin/SimpleGameControl";
import BigGameControl from "@/components/admin/BigGameControl";

import {mapGetters} from 'vuex';

export default {
  name: "AdminPanel",

  components: {
    RoundSwitcher,
    SimpleGameControl,
    BigGameControl,
  },

  computed: {
    ...mapGetters([
      'currentRound',
    ])
  },

  mounted() {
    this.$socket.emit('ADMIN_PANEL_LOADED');
  },
}
</script>

<style scoped>
.admin-panel__container {
  height: 100%;
  background-color: bisque;
}
</style>
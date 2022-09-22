<template>
  <div class="big-game-control__section">
    <div class="big-game-control__hide-btn">Скрыть все ответы</div>
    <BigGamePlayer player="first"></BigGamePlayer>
    <BigGamePlayer player="second"></BigGamePlayer>
  </div>
</template>

<script>
import BigGamePlayer from "@/components/admin/BigGamePlayer";

export default {
  name: "BigGameControl",

  components: {
    BigGamePlayer,
  },
}
</script>

<style scoped>

</style>
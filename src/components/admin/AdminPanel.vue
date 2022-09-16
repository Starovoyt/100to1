<template>
  <div class="admin-panel__container">
    <RoundSwitcher></RoundSwitcher>
    <SimpleGameControl></SimpleGameControl>
  </div>
</template>

<script>
import RoundSwitcher from "@/components/admin/RoundSwitcher";
import SimpleGameControl from "@/components/admin/SimpleGameControl";

export default {
  name: "AdminPanel",

  components: {
    RoundSwitcher,
    SimpleGameControl,
  }
}
</script>

<style scoped>

</style>
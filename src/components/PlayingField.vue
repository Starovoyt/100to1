<template>
  <div class="playing-field__container">
    <AsideField color="blue"></AsideField>
    <CenterField></CenterField>
    <AsideField color="red"></AsideField>
  </div>
</template>

<script>
import AsideField from "@/components/AsideField";
import CenterField from "@/components/CenterField";

export default {
  name: "PlayingField",

  components: {
    AsideField,
    CenterField,
  },
}
</script>

<style scoped>
.playing-field__container {
  display: flex;
  height: 100%;
}
</style>

<style>
.playing-field__container .aside-field__container:first-child .score-counter__container {
  box-shadow: 7px 3px 10px black;
}

.playing-field__container .aside-field__container:last-child .score-counter__container {
  box-shadow: -7px 3px 10px black;
}
</style>
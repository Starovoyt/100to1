<template>
  <PlayingField></PlayingField>
</template>

<script>
import PlayingField from "@/components/PlayingField";

export default {
  name: 'App',
  components: {
    PlayingField
  }
}
</script>

<style>
body {
  position: fixed;
  width: 100%;
  height: 100vh;
  margin: 0px;
}

#app {
  height: 100%;
  font-family: Arial;
}
</style>

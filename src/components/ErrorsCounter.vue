<template>
  <div class="errors-counter__container">
    <ErrorMarker is-active></ErrorMarker>
    <ErrorMarker></ErrorMarker>
    <ErrorMarker></ErrorMarker>
  </div>
</template>

<script>
import ErrorMarker from "@/components/ErrorMarker";

export default {
  name: "ErrorsCounter",

  components: {
    ErrorMarker,
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
<template>
  <div class="error-marker__container" :class="{active: isActive}">
    <img src="../assets/cross.png">
  </div>
</template>

<script>
export default {
  name: "ErrorMarker",

  props: {
    isActive: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.error-marker__container {
  width: 50%;
  height: 25%;
  background-color: #b4b498;
  padding: 4px;
  border-radius: 5px;
}

.error-marker__container.active {
  background-color: #f2f24b;
}

.error-marker__container img {
  width: 100%;
  height: 100%;
}
</style>
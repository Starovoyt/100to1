<template>
  <div class="errors-control__container">
    <ErrorsControllers color="blue"></ErrorsControllers>
    <ErrorsControllers color="red"></ErrorsControllers>
  </div>
</template>

<script>
import ErrorsControllers from "@/components/admin/ErrorsControllers";

export default {
  name: "ErrorsControl",

  components: {
    ErrorsControllers,
  }
}
</script>

<style scoped>
.errors-control__container {
  display: flex;
}
</style>

<style>
.errors-control__container .errors-controller-aside__container {
  width: 50%;
}
</style>
<template>
  <div class="errors-controller-aside__container">
    <ErrorController></ErrorController>
    <ErrorController></ErrorController>
    <ErrorController></ErrorController>
  </div>
</template>

<script>
import ErrorController from "@/components/admin/ErrorController";

export default {
  name: "ErrorsControlAside",

  components: {
    ErrorController,
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="errors-control__container">
    <ErrorsControlAside></ErrorsControlAside>
    <ErrorsControlAside></ErrorsControlAside>
  </div>
</template>

<script>
import ErrorsControlAside from "@/components/admin/ErrorsControlAside";

export default {
  name: "ErrorsControl",

  components: {
    ErrorsControlAside,
  }
}
</script>

<style scoped>

</style>
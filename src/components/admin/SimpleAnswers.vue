<template>
  <div class="simple-answers__container">
    <SimpleAnswerItem></SimpleAnswerItem>
    <SimpleAnswerItem></SimpleAnswerItem>
    <SimpleAnswerItem></SimpleAnswerItem>
    <SimpleAnswerItem></SimpleAnswerItem>
    <SimpleAnswerItem></SimpleAnswerItem>
    <SimpleAnswerItem></SimpleAnswerItem>
  </div>
</template>

<script>
import SimpleAnswerItem from "@/components/admin/SimpleAnswerItem";

export default {
  name: "SimpleAnswers",

  components: {
    SimpleAnswerItem,
  }
}
</script>

<style scoped>

</style>
<template>
<div class="errors-controllers__container">
  <div class="errors-controllers__btn add">Добавить</div>
  <div class="errors-controllers__btn delete">Удалить</div>
</div>
</template>

<script>
export default {
  name: "ErrorsControllers"
}
</script>

<style scoped>
.errors-controllers__container {
  display: flex;
  flex-direction: column;
  padding: 5px 5px 0px 5px;
  width: 100%;
}

.errors-controllers__btn {
  text-align: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
}

.errors-controllers__btn.add {
  background-color: crimson;
}

.errors-controllers__btn.delete {
  background-color: darkgreen;
}
</style>
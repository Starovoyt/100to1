<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',

  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (data) {
      console.log('this method was fired by the socket server.', data)
    }
  },
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

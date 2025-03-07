<template>
  <router-view/>
</template>

<script>
import {mapActions} from 'vuex'

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

  methods: {
    ...mapActions([
      'INIT_APP',
    ])
  },

  mounted() {
    this.INIT_APP();
  }
}
</script>

<style>
* {
  user-select: none;
}

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

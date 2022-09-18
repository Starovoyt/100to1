import VueSocketIO from 'vue-3-socket.io';
import SocketIO from 'socket.io-client';
import store from "@/store";

const socketConnection = SocketIO('http://localhost:3000');

export default new VueSocketIO({
    debug: true,
    connection: socketConnection,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
});

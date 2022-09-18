import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        SOCKET_newMessage(context, data) {
            console.log('Message', data);
        },
    }
});
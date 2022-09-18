import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import store from '@/store';
import socket from "@/socket";

createApp(App)
    .use(socket)
    .use(router)
    .use(store)
    .mount('#app')

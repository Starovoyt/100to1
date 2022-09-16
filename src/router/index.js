import {createRouter, createWebHistory} from 'vue-router';

import PlayingField from "@/components/PlayingField";
import AdminPanel from "@/components/admin/AdminPanel";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'PlayingField',
            component: PlayingField,
        },
        {
            path: '/control',
            name: 'AdminPanel',
            component: AdminPanel,
        },
    ],
});

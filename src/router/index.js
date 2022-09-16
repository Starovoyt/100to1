import {createRouter, createWebHistory} from 'vue-router';

import PlayingField from "@/components/PlayingField";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'PlayingField',
            component: PlayingField,
        },
    ],
});

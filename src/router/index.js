import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/LoginVue.vue';
import Registrasi from '../views/RegistrasiVue.vue';
import Chat from './../components/ChatVue.vue';

import Pesan from '../views/PesanVue.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/chat',
            name: 'chat',
            component: Chat,
            children: [
                {
                    path: '/chat/:idChat',
                    name: 'pesan',
                    component: Pesan,
                },
            ],
        },
        {
            path: '/registrasi',
            name: 'registrasi',
            component: Registrasi,
        },
        {
            path: '/',
            name: 'login',
            component: Login,
        },
    ],
});

export default router;

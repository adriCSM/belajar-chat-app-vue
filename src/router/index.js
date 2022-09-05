import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/LoginVue.vue';
import Registrasi from '../views/RegistrasiVue.vue';
import Chat from './../components/ChatVue.vue';

import Pesan from '../views/PesanVue.vue';
import Profil from '../views/ProfilVuel.vue';

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
                    name: '|| Pesan',
                    component: Pesan,
                },
                {
                    path: '/profile',
                    name: '|| Profil',
                    component: Profil,
                },
            ],
        },
        {
            path: '/registrasi',
            name: '|| registrasi',
            component: Registrasi,
        },
        {
            path: '/',
            name: '|| login',
            component: Login,
        },
    ],
});

router.beforeEach((to, from, next) => {
    document.title = 'Chat ' + to.name;
    next();
});

export default router;

<template>
    <v-app id="inspire">
        <v-app-bar app clipped-right flat height="72" color="#4db6ac">
            <v-app-bar-nav-icon
                @click="drawer = !drawer"
                color="white"
            ></v-app-bar-nav-icon>
            <v-list
                max-width="156"
                v-for="(item, i) in stranger"
                :key="i"
                style="background-color: transparent"
            >
                <v-list-item
                    color="white"
                    v-if="item._id !== user._id"
                    class="pl-0"
                >
                    <v-list-item-avatar>
                        <v-img :src="item.pic"> </v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title style="color: black">
                            {{ item.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <h5 style="color: grey">
                                {{ item.status }}
                            </h5>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-spacer></v-spacer>
            <v-responsive>
                <!-- <v-text-field
                    dense
                    flat
                    hide-details
                    rounded
                    solo-inverted
                    class="bg-white"
                ></v-text-field> -->
            </v-responsive>
            <div>
                <v-btn fab color="transparant" small @click="logout">
                    <v-img
                        src="../../public/icons8-shutdown-32.png"
                        elevation="20"
                    >
                    </v-img>
                </v-btn>
            </div>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app width="300">
            <v-sheet color="#B2DFDB" height="128" width="100%" class="mb-10">
                <v-list color="teal lighten-4">
                    <router-link to="/profile">
                        <v-list-item-avatar
                            width="70px"
                            height="70px"
                            style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                border: 2px solid #4db6ac;
                            "
                        >
                            <v-img :src="user.pic" link width="500px"></v-img>
                        </v-list-item-avatar>
                    </router-link>

                    <v-list-item>
                        <v-list-item-content class="text-center">
                            <v-list-item-title class="text-h6">
                                {{ user.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{
                                user.email
                            }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-sheet>

            <v-list v-for="(item, i) in allUser" :key="i" class="pa-0">
                <v-list-item
                    color="white"
                    v-if="item._id !== user._id"
                    @click="klik(item._id)"
                    to="/chat"
                    link
                >
                    <v-badge
                        bordered
                        bottom
                        color="green"
                        dot
                        offset-x="25"
                        offset-y="48"
                        v-if="item.status == 'Online'"
                    >
                        <v-list-item-avatar style="border: 2px solid #4db6ac">
                            <v-img :src="item.pic"> </v-img>
                        </v-list-item-avatar>
                    </v-badge>
                    <v-badge
                        bordered
                        bottom
                        color="red"
                        dot
                        offset-x="25"
                        offset-y="48"
                        v-if="item.status == 'Offline'"
                    >
                        <v-list-item-avatar style="border: 2px solid #4db6ac">
                            <v-img :src="item.pic"> </v-img>
                        </v-list-item-avatar>
                    </v-badge>

                    <v-list-item-content>
                        <v-list-item-title style="color: black">
                            {{ item.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <h5 style="color: grey">
                                {{ item.email }}
                            </h5>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer app clipped right color="white">
            <v-list color="traansparant">
                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title>Item </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main style="display: fixed"
            ><div id="particle-container">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            <router-view> Pesan </router-view>
        </v-main>
    </v-app>
</template>

<script>
import Pesan from '@/views/PesanVue.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import { io } from 'socket.io-client';

export default {
    component: Pesan,
    setup() {
        const drawer = ref(null);
        const token = localStorage.getItem('token');
        const user = ref('');
        const allUser = ref([]);
        const socket = io('/');
        const stranger = ref('');

        if (token == null) {
            router.push({
                name: 'login',
            });
            socket.emit('disconnect');
            axios.patch(`/api/logout/?id=${user.value._id}`);
        }

        socket.on('datas', (e) => {
            allUser.value = e;
        });

        onMounted(async () => {
            await axios
                .get('/api/allUser', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
                .then(async (res) => {
                    user.value = res.data.user;
                    allUser.value = res.data.users;
                    socket.emit('users', allUser.value);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });

        const klik = async (userId) => {
            await axios
                .post(
                    '/api/chat',
                    {
                        userId,
                    },
                    {
                        headers: {
                            Authorization: 'Bearer ' + token,
                        },
                    },
                )
                .then((res) => {
                    stranger.value = res.data.chat.users;
                    router.push({
                        path: `/chat/${res.data.chat._id}`,
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        };

        const logout = async () => {
            await axios.patch('/api/logout/?id=' + user.value._id).then(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('email');

                router.push({
                    name: '|| login',
                });
            });
        };

        return { logout, drawer, user, allUser, klik, token, stranger };
    },
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
    background-image: url('../../public/bharath-g-s-aLGiPJ4XRO4-unsplash.jpg');
    background-size: cover;
    background-position: center;
}
.v-main {
    background-color: #bcaaa4;
}
.particle {
    position: absolute;
    border-radius: 50%;
}

@for $i from 1 through 30 {
    @keyframes particle-animation-#{$i} {
        100% {
            transform: translate3d(
                (random(90) * 1vw),
                (random(90) * 1vh),
                (random(100) * 1px)
            );
        }
    }

    .particle:nth-child(#{$i}) {
        animation: particle-animation-#{$i} 60s infinite;
        $size: random(10) + 5 + px;
        opacity: random(100) / 100;
        height: $size;
        width: $size;
        animation-delay: -$i * 0.1s;
        transform: translate3d(
            (random(90) * 1vw),
            (random(90) * 1vh),
            (random(100) * 1px)
        );
        background: hsl(random(360), 70%, 50%);
    }
}
</style>

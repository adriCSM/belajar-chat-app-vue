<template>
    <v-app id="inspire">
        <v-app-bar
            app
            clipped-right
            flat
            height="72"
            color="blue-grey darken-4"
        >
            <v-app-bar-nav-icon
                @click="drawer = !drawer"
                color="white"
            ></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-responsive max-width="156">
                <v-text-field
                    dense
                    flat
                    hide-details
                    rounded
                    solo-inverted
                    class="bg-white"
                ></v-text-field>
            </v-responsive>
            <div class="me-5">
                <v-btn color="error" dark small @click="logout">
                    Log Out
                </v-btn>
            </div>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app width="300">
            <v-sheet
                color="grey lighten-5"
                height="128"
                width="100%"
                class="mb-10"
            >
                <v-list color="grey">
                    <router-link to="/profile">
                        <v-list-item-avatar
                            width="70px"
                            height="70px"
                            style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
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
                    v-if="item.email !== user.email"
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
                        v-if="item.status == true"
                    >
                        <v-list-item-avatar>
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
                        v-if="item.status == false"
                    >
                        <v-list-item-avatar v-if="item.status == false">
                            <v-img :src="item.pic"> </v-img>
                        </v-list-item-avatar>
                    </v-badge>

                    <v-list-item-content>
                        <v-list-item-title color="white">
                            {{ item.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            <h5 style="color: lightblue">
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

        <v-main>
            <router-view> Pesan</router-view>
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
                    router.push({
                        path: `/chat/${res.data.chat._id}`,
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        };

        const logout = async () => {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            await axios.patch(`/api/logout/?id=${user.value._id}`);

            router.push({
                name: 'login',
            });
        };

        return { logout, drawer, user, allUser, klik, token };
    },
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
    background-image: url('../../public/valeriia-neganova-JYweIEW9TIc-unsplash.jpg');
    background-size: cover;
    background-position: center;
}
.v-main {
    background-color: #bcaaa4;
}
</style>

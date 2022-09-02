<template>
    <v-app id="inspire">
        <v-app-bar app clipped-right flat height="72" color="blue darken-4">
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
            <div class="my-2 mx-5 pe-5">
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
                class="mb-6"
            >
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="../../public/109715820.jpg"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                {{ user.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{
                                user.email
                            }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <!--  -->
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-sheet>

            <v-list
                class="pl-0 pt-0"
                v-for="(item, i) in allUser"
                :key="i"
                @click="klik(item._id)"
            >
                <router-link
                    :to="{ name: 'chat' }"
                    style="text-decoration: none"
                >
                    <v-list-item
                        link
                        v-if="item.email !== user.email"
                        @click="klik(item._id)"
                    >
                        <v-list-item-avatar>
                            <v-img src="../../public/109715820.jpg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title color="white">
                                {{ item.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ item.email }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer class="a" app clipped right color="white">
            <v-list color="traansparant">
                <v-list-item v-for="n in 5" :key="n" link>
                    <v-list-item-content>
                        <v-list-item-title>Item {{ n }} </v-list-item-title>
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

export default {
    component: Pesan,
    setup() {
        const drawer = ref(null);
        const token = localStorage.getItem('token');
        const user = ref('');
        const allUser = ref('');

        if (token == null) {
            router.push({
                name: 'login',
            });
        }

        onMounted(async () => {
            await axios
                .get('/api/allUser', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
                .then((res) => {
                    user.value = res.data.user;
                    allUser.value = res.data.users;
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
                        name: 'pesan',
                        params: { idChat: res.data.chat._id },
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        };

        const logout = () => {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            router.push({
                name: 'login',
            });
        };

        return { logout, drawer, user, allUser, klik, token };
    },
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer.a {
    background-image: url('../../public/valeriia-neganova-JYweIEW9TIc-unsplash.jpg');
    background-size: cover;
    background-position: center;
}

nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
    background-color: indianred;
    cursor: pointer;
}
</style>

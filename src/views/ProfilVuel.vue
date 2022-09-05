<template>
    <v-card class="mx-auto text-center" max-width="500px" elevation="20">
        <v-img
            class="white--text align-end"
            height="450px"
            :src="user.pic"
            style="border: 2px solid #4db6ac"
        >
            <v-card-title>
                <!--  -->
            </v-card-title>
        </v-img>

        <v-card-subtitle class="pb-5">
            {{ user.name }}
        </v-card-subtitle>
        <v-card-text>{{ user.email }}</v-card-text>

        <v-card-text class="text--primary">
            <v-row class="text-center">
                <v-tooltip top>
                    <template v-slot:activator="{ on: tooltip }">
                        <a href="#" class="pl-5" v-on="{ ...tooltip }"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="40px"
                                height="40px"
                            >
                                <radialGradient
                                    id="yOrnnhliCrdS2gy~4tD8ma"
                                    cx="19.38"
                                    cy="42.035"
                                    r="44.899"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stop-color="#fd5" />
                                    <stop offset=".328" stop-color="#ff543f" />
                                    <stop offset=".348" stop-color="#fc5245" />
                                    <stop offset=".504" stop-color="#e64771" />
                                    <stop offset=".643" stop-color="#d53e91" />
                                    <stop offset=".761" stop-color="#cc39a4" />
                                    <stop offset=".841" stop-color="#c837ab" />
                                </radialGradient>
                                <path
                                    fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                />
                                <radialGradient
                                    id="yOrnnhliCrdS2gy~4tD8mb"
                                    cx="11.786"
                                    cy="5.54"
                                    r="29.813"
                                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stop-color="#4168c9" />
                                    <stop
                                        offset=".999"
                                        stop-color="#4168c9"
                                        stop-opacity="0"
                                    />
                                </radialGradient>
                                <path
                                    fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                                />
                                <path
                                    fill="#fff"
                                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                                />
                                <circle
                                    cx="31.5"
                                    cy="16.5"
                                    r="1.5"
                                    fill="#fff"
                                />
                                <path
                                    fill="#fff"
                                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                                />
                            </svg>
                        </a>
                    </template>
                    <span>Instagram</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on: tooltip }">
                        <a
                            v-on="{ ...tooltip }"
                            class="pl-5"
                            href="https://www.youtube.com/channel/UCsJMH2sdUe6yxj7v5rCpRIA"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="40px"
                                height="40px"
                            >
                                <path
                                    fill="#FF3D00"
                                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                                />
                                <path fill="#FFF" d="M20 31L20 17 32 24z" />
                            </svg>
                        </a>
                    </template>
                    <span> youtube </span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on: tooltip }">
                        <a v-on="{ ...tooltip }" href="#" class="pl-5"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="40px"
                                height="40px"
                            >
                                <linearGradient
                                    id="Ld6sqrtcxMyckEl6xeDdMa"
                                    x1="9.993"
                                    x2="40.615"
                                    y1="9.993"
                                    y2="40.615"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stop-color="#2aa4f4" />
                                    <stop offset="1" stop-color="#007ad9" />
                                </linearGradient>
                                <path
                                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                                />
                                <path
                                    fill="#fff"
                                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                                />
                            </svg> </a></template
                    ><span> facebook </span></v-tooltip
                >
            </v-row>
        </v-card-text>

        <v-card-actions>
            <v-row justify="space-around">
                <v-col>
                    <v-btn color="success" text> Edit </v-btn>
                </v-col>
                <v-col>
                    <v-menu
                        top
                        origin="center center"
                        transition="scale-transition"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="error"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                text
                            >
                                Delete
                            </v-btn>
                        </template>

                        <v-card>
                            <div class="pa-5">
                                <p>Yakin untuk menghapus akun?</p>
                            </div>
                            <div class="text-right">
                                <v-btn color="success" @click="hapus" text>
                                    Yes
                                </v-btn>
                                <v-btn color="error" text> No </v-btn>
                            </div>
                        </v-card>
                    </v-menu>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import router from '../router';

export default {
    setup() {
        const user = ref('');
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');

        onMounted(async () => {
            await axios
                .get('/api/allUser', {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
                .then(async (res) => {
                    user.value = res.data.user;
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });

        const handlerSubmit = () => {
            console.log('adri');
        };

        const hapus = async () => {
            await axios
                .delete('/api/deletUser/?id=' + id, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
                .then(() => {
                    router.push({
                        name: '|| login',
                        params: { message: 'Akun berhasil di hapus' },
                    });
                });
        };
        return { hapus, user, handlerSubmit };
    },
};
</script>

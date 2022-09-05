<template>
    <div style="max-width: 300px" class="box">
        <v-alert
            type="success"
            v-if="success"
            style="background-color: green"
            >{{ success }}</v-alert
        >
        <v-alert type="error" v-if="error" style="background-color: red">{{
            error
        }}</v-alert>
        <v-card class="mx-auto rounded-xl mt-6" elevation="23">
            <v-card-text class="text-center" elevation="12">
                <v-card-title class="text-h4">Log In</v-card-title>
            </v-card-text>
            <v-divider color="black"></v-divider>
            <v-form @submit.prevent="submit">
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="12">
                            <v-text-field
                                type="email"
                                elevation="12"
                                v-model="email"
                                label="Email"
                                solo
                                require
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12">
                            <v-text-field
                                v-model="password"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show ? 'text' : 'password'"
                                label="Password"
                                solo
                                @click:append="show = !show"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-hover v-slot="{ isHovering, props }">
                                <v-btn
                                    type="submit"
                                    rounded
                                    color="primary"
                                    dark
                                    :elevation="isHovering ? 12 : 2"
                                    v-bind="props"
                                >
                                    Log In
                                </v-btn>
                            </v-hover>
                        </v-col>
                        <v-col>
                            <v-hover v-slot="{ isHovering, props }">
                                <router-link
                                    to="/registrasi"
                                    :elevation="isHovering ? 12 : 2"
                                    v-bind="props"
                                    style="text-decoration: none"
                                    >Registrasi
                                </router-link></v-hover
                            >
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>
<script>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';
import io from 'socket.io-client';

export default {
    setup() {
        const socket = io('http://localhost:3000');
        const show = ref(false);
        const email = ref('');
        const password = ref('');
        const error = ref('');
        const success = ref('');

        if (router.currentRoute.params.message) {
            success.value = router.currentRoute.params.message;
            setTimeout(() => {
                success.value = '';
            }, 3000);
        }

        const submit = async () => {
            await axios
                .post('/api/login', {
                    email: email.value,
                    password: password.value,
                })
                .then((res) => {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('id', res.data._id);

                    socket.emit('id', res.data._id);

                    router.push({
                        name: 'chat',
                    });
                })
                .catch((err) => {
                    error.value = err.response.data.message;
                    setTimeout(() => {
                        error.value = '';
                    }, 3000);
                });
        };

        return { email, password, show, submit, error, success };
    },
};
</script>
<style lang="scss" scoped>
.box {
    display: block;

    margin-right: auto;
    margin-left: auto;
}
.v-card {
    background-color: #80cbc4;
}

@media (max-width: 600px) {
    .box {
        margin-left: 1%;
    }
}
</style>

<template>
    <div style="max-width: 300px" class="box">
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

export default {
    setup() {
        const show = ref(false);
        const email = ref('');
        const password = ref('');

        const submit = async () => {
            await axios
                .post('/api/login', {
                    email: email.value,
                    password: password.value,
                })
                .then((res) => {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('email', res.data.email);
                    router.push({
                        name: 'chat',
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        };

        return { email, password, show, submit };
    },
};
</script>
<style lang="scss" scoped>
.box {
    display: fixed;

    margin-top: 8%;
    margin-left: 40%;
}
.v-card {
    background-color: #80cbc4;
}

@media (max-width: 600px) {
    .box {
        margin-left: 3%;
    }
}
</style>

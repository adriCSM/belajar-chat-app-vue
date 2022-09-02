<template>
    <div style="max-width: 350px" class="box">
        <v-card class="mx-auto" elevation="23">
            <v-card-text class="text-center" elevation="12">
                <v-card-title class="text-h4">Registrasi</v-card-title>
            </v-card-text>
            <v-divider color="black"></v-divider>
            <v-form @submit.prevent="submit">
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="12">
                            <v-text-field
                                elevation="12"
                                v-model="username"
                                label="Username"
                                solo
                                require
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12">
                            <v-text-field
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
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                label="Password"
                                solo
                                @click:append="show1 = !show1"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12">
                            <v-text-field
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show ? 'text' : 'password'"
                                :rules="[rules.match]"
                                label="Confirm Password"
                                solo
                                @click:append="show = !show"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="pb-4 mt-0">
                        <v-col>
                            <v-hover v-slot="{ isHovering, props }">
                                <v-btn
                                    :elevation="isHovering ? 12 : 2"
                                    v-bind="props"
                                    type="submit"
                                    color="primary"
                                    dark
                                >
                                    Registrasi
                                </v-btn></v-hover
                            >
                        </v-col>
                        <v-col>
                            <v-hover v-slot="{ isHovering, props }">
                                <router-link
                                    to="/"
                                    :elevation="isHovering ? 12 : 2"
                                    v-bind="props"
                                    class="pt-3"
                                    style="text-decoration: none"
                                >
                                    <i class="bi bi-chevron-double-left"></i>
                                    Back to Log In
                                </router-link>
                            </v-hover>
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
        const show1 = ref(false);
        const username = ref('');
        const email = ref('');
        const password = ref('');
        const rules = ref({
            match: (value) =>
                value == password.value ||
                'Password dan Confirm password tidak cocok',
        });

        const submit = async () => {
            await axios
                .post('/api/registrasi', {
                    name: username.value,
                    email: email.value,
                    password: password.value,
                })
                .then(() => {
                    router.push({
                        name: 'login',
                    });
                });
        };

        return {
            password,
            username,
            email,
            show,
            show1,
            rules,
            submit,
        };
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
        margin-left: 1%;
    }
}
</style>

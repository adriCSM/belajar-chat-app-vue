<template>
    <v-card class="mx-auto text-center" max-width="550px" elevation="20">
        <v-img class="white--text align-end" height="50%" :src="user.pic">
            <v-card-title>
                <!--  -->
            </v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> {{ user.name }} </v-card-subtitle>

        <v-card-text class="text--primary">
            <div>{{ user.email }}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="green" text> Edit </v-btn>

            <v-btn color="error" text> Delete </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const user = ref('');
        const token = localStorage.getItem('token');

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
        return {
            user,
        };
    },
};
</script>

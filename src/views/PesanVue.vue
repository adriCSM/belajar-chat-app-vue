<template>
    <div>
        <v-card class="overflow-y-auto pb-7 card1 messages" v-chat-scroll>
            <v-list v-for="(item, i) in allPesan" :key="i">
                <!-- /**===============kiri========================== */ -->
                <v-list-item
                    v-if="
                        item.pengirim.email != email && item.chat._id == idChat
                    "
                >
                    <v-row class="me-1 mt-5">
                        <v-col cols="1">
                            <v-avatar>
                                <v-img src="../../public/109715820.jpg">
                                </v-img>
                            </v-avatar>
                        </v-col>
                        <v-col class="pt-3 bable-Chat">
                            <v-row class="m-1 mt-3" elavation="19">
                                <span
                                    data-testid="tail-in"
                                    data-icon="tail-in"
                                    class="_1kh65 pt-4"
                                    ><svg
                                        viewBox="0 0 7 50"
                                        width="7"
                                        height="40"
                                    >
                                        <path
                                            fill="#ffffff"
                                            d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                                        ></path>
                                    </svg>
                                </span>

                                <!-- /**======================if teks panjang========================== */ -->
                                <v-col
                                    v-if="item.content.length > 37"
                                    cols="11 bg-white mt-4 rounded-xl rounded-tl-0 pt-1 "
                                    style="background-color: white"
                                >
                                    <h5 class="pt-3">
                                        {{ item.pengirim.name }}
                                    </h5>
                                    <div>
                                        {{ item.content }}
                                        <span
                                            class="d-flex flex-row-reverse text-caption text-grey ps-10"
                                            dir="auto"
                                            >{{ item.waktu }}</span
                                        >
                                    </div>
                                </v-col>
                                <!-- /**======================if teks pendek========================== */ -->
                                <v-col
                                    v-if="item.content.length <= 37"
                                    cols="auto bg-white mt-4 rounded-xl rounded-tl-0 pt-1 "
                                    style="background-color: white"
                                >
                                    <h5 class="pt-3">
                                        {{ item.pengirim.name }}
                                    </h5>
                                    <div>
                                        {{ item.content }}
                                        <span
                                            class="d-flex flex-row-reverse text-caption text-grey ps-10"
                                            dir="auto"
                                            >{{ item.waktu }}</span
                                        >
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-list-item>

                <!-- /**-----------kanan------------- */ -->
                <v-list-item
                    v-if="
                        item.pengirim.email == email && item.chat._id == idChat
                    "
                >
                    <v-row class="me-10 mt-5 d-flex flex-row-reverse">
                        <v-col cols="1">
                            <v-avatar>
                                <v-img src="../../public/109715820.jpg">
                                </v-img>
                            </v-avatar>
                        </v-col>
                        <v-col class="pt-3">
                            <v-row class="m-1 mt-3 d-flex flex-row-reverse">
                                <span
                                    data-testid="tail-in"
                                    data-icon="tail-in"
                                    class="_1kh65 pt-4 icon"
                                    ><svg
                                        viewBox="0 0 7 50"
                                        width="7"
                                        height="40"
                                        class=""
                                    >
                                        <path
                                            fill="#90CAF9"
                                            d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                                        ></path>
                                    </svg>
                                </span>

                                <!-- /**======================if teks panjang========================== */ -->

                                <v-col
                                    v-if="item.content.length > 37"
                                    cols="11 bg-white mt-4 rounded-xl rounded-tr-0 pt-1 "
                                    style="background-color: #90caf9"
                                    elavation="19"
                                >
                                    <h5 class="d-flex flex-row-reverse">
                                        {{ item.pengirim.name }}
                                    </h5>
                                    <div>
                                        {{ item.content }}
                                        <span
                                            class="d-flex flex-row-reverse text-caption text-grey ps-10"
                                            dir="auto"
                                            >{{ item.waktu }}
                                        </span>
                                    </div>
                                </v-col>
                                <!-- /**======================if teks pendek========================== */ -->
                                <v-col
                                    v-if="item.content.length <= 37"
                                    cols="auto bg-white mt-4 rounded-xl rounded-tr-0 pt-1"
                                    style="background-color: #90caf9"
                                    elavation="19"
                                >
                                    <h5 class="d-flex flex-row-reverse">
                                        {{ item.pengirim.name }}
                                    </h5>
                                    <div>
                                        {{ item.content }}
                                        <span
                                            class="d-flex flex-row-reverse text-caption text-grey ps-10"
                                            dir="auto"
                                            >{{ item.waktu }}
                                        </span>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>
        </v-card>

        <v-form @submit.prevent="submitHandler">
            <v-footer
                app
                color="#90CAF9"
                height="72"
                inset
                style="position: fixed"
            >
                <button>
                    <span class="material-symbols-rounded mt-2 pl-1">
                        attach_file
                    </span>
                </button>

                <v-text-field
                    v-model="pesan"
                    background-color="white"
                    dense
                    flat
                    hide-details
                    rounded
                    solo
                    color="deep-orange lighten-5"
                ></v-text-field>
                <button
                    size="small"
                    type="submit"
                    class="ms-2"
                    background-color="white"
                >
                    <span class="material-symbols-rounded kirim mt-2">
                        send
                    </span>
                </button>
            </v-footer>
        </v-form>
    </div>
</template>

<script lang="ts">
import router from '../router/index';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import io from 'socket.io-client';

export default {
    setup() {
        const socket = io('http://localhost:5000');
        const email = localStorage.getItem('email');
        console.log(email);
        const pesan = ref();
        const allPesan = ref([]);
        const idChat = ref(router.currentRoute.params.idChat);

        onMounted(async () => {
            await axios
                .get(`/api/allPesan/?chatId=${idChat.value}`, {
                    headers: {
                        Authorization:
                            'Bearer ' + localStorage.getItem('token'),
                    },
                })
                .then((res) => {
                    console.log(res.data.allMessage);
                    res.data.allMessage.map((e) => {
                        allPesan.value.push(e);
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });

        const jam = ref(new Date().getHours() + 1);
        const menit = ref(new Date().getMinutes());
        const submitHandler = async () => {
            if (jam.value == 25) {
                jam.value = 1;
            }
            await axios
                .post(
                    '/api/sendPesan',
                    {
                        content: pesan.value,
                        chatId: idChat.value,
                        waktu: `${jam.value}:${menit.value}`,
                    },
                    {
                        headers: {
                            Authorization:
                                'Bearer ' + localStorage.getItem('token'),
                        },
                    },
                )
                .then((res) => {
                    allPesan.value.push(res.data);

                    socket.emit('kirim-pesan', res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
            pesan.value = '';
        };

        socket.on('pesan', (data) => {
            console.log('adri');
            allPesan.value.push(data);
        });

        return { idChat, pesan, allPesan, submitHandler, email };
    },
};
</script>

<style lang="scss" scoped>
.icon {
    transform: rotateY(180deg);
}
.kirim {
    font-size: 40px;
}

.input {
    margin-left: 5px;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    height: 40px;
    background-color: white;
    border-radius: 50px;
}

.v-list {
    background-color: aliceblue;
}

.card1 {
    background-color: aliceblue;
    min-height: 90vh;
    max-height: 90vh;
}

@media (max-width: 600px) {
    .card1 {
        min-height: 80.5vh;
        max-height: 80.5vh;

        .bable-Chat {
            padding-left: 50px;
        }
    }
}
@media (max-width: 340px) {
    .card1 {
        min-height: 78vh;
        max-height: 78vh;

        .bable-Chat {
            padding-left: 50px;
        }
    }

    .v-footer {
        width: max-content;
    }
}
@media (min-width: 600px) {
    .card1 {
        min-height: 81.5vh;
        max-height: 81.5vh;
    }
    .bable-Chat {
        padding-left: 0px;
    }
}
</style>

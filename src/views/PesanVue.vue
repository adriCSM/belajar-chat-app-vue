<template>
    <div>
        <v-card class="overflow-y-auto pb-7 messages" v-chat-scroll>
            <v-list v-for="(item, i) in allPesan" :key="i">
                <!-- /**===============kiri========================== */ -->
                <v-list-item
                    v-if="
                        item.pengirim.email != Email && item.chat._id == idChat
                    "
                >
                    <v-row class="me-1 pt-0">
                        <v-col class="pt-3 ms-2">
                            <v-row class="mt-3" elavation="19">
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
                                            fill="#f1f5c4"
                                            d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                                        ></path>
                                    </svg>
                                </span>

                                <!-- /**======================if teks panjang========================== */ -->
                                <v-col
                                    v-if="item.content.length > 37"
                                    cols="11 bg-white mt-4 rounded-xl rounded-tl-0 pt-1 "
                                    style="background-color: #f1f5c4"
                                    :elevation="23"
                                >
                                    <h5 style="color: orange">
                                        {{ item.pengirim.name }}
                                    </h5>
                                    <div>
                                        {{ item.content }}
                                        <span
                                            class="d-flex flex-row-reverse text-caption text-grey"
                                            dir="auto"
                                            >{{ item.waktu }}</span
                                        >
                                    </div>
                                </v-col>
                                <!-- /**======================if teks pendek========================== */ -->
                                <v-col
                                    :elevation="23"
                                    v-if="item.content.length <= 37"
                                    cols="auto bg-white mt-4 rounded-xl rounded-tl-0 pt-1 "
                                    style="background-color: #f1f5c4"
                                >
                                    <h5 style="color: orange">
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
                    style="padding-right: 0"
                    v-if="
                        item.pengirim.email == Email && item.chat._id == idChat
                    "
                >
                    <v-row class="me-2 pt-0 d-flex flex-row-reverse">
                        <v-col class="pt-3">
                            <v-row
                                class="m-1 mt-3 d-flex flex-row-reverse pe-2"
                            >
                                <span
                                    data-testid="tail-in"
                                    data-icon="tail-in"
                                    class="_1kh65 pt-4 icon"
                                    ><svg
                                        viewBox="0 0 7 50"
                                        width="7"
                                        height="40"
                                    >
                                        <path
                                            fill="#BDBDBD"
                                            d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                                        ></path>
                                    </svg>
                                </span>

                                <!-- /**======================if teks panjang========================== */ -->

                                <v-col
                                    :elevation="23"
                                    v-if="item.content.length > 37"
                                    cols="11 bg-white mt-4 rounded-xl rounded-tr-0 pt-1 "
                                    style="background-color: #bdbdbd"
                                >
                                    <h5 class="d-flex flex-row-reverse">
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
                                    :elevation="23"
                                    v-if="item.content.length <= 37"
                                    cols="auto bg-white mt-4 rounded-xl rounded-tr-0 pt-1"
                                    style="background-color: #bdbdbd"
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
            <v-footer app height="72" inset style="position: fixed">
                <v-row>
                    <input
                        id="fileUploadInput"
                        class="ember-text-field ember-view"
                        type="file"
                        hidden
                    />
                    <v-col
                        cols="1"
                        style="padding-right: 0 0 0 0 0"
                        class="adri"
                    >
                        <a href="#" @click="submitFile">
                            <v-hover v-slot="{ hover }" open-delay="200">
                                <label
                                    :elevation="hover ? 16 : 2"
                                    :class="{ 'on-hover': hover }"
                                    for="fileUploadInput"
                                    class="material-symbols-rounded mt-2"
                                >
                                    attach_file
                                </label>
                            </v-hover>
                        </a>
                    </v-col>
                    <v-col cols="9">
                        <v-text-field
                            v-model="pesan"
                            background-color="white"
                            dense
                            flat
                            hide-details
                            rounded
                            solo
                        ></v-text-field>
                    </v-col>
                    <v-col cols="1 pl-0 ml-0">
                        <button
                            size="small"
                            type="submit"
                            background-color="white"
                        >
                            <span class="material-symbols-rounded kirim">
                                send
                            </span>
                        </button>
                    </v-col>
                </v-row>
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
        const socket = io(`/`);
        const Email = ref(localStorage.getItem('email'));
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
                    res.data.allMessage.map((e) => {
                        e.status = false;
                        allPesan.value.push(e);
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        });

        const submitHandler = async () => {
            if (pesan.value) {
                await axios
                    .post(
                        '/api/sendPesan',
                        {
                            content: pesan.value,
                            chatId: idChat.value,
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
            }
            pesan.value = '';
        };

        socket.on('pesan', (data) => {
            allPesan.value.push(data);
        });

        const submitFile = () => {
            console.log('');
        };
        return { idChat, pesan, allPesan, submitHandler, Email, submitFile };
    },
};
</script>

<style lang="scss" scoped>
.v-footer {
    background-image: url('../../public/valeriia-neganova-JYweIEW9TIc-unsplash.jpg');
    background-position: center;
    background-size: cover;
}
.icon {
    transform: rotateY(180deg);
}
.kirim {
    color: white;
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
    background-color: #bcaaa4;
}

.v-card {
    background-color: #bcaaa4;
    min-height: 90vh;
    max-height: 90vh;
}

@media (max-width: 600px) {
    .v-card {
        min-height: 80.5vh;
        max-height: 80.5vh;
    }
}
@media (max-width: 340px) {
    .v-card {
        min-height: 78vh;
        max-height: 78vh;

        .kirir {
            padding: 0px;
        }
    }

    .v-footer {
        width: fit-content;

        .adri {
            padding-left: 0;
            margin-left: 0;
        }
    }

    .kiri {
        padding-left: 0;
        margin-left: 0;
    }
}
@media (min-width: 600px) {
    .v-card {
        min-height: 81.5vh;
        max-height: 81.5vh;
    }

    .adri {
        padding-left: 60px;
    }
}
</style>

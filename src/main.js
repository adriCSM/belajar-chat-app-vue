import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import VueChatScroll from 'vue-chat-scroll';
import 'axios';

Vue.use(VueChatScroll);

new Vue({ router, vuetify, render: (h) => h(App) }).$mount('#app');

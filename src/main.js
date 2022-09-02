import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import VueChatScroll from 'vue-chat-scroll';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

Vue.use(VueChatScroll);
// Vue.config.productionTip = false;

new Vue({ router, vuetify, render: (h) => h(App) }).$mount('#app');

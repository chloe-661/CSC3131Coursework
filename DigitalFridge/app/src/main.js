// import Vue from "vue";
import { createApp } from 'vue'
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from 'vue-axios';
//import apiClient from "./http-commons";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//createApp(App).use(router).mount('#app');

// import { createApp } from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
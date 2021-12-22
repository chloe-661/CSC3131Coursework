// import Vue from "vue";
//import apiClient from "./http-commons";
import { createApp } from 'vue'
import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from 'vue-axios';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//This created the vue application
const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
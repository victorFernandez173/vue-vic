import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSweetAlert2 from 'vue-sweetalert2';
import axios from 'axios';
import VueAxios from 'vue-axios';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import 'simplebar/dist/simplebar.min.css';

createApp(App).use(router).use(VueSweetAlert2).use(VueAxios, axios).use(BootstrapIconsPlugin).mount('#app');

import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Alpine from 'alpinejs';
import ChirpTextarea from '../js/components/ChirpTextarea.vue';

window.Alpine = Alpine;

Alpine.start();

const app = createApp();
app
    .component('ChirpTextarea', ChirpTextarea)
app
    .mount('#main')

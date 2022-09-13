import { createApp } from 'vue';
import store from './store';

import App from './app';

import './css/index.css';

const app = createApp(App);

app.use(store);
app.mount('#app');

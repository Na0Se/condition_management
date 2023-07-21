import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

const app = createApp(App);

// routerの使用を登録
app.use(router);

app.mount('#app');

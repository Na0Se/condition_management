import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLeaf)

const app = createApp(App);

// routerの使用を登録
app.use(router);

app.component('fa-icon', FontAwesomeIcon );

app.mount('#app');

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from 'unhead';
import Notifications from '@kyvg/vue3-notification';
import router from '@/router';
import i18n from '@/translations';
import App from './App.vue';
import Sprite from '@/components/ui/Sprite';
import Picture from '@/components/ui/Picture';
import Loader from '@/components/ui/Loader';
import Notification from '@/components/ui/Notification';
import 'virtual:svg-icons-register';

const app = createApp(App);
const pinia = createPinia();
const head = createHead();

app.use(i18n);
app.use(router);
app.use(pinia);
app.use(Notifications);

app.component('Sprite', Sprite);
app.component('Picture', Picture);
app.component('Loader', Loader);
app.component('Notification', Notification);

app.mount('#app');

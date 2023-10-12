import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vazirmatn/Vazirmatn-font-face.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import CardComponent from './components/CardComponent.vue'
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp(App)
app.use(router)

app.component('CardView', CardComponent)
app.component(VueCountdown.name, VueCountdown);
app.mount('#app')

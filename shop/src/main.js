import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import store from './store'
import { registerPlugins } from '@/plugins'
import 'vuetify/dist/vuetify.css';

const app = createApp(App)

// Registro de plugins
registerPlugins(app)

// Configuración global de Axios
app.config.globalProperties.$axios = axios;

// Uso del almacenamiento Vuex
app.use(store);

// Montaje de la aplicación en el elemento con ID 'app'
app.mount('#app')

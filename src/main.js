// Material Design Icons
import '@mdi/font/css/materialdesignicons.css';

// CSS
import './assets/css/style.css'
import './assets/css/gallery.css'
import './assets/css/accordion.css'
import './assets/css/slider.css'
import './assets/css/desktop.css'
import './assets/css/mobile.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')

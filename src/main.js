// import './assets/main.css'
//
// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
//
// import App from './App.vue'
// import router from './router'
//
// const app = createApp(App)
//
// app.use(createPinia())
// app.use(router)
//
// app.mount('#app')

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css';

//import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})
createApp(App).use(vuetify).mount('#app')

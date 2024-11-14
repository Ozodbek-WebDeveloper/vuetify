
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './Store'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './assets/styles/tailwind.css'

const vuetify = createVuetify({
    components,
    directives
  })

const app = createApp(App)

app.use(router)
app.use(vuex)
app.use(vuetify)

app.mount('#app')

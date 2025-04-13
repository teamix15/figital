import '@/shared/assets/styles/main.css'
import '@/shared/assets/styles/variables.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App).use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions)

app.use(createPinia())
app.use(router)

app.mount('#app')

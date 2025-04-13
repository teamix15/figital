import '@/shared/assets/styles/main.css'
import '@/shared/assets/styles/variables.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'
import router from './router'
import { useUserStore } from '@/stores/userStore'

const app = createApp(App).use(Vue3Toastify, {
  autoClose: 3000,
  position: 'top-right',
} as ToastContainerOptions)

app.use(createPinia())
app.use(router)

const userStore = useUserStore()

userStore.setupAxiosInterceptor()

app.mount('#app')

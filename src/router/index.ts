import HomeView from '@/views/HomeView.vue'
import UnitsView from '@/views/UnitsView.vue'
import AccountView from '@/views/AccountView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/units',
      name: 'units',
      component: UnitsView,
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
    },
  ],
})

export default router

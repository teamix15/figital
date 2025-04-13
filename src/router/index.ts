import HomeView from '@/views/HomeView.vue'
import UnitsView from '@/views/UnitsView.vue'
import AccountView from '@/views/AccountView.vue'
import SignUpView from '@/views/SignUpView/SignUpView.vue'
import SignInView from '@/views/SignInView/SignInView.vue'
import DictionaryView from '@/views/DictionaryView/DictionaryView.vue'
import WordsGameView from '@/views/WordsGameView/WordsGameView.vue'

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
      path: '/login',
      name: 'login',
      component: SignInView,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView,
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
    {
      path: '/dictionary',
      name: 'dictionary',
      component: DictionaryView,
    },
    {
      path: '/words-game',
      name: 'words-game',
      component: WordsGameView,
    },
  ],
})

export default router

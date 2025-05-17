import HomeView from '@/views/HomeView.vue'
import UnitsView from '@/views/UnitsView.vue'
import AccountView from '@/views/AccountView/AccountView.vue'
import SignUpView from '@/views/SignUpView/SignUpView.vue'
import SignInView from '@/views/SignInView/SignInView.vue'
import DictionaryView from '@/views/DictionaryView/DictionaryView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AccountGamesView from '@/views/AccountGamesView/AccountGamesView.vue'
import FourWordsCardGame from '@/views/FourWordsCardGame/FourWordsCardGame.vue'
import AccountWritingView from '@/views/AccountWritingView/AccountWritingView.vue'
import GapsView from '@/views/Gaps/GapsView.vue'
import QuizView from '@/views/QuizView/QuizView.vue'

const ROUTE_NAMES = {
  HOME: 'home',
  LOGIN: 'login',
  SIGN_UP: 'sign-up',
  UNITS: 'units',
  ACCOUNT: 'account',
  DICTIONARY: 'dictionary',
  FOUR_CARD_WORDS_GAME: 'four-card-words-game',
  GAMES: 'games',
  WRITING: 'writing',
  GAPS: 'gaps',
  QUIZ: `quiz`,
}

const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  UNITS: '/units',
  ACCOUNT: '/account',
  DICTIONARY: '/dictionary',
  FOUR_CARD_WORDS_GAME: '/account/:unit/games/four-card-words-game',
  GAMES: '/account/:unit/games',
  WRITING: '/account/:unit/writing',
  GAPS: '/account/:unit/writing/gaps',
  QUIZ: '/account/:unit/writing/quiz',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PATHS.HOME,
      name: ROUTE_NAMES.HOME,
      component: HomeView,
    },
    {
      path: PATHS.LOGIN,
      name: ROUTE_NAMES.LOGIN,
      component: SignInView,
    },
    {
      path: PATHS.SIGN_UP,
      name: ROUTE_NAMES.SIGN_UP,
      component: SignUpView,
    },
    {
      path: PATHS.UNITS,
      name: ROUTE_NAMES.UNITS,
      component: UnitsView,
      meta: { requiresAuth: true },
    },
    {
      path: PATHS.ACCOUNT,
      name: ROUTE_NAMES.ACCOUNT,
      component: AccountView,
      meta: { requiresAuth: true },
    },
    {
      path: PATHS.DICTIONARY,
      name: ROUTE_NAMES.DICTIONARY,
      component: DictionaryView,
      meta: { requiresAuth: true },
    },
    {
      path: PATHS.GAMES,
      name: ROUTE_NAMES.GAMES,
      component: AccountGamesView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: PATHS.WRITING,
      name: ROUTE_NAMES.WRITING,
      component: AccountWritingView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: PATHS.FOUR_CARD_WORDS_GAME,
      name: ROUTE_NAMES.FOUR_CARD_WORDS_GAME,
      component: FourWordsCardGame,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: PATHS.GAPS,
      name: ROUTE_NAMES.GAPS,
      component: GapsView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: PATHS.QUIZ,
      name: ROUTE_NAMES.QUIZ,
      component: QuizView,
      props: true,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthRoute = to.matched.some((record) => record.meta.requiresAuth)
  const access = localStorage.getItem('access')
  const refresh = localStorage.getItem('refresh')

  if (isAuthRoute && (!access || !refresh)) {
    next(PATHS.SIGN_UP)
  } else {
    next()
  }
})

export { PATHS, ROUTE_NAMES }
export default router

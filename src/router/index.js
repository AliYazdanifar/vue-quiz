import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/intro',
      name: 'intro',
      component: IntroView
    },

  ]
})

export default router

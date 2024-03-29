import {authGuard} from '@/core/guards/auth-guard'
import AboutView from '@/views/AboutView.vue'
import AiChatView from '@/views/AiChatView.vue'
import DashboardView from '@/views/DashboardView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import TestView from '@/views/TestView.vue'
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {requireAuth: false}
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {requireAuth: false}
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {requireAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {requireAuth: false}
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
      meta: {requireAuth: false}
    },
    {
      path: '/chat',
      name: 'AiChat',
      component: AiChatView,
      meta: {requireAuth: true}
    }
  ]
})

router.beforeEach(authGuard)

export default router

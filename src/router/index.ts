import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/amigos',
      name: 'amigos',
      component: () => import('../views/AmigosView.vue'),
    },
    {
      path: '/grupos',
      name: 'grupos',
      component: () => import('../views/GruposView.vue'),
    },
    {
      path: '/grupos/crear',
      name: 'crear-grupo',
      component: () => import('../views/CrearGrupoView.vue'),
    },
    {
      path: '/calendario',
      name: 'calendario',
      component: () => import('../views/CalendarioView.vue'),
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: () => import('../views/Layouts.vue'),
      redirect: 'kitchen',
      children: [
        {
          path: '/kitchen',
          name: 'kitchen',
          component: () => import('../views/Kitchen.vue')
        }
      ]
    }
  ]
})

export default router

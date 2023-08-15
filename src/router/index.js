import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash === '#termsAndCondition') {
      return { el: '#termsAndCondition', behavior: 'smooth' };
    } else {
      return savedPosition || { left: 0, top: 0 };
    }
  },
  routes: [
    {
      path: '/',
      component: import('../views/Home.vue')
    },
    {
      path: '/reporting',
      component: import('../views/Reporting.vue')
    }
  ]
})

export default router

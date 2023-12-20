import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  base: '/https://ppks-stmik-stik.vercel.app/',
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
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
    },
    {
      path: '/about-us',
      component: import('../views/AboutUs.vue')
    }
  ]
})

export default router

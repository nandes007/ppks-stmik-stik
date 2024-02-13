import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Reporting from '../views/Reporting.vue'
import AboutUs from '../views/AboutUs.vue'
import ComplaintForm from '../views/ComplaintForm.vue'

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
      component: Home
    },
    {
      path: '/reporting',
      component: Reporting
    },
    {
      path: '/about-us',
      component: AboutUs
    },
    {
      path: '/complaint',
      component: ComplaintForm
    }
  ]
})

export default router

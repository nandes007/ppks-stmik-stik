import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Reporting from '../views/Reporting.vue'
import AboutUs from '../views/AboutUs.vue'
import ComplaintForm from '../views/ComplaintForm.vue'

/**
 * Admin Component
 */
import AdminApp from '../views/admin/AdminApp.vue'
import HomeView from '../views/admin/HomeView.vue'
import PendingTicket from '../views/admin/PendingTicket.vue'
import ResolvedTicket from '../views/admin/ResolvedTicket.vue'

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
    },
    {
      path: '/admin',
      component: AdminApp,
      children: [
        {
          path: '',
          name: 'admin',
          component: HomeView
        },
        {
          path: 'pending-tickets',
          name: 'pending-tickets',
          component: PendingTicket
        },
        {
          path: 'resolved-tickets',
          name: 'resolved-tickets',
          component: ResolvedTicket
        },
      ]
    },
  ]
})

export default router

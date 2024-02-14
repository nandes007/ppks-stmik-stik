import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Reporting from '../views/Reporting.vue'
import AboutUs from '../views/AboutUs.vue'
import ComplaintForm from '../views/ComplaintForm.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Tracking from '../views/Tracking.vue'

/**
 * Admin Component
 */
import AdminApp from '../views/admin/AdminApp.vue'
import HomeView from '../views/admin/HomeView.vue'
import PendingTicket from '../views/admin/PendingTicket.vue'
import ResolvedTicket from '../views/admin/ResolvedTicket.vue'
import ShowTicket from '../views/admin/ShowTicket.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    component: Register
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
    component: ComplaintForm,
    meta: { requiresAuth: true },
  },
  {
    path: '/tracking',
    component: Tracking,
    meta: { requiresAuth: true },
  },
  {
    path: '/admin',
    component: AdminApp,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'admin',
        component: HomeView,
        meta: { authOnly: true },
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
      {
        path: 'show-ticket/:id',
        name: 'show-ticket',
        props: true,
        component: ShowTicket,
      }
    ]
  },
]

const router = createRouter({
  // base: '/https://ppks-stmik-stik.vercel.app/',
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash === '#termsAndCondition') {
      return { el: '#termsAndCondition', behavior: 'smooth' };
    } else {
      return savedPosition || { left: 0, top: 0 };
    }
  }
})

function isLoggedIn () {
  const token = localStorage.getItem('token')
  if (token == null) return false;
  else return true
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) next({name: 'login'})
  else next()
})

export default router

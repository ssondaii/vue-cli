import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
      {
          path: '/',
          name: 'Home',
          component: Home
      },
      {
          path: '/about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
          path: '/admin/staff',
          name: 'Staff',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/admin/Staff.vue')
      },
      {
          path: '/admin/Booking',
          name: 'Booking',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/admin/Booking.vue')
      },
      {
          path: '/i18n-example',
          name: 'I18nExample',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/I18nExample')
      }
]

const router = new VueRouter({
  routes
})

export default router

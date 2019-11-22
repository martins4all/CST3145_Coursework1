import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup'
import Dashboard from './views/Dashboard'
import Reviews from './views/Reviews'
import Classes from './views/Classes'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/classes',
      name: 'classes',
      component: Classes
    },
  ]
})

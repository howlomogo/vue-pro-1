import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Users from '../views/Users'
import User from '../views/User'
import NotFound from '../views/NotFound'

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
    component: About
  },
  {
      path: '/users',
      name: 'Users',
      component: Users
  },
  {
      path: '/user/:id',
      name: 'User',
      component: User
  },
  {
      // Redirect to /users
      path: '/user',
      redirect: '/users'
  },
  {
      path: '*',
      component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

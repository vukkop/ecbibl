import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Booklist from '../views/BookList.vue'
import Users from '../views/Users.vue'
import SingleUser from '../views/SingleUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/booklist',
    name: 'BookList',
    component: Booklist
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/singleuser/:id',
    name: 'SingleUser',
    component: SingleUser
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

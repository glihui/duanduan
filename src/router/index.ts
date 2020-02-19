import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/production',
    name: 'Production',
    component: () => import('../views/Production.vue')
  },
  {
    path: '/relation',
    name: 'Relation',
    component: () => import('../views/Relation.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Results from '../views/Results.vue'
import Result from '../views/Result.vue'
import HowItWorks from '../views/HowItWorks.vue'
import Pricing from '../views/Pricing.vue'

const About = () => import('../views/About.vue')
// const Results = () => import('../views/Results.vue')

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
    path: '/results',
    name: 'Results',
    component: Results
  },
  {
    path: '/how-it-works',
    name: 'How-it-works',
    component: HowItWorks
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }

]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Results from '../views/Results.vue'
import HowItWorks from '../views/HowItWorks.vue'

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
    path: '/result',
    name: 'Result',
    component: Results
  },
  {
    path: '/how-it-works',
    name: 'Result',
    component: HowItWorks
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

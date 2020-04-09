import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueResource from 'vue-resource'
import Navbar from './components/layout/Navbar.vue'
import SectionHeader from './components/Shared/Sections/SectionHeader.vue'

// Vue.use(VueResource)
Vue.config.productionTip = false
Vue.component('app-navbar', Navbar)
Vue.component('section-header', SectionHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

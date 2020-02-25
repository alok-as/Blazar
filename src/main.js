import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Navbar from './components/layout/Navbar.vue'

Vue.config.productionTip = false
Vue.component('app-navbar', Navbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

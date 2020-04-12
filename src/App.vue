<template>
  <div id="app">
    <app-scroll-nav></app-scroll-nav>
    <main>
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
    <app-login></app-login>
  </div>
</template>

<script>
import Login from './components/layout/Login'
import ScrollNav from './components/layout/Navbar'
import Footer from './components/layout/Footer'
export default {
  data () {
    return {
      showNav: false
    }
  },
  components: {
    'app-login': Login,
    'app-scroll-nav': ScrollNav,
    'app-footer': Footer
  },
  methods: {
    // For adding and removing the scroll navigation
    testscroll () {
      const navigation = document.querySelector('.navigation')
      if (window.scrollY > 150) {
        navigation.style.transform = 'translateY(0)'
      } else {
        navigation.style.transform = 'translateY(-100%)'
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.testscroll)
  },
  destoryed () {
    window.removeEventListener('scroll', this.testscroll)
  }
}
</script>
<style lang="scss">
#app{
  position: relative;
}
</style>

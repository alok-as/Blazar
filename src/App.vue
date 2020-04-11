<template>
  <div id="app">
    <app-login v-show="showModal"></app-login>
    <transition name="fade">
      <scroll-nav></scroll-nav>
    </transition>
    <router-view></router-view>
    <app-footer></app-footer>
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
    'scroll-nav': ScrollNav,
    'app-footer': Footer
  },
  methods: {
    testscroll () {
      const navigation = document.querySelector('.navigation')
      if (window.scrollY > 100) {
        navigation.style.transform = 'translateY(0)'
      } else {
        navigation.style.transform = 'translateY(-100%)'
      }
    }
  },
  computed: {
    showModal () {
      return this.$store.getters.showLogin
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

.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: all .6s;
}

.fade-leave-active{
  opacity: 0;
  transition: all .6s;
}
</style>

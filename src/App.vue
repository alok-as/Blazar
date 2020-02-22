<template>
  <div id="app">
    <app-login v-if="showModal"></app-login>
    <transition name="fade">
      <scroll-nav v-if="showNav"></scroll-nav>
    </transition>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Login from './components/Shared/Login'
import ScrollNav from './components/Shared/Navbar'
import Footer from './components/Shared/Footer'
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
      if (window.scrollY > 500) {
        this.showNav = true
      } else {
        this.showNav = false
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

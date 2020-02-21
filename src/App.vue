<template>
  <div id="app">
    <app-login v-if="showModal"></app-login>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Shared/Login'
export default {
  components: {
    'app-login': Login
  },
  computed: {
    showModal () {
      return this.$store.getters.showLogin
    }
  }
}
</script>
<style lang="scss">
#app{
  position: relative;
}
</style>

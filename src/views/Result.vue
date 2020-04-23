<template>
  <div class="result">
    <app-navbar></app-navbar>
    <result-header :image="resultData.img"></result-header>
  </div>
</template>
<script>
import ResultHeader from '../components/Result/ResultHeader'
export default {
  components: {
    ResultHeader
  },
  data () {
    return {
      resultData: {}
    }
  },
  created () {
    this.resultData = this.$route.params.result
  }
}
</script>
<style lang="scss" scoped>
.navigation {
  position: static;
  transform: translateY(0);
}
</style>

<template>
    <section class="popular">
        <div class="content">
            <section-header :content="content"></section-header>
            <!-- <popular-carousal></popular-carousal> -->
        </div>
    </section>
</template>

<script>
// import Carousal2 from '../Carousal/Carousal2'
export default {
  components: {
    // 'popular-carousal': Carousal2
  },
  data () {
    return {
      content: {
        heading: 'Popular Listings',
        subheading: 'Explore the greates places in the city. You won’t be disappointed.'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
    padding-top: 8rem;
    padding-bottom: 8rem;
}
</style>

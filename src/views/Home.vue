<template>
  <div class="home">
    <home-header></home-header>
    <home-featured></home-featured>
    <home-works></home-works>
    <home-explore></home-explore>
    <home-articles></home-articles>
    <home-join-us></home-join-us>
  </div>
</template>

<script>
import HomeHeader from '../components/Home/HomeHeader'
import HomeFeatured from '../components/Home/HomeFeaturedListings'
// import HomePopular from '../components/Home/HomePopularListing'
import HomeWorks from '../components/Home/HomeHowItWorks'
import HomeExplore from '../components/Home/HomeExplore'
import HomeArticles from '../components/Home/HomeArticles'
import HomeJoinUs from '../components/Home/HomeJoinus'

export default {
  components: {
    'home-header': HomeHeader,
    'home-featured': HomeFeatured,
    // 'home-popular': HomePopular
    'home-works': HomeWorks,
    'home-explore': HomeExplore,
    'home-articles': HomeArticles,
    'home-join-us': HomeJoinUs
  }
}

</script>

<style lang="scss">
</style>

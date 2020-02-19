<template>
  <div class="home">
    <home-header></home-header>
    <home-featured></home-featured>
    <home-popular></home-popular>
    <home-works></home-works>
    <home-explore></home-explore>
    <home-articles></home-articles>
    <home-joinus></home-joinus>
  </div>
</template>

<script>
import HomeHeader from '../components/Home/HomeHeader'
import HomeFeatured from '../components/Home/HomeFeaturedListings'
import HomePopular from '../components/Home/HomePopularListing'
import HomeWorks from '../components/Home/HomeHowItWorks'
import HomeExplore from '../components/Home/HomeExplore'
import HomeArticles from '../components/Home/HomeArticles'
import HomeJoinUs from '../components/Home/HomeJoinus'

export default {
  components: {
    'home-header': HomeHeader,
    'home-featured': HomeFeatured,
    'home-popular': HomePopular,
    'home-works': HomeWorks,
    'home-explore': HomeExplore,
    'home-articles': HomeArticles,
    'home-joinus': HomeJoinUs
  }
}

</script>

<style lang="scss">
.home{
  display: grid;
  grid-template-rows: 85vh repeat(3, min-content) 40vw repeat(2, min-content);
  grid-template-columns: [full-start] minmax(6rem,1fr) repeat(8,[col-start] minmax(min-content,14rem) [col-end]) minmax(6rem,1fr)[full-end];
}
</style>

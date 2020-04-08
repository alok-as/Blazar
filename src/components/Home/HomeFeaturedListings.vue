<template>
    <section class="featured">
        <div class="content featured__content">
            <section-header :content="content"></section-header>
            <div class="featured__gallery">
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-1.jpg" alt="Featured 1">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Hotel &amp; Hostel</h4>
                        <p class="featured__location featured__location--1">4 Locations</p>
                    </div>
                </div>
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-2.jpg" alt="Featured 2">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Food &amp; Drink</h4>
                        <p class="featured__location featured__location--2">6 Locations</p>
                    </div>
                </div>
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-3.jpg" alt="Featured 3">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Shop &amp; Store</h4>
                        <p class="featured__location featured__location--3">2 Locations</p>
                    </div>
                </div>
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-4.jpg" alt="Featured 4">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Entertainment</h4>
                        <p class="featured__location featured__location--4">1 Locations</p>
                    </div>
                </div>
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-5.jpg" alt="Featured 5">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Parking</h4>
                        <p class="featured__location featured__location--5">1 Locations</p>
                    </div>
                </div>
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-6.jpg" alt="Featured 6">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Outdoors</h4>
                        <p class="featured__location featured__location--6">2 Locations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
      content: {
        heading: 'Featured Categories',
        subheading: 'Discover New York’s best things to do, restaurants, theatre, nightlife and more'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../sass/components/home/_featured.scss";
</style>

<template>
    <section class='popular'>
        <div class='content'>
            <section-header :content="content"></section-header>
            <div class='popular__list mb-medium'>
              <popular-card v-for="item in popularItems" :key="item.id" :result="item"></popular-card>
            </div>
            <div class="temp">
              <call-to-action :text="'View all'"></call-to-action>
            </div>
        </div>
    </section>
</template>

<script>
import Card from '../UI/cards/result-card'
import callToAction from '../UI/buttons/button'
export default {
  components: {
    'popular-card': Card,
    'call-to-action':callToAction
  },
  data () {
    return {
      content: {
        heading: 'Popular Listings',
        subheading: 'Explore the greates places in the city. You won’t be disappointed.',
      },
      popularItems: [
        {
          id: '1U37qVsu3zHZQXZhQQWL',
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/moonlight_hotels-800x600.jpg',
          title: 'Moonlight Hotel',
          tagline: '4 star hotel by the valley in NY',
          location: 'Greenwich Street',
          stars: 4
        },
        {
          id: '3Rz3DJ09KhlJhKqB2uXN',
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/grand_hotel-800x600.jpg',
          title: 'Grand Hotel',
          tagline: 'Luxury hotel in Paris',
          location: '59th Street',
          stars: 5
        },
        {
          id: '0r2ZyXLgD1FhiKA7qfSh',
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/italian_restaurant-800x600.jpg',
          title: 'Italian Restaurant',
          tagline: 'Delicious, luxury food for you',
          location: 'West 30th Street',
          stars: 4
        }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
  @import '../../sass/components/home/_popular.scss';
</style>

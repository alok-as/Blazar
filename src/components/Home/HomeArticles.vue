<template>
    <section class="articles">
        <div class="content">
          <section-header :content="content"></section-header>
          <div class="articles__list">
              <article-card v-for="result in results" :key='result.id' :result="result"></article-card>
          </div>
          <div class="temp">
            <callToAction :text="'See All'"  class="mt-medium"></callToAction>
          </div>
        </div>
    </section>
</template>

<script>
import Article from '../Result/ResultCard'
import callToAction from '../UI/button'

export default {
  components: {
    'article-card': Article,
    callToAction

  },
  data () {
    return {
      content: {
        heading: 'Tips & articles',
        subheading: 'Browse the latest articles and tips from our blog'
      },
      results: [
        {
          id: 1,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/honey_coffee-800x600.jpg',
          title: 'The Best SPA Salons For Your Relaxation',
          tagline: 'This cafe is small but bustling',
          location: '98 E 7th St, New York'
        },
        {
          id: 2,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/liberty_club-800x600.jpg',
          title: 'The Best Music For Your Entertainment',
          tagline: '4 star hotel by the valley in NY',
          location: 'West 14th Street 11'
        },
        {
          id: 3,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/honey_coffee-800x600.jpg',
          title: 'How to Wear a Headscarf Like a Gucci Muse',
          tagline: 'Wild Savour from Africa',
          location: 'Clay Street 111'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../sass/components/home/_articles.scss";
</style>

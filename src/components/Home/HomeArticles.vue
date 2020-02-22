<template>
    <div class="articles">
        <div class="content articles__content">
            <h2 class="heading-2 center">Tips &amp; articles</h2>
            <h3 class="heading-3 heading-3--dark center mb-medium">Browse the latest articles and tips from our blog</h3>
            <div class="articles__list">
                <article-card v-for="result in results" :key='result.id' :result="result"></article-card>
            </div>
        </div>
    </div>
</template>

<script>
import Article from '../Result/ResultCard'
export default {
  components: {
    'article-card': Article
  },
  data () {
    return {
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
.articles{
    &__list{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(30rem,1fr));
        grid-gap: 3rem;
    }
}

.content{
    padding-top: 8rem;
    padding-bottom: 8rem;
}

.card {
    &__text{
        color: #fbaf2a !important;
    }
}
</style>

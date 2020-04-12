<template>
    <section class="articles">
        <div class="content">
          <section-header :content="content"></section-header>
          <div class="articles__list">
              <article-card v-for="article in articles" :key="article.id" :content="article"></article-card>
          </div>
          <div class="temp">
            <callToAction :text="'See All'"  class="mt-medium"></callToAction>
          </div>
        </div>
    </section>
</template>

<script>
import Article from '../UI/cards/article-card'
import callToAction from '../UI/buttons/button'

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
      articles: [
        {
          id: 1,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/blog_post1-600x800.jpg',
          category: 'Health and Wellness',
          title: 'The Best SPA Salons For Your Relaxation',
          date: 'October 8, 2019 by Steve'
        },
        {
          id: 2,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/blog7-600x800.jpg',
          category: 'Culture, Tips & Tricks',
          title: 'The Best Music For Your Entertainment',
          date: 'April 6, 2020 by Julia'
        },
        {
          id: 3,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/blog5-600x800.jpg',
          category: 'Culture, Tips & Tricks',
          title: 'How to Wear a Headscarf Like a Gucci Muse',
          date: 'April 16, 2020 by Henry'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../sass/components/home/_articles.scss";
</style>

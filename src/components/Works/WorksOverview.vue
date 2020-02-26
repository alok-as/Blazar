<template>
    <div class="overview">
        <div class="content">
            <section-header :content="content"></section-header>
            <div class="works__cards mb-medium">
                <card-composition v-for="step in steps" :key="step.id" :step="step"></card-composition>
            </div>
        </div>
    </div>
</template>
<script>
import CardCompostion from './WorkCardComposition'
export default {
  components: {
    'card-composition': CardCompostion
  },
  data () {
    return {
      content: {
        heading: 'We work for your business',
        subheading: 'ListingEasy is a great and probably the best place to drop in with your community.'
      },
      steps: [
        {
          id: 1,
          image: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/how_it_works1-630x513.jpg',
          title: 'Add your listing',
          content: 'Upload images, add useful links to your social media account or website, provide an address and opening hours, disclose any ther details you consider to be relevant.'
        },
        {
          id: 2,
          image: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/how_it_works2-630x513.jpg',
          title: 'Help customers find you',
          content: 'After the approval, your listing will be available on the website so your potential customers will be able to explore the places they are interested in. Mark your listing as an official.'
        },
        {
          id: 3,
          image: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/how_it_works3-630x513.jpg',
          title: 'Boost your revenue',
          content: 'Once you are found by your customers, they will start coming to your place! So your task from here is to make them satisfied and get them leave positive feedbacks.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
  padding-top: 8rem;
  padding-bottom: 4rem;
}
</style>

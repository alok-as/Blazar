<template>
    <div class="works">
        <div class="content">
            <section-header :content="content"></section-header>
            <div class="works__steps center">
                <work-step v-for="step in steps" :key="step.id" :step="step"></work-step>
            </div>
        </div>
    </div>
</template>
<script>
import Step from '../Shared/Custom/WorkStep'
export default {
  components: {
    'work-step': Step
  },
  data () {
    return {
      steps: [
        {
          id: 1,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/icon_img_05.png',
          title: 'Discover greates places',
          description: 'Search and Find what you are looking for. Best spots are here for you.'
        },
        {
          id: 2,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/icon_img_05.png',
          title: 'Discover greates places',
          description: 'Search and Find what you are looking for. Best spots are here for you.'
        },
        {
          id: 3,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/icon_img_05.png',
          title: 'Discover greates places',
          description: 'Search and Find what you are looking for. Best spots are here for you.'
        }
      ],
      content: {
        heading: 'How it works',
        subheading: 'See why ListingEasy is one of the best friends for exploring the city'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../sass/components/home/_works.scss";
</style>

<template>
    <div class="works">
        <div class="content">
            <div class="center mb-medium">
                <h2 class="heading-2">How it works</h2>
                <h3 class="heading-3">See why ListingEasy is one of the best friends for exploring the city</h3>
            </div>
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.heading-4{
    margin-bottom: 1rem;
}

.content{
    padding-top: 10rem;
    padding-bottom: 14rem;
}
</style>

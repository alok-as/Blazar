<template>
    <div class="overview">
        <div class="content">
            <section-header :content="content"></section-header>
            <div class="overview__image mb-big">
                <img src="../../assets/about-2.jpg" alt="Overview">
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
      content: {
        heading: 'Use Listing Easy anywhere',
        subheading: 'Explore the greates places in the city. You won’t be disappointed.'
      },
      steps: [
        {
          id: 1,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/icon_img_08.png',
          title: 'Discover greates places',
          description: 'Search and Find what you are looking for. Best spots are here for you.'
        },
        {
          id: 2,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/icon_img_09.png',
          title: 'Discover greates places',
          description: 'Search and Find what you are looking for. Best spots are here for you.'
        },
        {
          id: 3,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/icon_img_10.png',
          title: 'Discover greates places',
          description: 'Search and Find what you are looking for. Best spots are here for you.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.overview{
  background-color: $color-white;
}

.content{
  padding-top: 8rem;
  padding-bottom: 8rem;
}

</style>

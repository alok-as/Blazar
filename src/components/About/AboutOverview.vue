<template>
    <div class="about__overview">
        <div class="content">
            <div class="center mb-medium">
                <h2 class="heading-2">Use Listing Easy anywhere</h2>
                <h3 class="heading-3 heading-3--dark">Explore the greates places in the city. You won’t be disappointed.</h3>
            </div>
            <div class="about__image mb-medium">
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
.about{
    &__overview{
        background-color: $color-white;
    }
    &__steps{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 5rem;
    }
    &__step{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__img{
        width: 15rem;
        height: 15rem;
        display: block;
        margin-bottom: 1rem;
    }
}
.content{
    padding-top: 8rem;
}
</style>

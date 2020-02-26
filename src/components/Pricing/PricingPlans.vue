<template>
    <section class="plans">
        <div class="content">
            <section-header :content="content"></section-header>
            <div class="plans__header">
                <h2 class="heading-2">Choose a package</h2>
                <button class="btn">Listing Details</button>
            </div>
            <pricing-cards></pricing-cards>
        </div>
    </section>
</template>
<script>
import PricingCards from './PricingCards'
export default {
  components: {
    'pricing-cards': PricingCards
  },
  data () {
    return {
      content: {
        heading: 'Select your plans',
        subheading: 'Find the plan that’s right for you. Mark your listing as an official.'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
    padding-top: 8rem;
    padding-bottom: 5rem;
}
.plans{
    &__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>

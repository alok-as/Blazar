<template>
    <div class="plans">
        <div class="content">
            <div class="center mb-medium">
                <h2 class="heading-2">Select your plans</h2>
                <h3 class="heading-3 heading-3--dark">Find the plan that’s right for you. Mark your listing as an official.</h3>
            </div>
            <div class="plans__header">
                <h2 class="heading-2">Choose a package</h2>
                <button class="btn">Listing Details</button>
            </div>
            <!-- Pricing Cards -->
            <pricing-cards></pricing-cards>
        </div>
    </div>
</template>
<script>
import PricingCards from './PricingCards'
export default {
  components: {
    'pricing-cards': PricingCards
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

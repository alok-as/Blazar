<template>
    <div class="pricing">
        <app-navbar></app-navbar>
        <pricing-header :page="page"></pricing-header>
        <main>
            <pricing-plans></pricing-plans>
            <pricing-message></pricing-message>
            <pricing-join-us></pricing-join-us>
        </main>
    </div>
</template>
<script>
import PricingHeader from '../components/Shared/Pages/PagesHeader'
import PricingPlans from '../components/Pricing/PricingPlans'
import PricingMessage from '../components/Pricing/PricingMessage'
import PricingJoinUs from '../components/Shared/Pages/Joinus'
export default {
  components: {
    'pricing-header': PricingHeader,
    'pricing-plans': PricingPlans,
    'pricing-message': PricingMessage,
    'pricing-join-us': PricingJoinUs
  },
  data () {
    return {
      page: {
        name: 'Post a Listing',
        image: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/page_title_bg_typography.jpg'

      }
    }
  }
}
</script>
<style lang="scss" scoped>
.navigation{
    position: static;
}
</style>

<template>
    <section class="explore">
        <div class="content explore__content">
            <img class="explore__logo" src="../../assets/home-explore-logo.png" alt="Mountains Logo">
            <h2 class="explore__title">Hello Easter Day</h2>
            <p class="explore__paragraph">Keep calm and get a special discount for all oders over $50<br> from The Mountains Coffee. Hurry up! <span>Only 3 days left.</span></p>
            <callToAction :text="'Join Us'" class="mt-medium"></callToAction>
        </div>
    </section>
</template>

<script>
import callToAction from '../UI/buttons/button'

export default {
  components: {
    callToAction
  }
}
</script>

<style lang="scss" scoped>
  @import "../../sass/components/home/_explore.scss";
</style>

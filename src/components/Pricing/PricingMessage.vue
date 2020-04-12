<template>
    <section class="message">
        <div class="content">
            <div class="message__wrapper">
                <div class="message__photo">
                    <img class="message__image" src="../../assets/pricing-2.jpg" alt="Add Listing">
                </div>
                <div class="message__content">
                    <h2 class="heading-2 mb-vsmall">Add your listing</h2>
                    <p class="paragraph mb-small">They sat on the Terrace and many of the fishermen made fun of the old man and he was not angry. Others, of the older fisher men, looked at him and were sad. But they did not show it and they spoke politely about the current and the depths they had drifted their lines.</p>
                    <callToAction :text="'Learn More'"></callToAction>
                </div>
            </div>
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
  @import "../../sass/components/pricing/_message.scss";
</style>

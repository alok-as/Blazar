<template>
    <div class="message">
        <div class="content">
            <div class="message__wrapper">
                <div class="message__photo">
                    <img class="message__image" src="../../assets/about-3.jpg" alt="About Photo">
                </div>
                <div class="message__content">
                    <h2 class="heading-2">How we work</h2>
                    <p class="paragraph">They sat on the Terrace and many of the fishermen made fun of the old man and he was not angry. Others, of the older fisher men, looked at him and were sad. <span>But they did not show it</span> and they spoke politely about the current and the depths they had drifted their lines.</p>
                    <p class="paragraph">Those who had caught sharks had taken them to the shark factory on the other side of the cove where they were hoisted on a block and tackle, their livers removed, their fins cut off.</p>
                    <callToAction :text="'Learn More'"></callToAction>
                </div>
            </div>
        </div>
    </div>
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
  @import "../../sass/components/about/_message.scss";
</style>

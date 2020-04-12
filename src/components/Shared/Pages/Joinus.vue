<template>
    <section class="join-us">
        <div class="content">
            <div class="join-us__text">
                <h2 class="heading-2">Join our community</h2>
                <p class="paragraph">Grow your marketing and be happy with your business</p>
            </div>
            <callToAction :text="'Join Us'"></callToAction>
        </div>
    </section>
</template>

<script>
import callToAction from '../../UI/buttons/button'

export default {
  components: {
    callToAction
  }
}
</script>

<style lang="scss" scoped>
.join-us{
    background-image: url('../../../assets/home-join-us.jpg');
}

.content{
    padding-top: 6rem;
    padding-bottom: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

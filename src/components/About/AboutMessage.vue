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
                    <button class="btn">
                        Learn More
                        <svg>
                            <use xlink:href="../../sass/sprites.svg#icon-chevreon-small-right"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.message{
    &__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(35rem,1fr));
        grid-gap: 5rem;
    }

    &__image{
        width: 100%;
    }

    .paragraph{
        margin-bottom: 4rem;
        span{
            color: $color-blue-light;
        }
    }
}
.content{
    padding-top: 10rem;
    padding-bottom: 10rem;
}
</style>

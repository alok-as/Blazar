<template>
    <div class="explore">
        <div class="content explore__content">
            <img class="explore__logo" src="../../assets/home-explore-logo.png" alt="Mountains Logo">
            <h2 class="explore__title">Hello Easter Day</h2>
            <p class="explore__paragraph">Keep calm and get a special discount for all oders over $50<br> from The Mountains Coffee. Hurry up! <span>Only 3 days left.</span></p>
            <button class="btn mt-medium">
                Explore
                <svg>
                    <use xlink:href="../../sass/sprites.svg#icon-chevron-small-right"></use>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.explore{
    background-image: url('../../assets/home-explore.jpg');
    background-position: center;
    background-size: cover;
    height: 80vh;

    &__content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $color-white;
    }

    &__logo{
        height: 10rem;
        margin: 3rem 0;
    }

    &__title{
        font-size: 7.2rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    &__paragraph{
        font-size: 1.8rem;
        span{
            color: #fbaf2a;
            font-weight: 600;
        }
    }
}
</style>

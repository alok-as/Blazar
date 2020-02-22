<template>
    <div class="works">
        <div class="content works__content">
            <h2 class="heading-2 center">How it works</h2>
            <h3 class="heading-3 center">See why ListingEasy is one of the best friends for exploring the city</h3>
            <div class="works__steps center mt-medium">
                <div class="works__step">
                    <img class="works__img" src="../../assets/works-icon.png" alt="Step 1">
                    <h4 class="heading-4 heading-4--dark">Discover greates places</h4>
                    <p class="paragraph">Search and Find what you are looking for. Best spots are here for you.</p>
                </div>
                <div class="works__step">
                    <img class="works__img" src="../../assets/works-icon.png" alt="Step 1">
                    <h4 class="heading-4 heading-4--dark">Discover greates places
                        <p class="paragraph">Search and Find what you are looking for. Best spots are here for you.</p>
                    </h4>
                </div>
                <div class="works__step">
                    <img class="works__img" src="../../assets/works-icon.png" alt="Step 1">
                    <h4 class="heading-4 heading-4--dark">Discover greates places
                        <p class="paragraph">Search and Find what you are looking for. Best spots are here for you.</p>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.works{
    background-color: white;
    &__content{
        padding: 10rem 0;
    }
    &__steps{
        display: grid;
        grid-template-columns: repeat(auto-fit,36rem);
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

.heading-4{
    margin-bottom: 1rem;
}
</style>

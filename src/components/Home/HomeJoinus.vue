<template>
    <div class="join-us">
        <div class="content">
            <div class="join-us__text">
                <h2 class="heading-2">Join our community</h2>
                <p class="paragraph">Grow your marketing and be happy with your business</p>
            </div>
            <button class="btn">
                Sign Up
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
.join-us{
    margin-top: 5rem;
    background-image: url('../../assets/home-join-us.jpg');
}

.content{
    padding-top: 6rem;
    padding-bottom: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

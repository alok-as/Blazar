<template>
    <div class="featured">
        <div class="content featured__content">
            <div class="center mb-medium">
                <h2 class="heading-2 center">Featured Categories</h2>
                <h3 class="heading-3 heading-3--dark center">Discover New York’s best things to do, restaurants, theatre, nightlife and more</h3>
            </div>
            <div class="featured__gallery">
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-1.jpg" alt="Featured 1">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Hotel &amp; Hostel</h4>
                        <p class="featured__location featured__location--1">4 Locations</p>
                    </div>
                </div>
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-2.jpg" alt="Featured 2">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Food &amp; Drink</h4>
                        <p class="featured__location featured__location--2">6 Locations</p>
                    </div>
                </div>
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-3.jpg" alt="Featured 3">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Shop &amp; Store</h4>
                        <p class="featured__location featured__location--3">2 Locations</p>
                    </div>
                </div>
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-4.jpg" alt="Featured 4">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Entertainment</h4>
                        <p class="featured__location featured__location--4">1 Locations</p>
                    </div>
                </div>
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-5.jpg" alt="Featured 5">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Parking</h4>
                        <p class="featured__location featured__location--5">1 Locations</p>
                    </div>
                </div>
                <div class="featured__item">
                    <img class="featured__img" src="../../assets/featured-6.jpg" alt="Featured 6">
                    <div class="featured__overlay">
                        <h4 class="featured__title">Outdoors</h4>
                        <p class="featured__location featured__location--6">2 Locations</p>
                    </div>
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
.featured{
    background-color: white;
    &__content{
        padding: 12rem 0;
    }
    &__gallery{
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-rows: repeat(2,27rem);
        grid-gap: 3rem;
    }

    &__item{
        position: relative;
        border-radius: 10px;
        cursor: pointer;
    }
    &__img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    &__overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.5);
        color: $color-white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all .3s;
    }

    &__title{
        font-size: 2.4rem;
        font-weight:700;
        text-transform: uppercase;
        transition: all .3s;
        margin-bottom: .6rem;

    }

    &__location{
        font-size: 1.4rem;
        font-weight: 500;
        padding: .5rem 2rem;
        border-radius: 100px;
        transition: all .3s;
        &--1{
            background-color: #28b8dc;
        }
        &--2{
            background-color: #fd4851;
        }
        &--3{
            background-color: #cf4dfa;
        }
        &--4{
            background-color: #5c79f4;
        }
        &--5{
            background-color: #3ed376;
        }
        &--6{
            background-color: #fbaf2a;
        }
    }

    //Hover Effect
    &__item:hover &__overlay{
        background-color: rgba($color: #000000, $alpha: 0.65)
    }
    &__item:hover &__title{
        transform: translateY(-.8rem);
    }
    &__item:hover &__location{
        transform: translateY(-2px);
    }
}
</style>

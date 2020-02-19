<template>
    <div class="featured center">
        <h2 class="heading-2">Featured categories</h2>
        <h3 class="heading-3 heading-3--dark">Discover New York’s best things to do, restaurants, theatre, nightlife and more</h3>
        <div class="featured__list mt-medium">
            <div class="featured__item featured__item--1">
                <img src="../../assets/featured-1.jpg" alt="Featured 1" class="featured__img">
                <div class="featured__content">
                    <h4 class="featured__label">Hotel &amp; Hostel</h4>
                    <p class="featured__location featured__location--1">4 Locations</p>
                </div>
            </div>
            <div class="featured__item featured__item--2">
                <img src="../../assets/featured-2.jpg" alt="Featured 1" class="featured__img">
                <div class="featured__content">
                    <h4 class="featured__label">Food &amp; Drink</h4>
                    <p class="featured__location featured__location--2">6 Locations</p>
                </div>
            </div>
            <div class="featured__item featured__item--3">
                <img src="../../assets/featured-3.jpg" alt="Featured 1" class="featured__img">
                <div class="featured__content">
                    <h4 class="featured__label">Shop &amp; Store</h4>
                    <p class="featured__location featured__location--3">2 Locations</p>
                </div>
            </div>
            <div class="featured__item featured__item--4">
                <img src="../../assets/featured-4.jpg" alt="Featured 1" class="featured__img">
                <div class="featured__content">
                    <h4 class="featured__label">Entertainment</h4>
                    <p class="featured__location featured__location--4">1 Location</p>
                </div>
            </div>
            <div class="featured__item featured__item--5">
                <img src="../../assets/featured-5.jpg" alt="Featured 1" class="featured__img">
                <div class="featured__content">
                    <h4 class="featured__label">Parking</h4>
                    <p class="featured__location featured__location--5">1 Location</p>
                </div>
            </div>
            <div class="featured__item featured__item--6">
                <img src="../../assets/featured-6.jpg" alt="Featured 1" class="featured__img">
                <div class="featured__content">
                    <h4 class="featured__label">Outdoor</h4>
                    <p class="featured__location featured__location--6">2 Locations</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.featured{
    margin: 15rem 0 8rem 0;
    grid-column: col-start 1 / col-end 8;

    &__list{
        display: grid;
        // grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
        grid-template-columns: repeat(4,minmax(25rem,1fr));
        grid-template-rows: repeat(2,25rem);
        grid-gap: 3rem;
    }
    &__item{
        position: relative;
        cursor: pointer;
        &--1{
            grid-column: 1 / 3;
        }
        &--2{
            grid-column: 3/4;
        }

        &--3{
            grid-column: 4/5;
        }

        &--4{
            grid-column: 1/2;
        }

        &--5{
            grid-column: 2/3;
        }

        &--6{
            grid-column: 3/5;
        }
    }

    &__item:hover &__content{
        background-color: rgba(0,0,0,0.65);
    }

    &__item:hover &__label{
        transform: translateY(-5px);
    }

    &__item:hover &__location{
        transform: translateY(-2px);
    }

    &__img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 5px;
    }

    &__content{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $color-white;
        background-color: rgba(0,0,0,0.5);
        border-radius: 5px;
        transition: all .3s;
    }

    &__label{
        text-transform: uppercase;
        font-size: 2.4rem;
        transition: all .2s;
    }

    &__location{
        font-size: 1.4rem;
        padding: 0.3rem 2rem;
        border-radius: 100px;
        margin-top: .8rem;
        transition: all .2s;
        &--1{
            background-color: $color-blue-light;
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
}
</style>

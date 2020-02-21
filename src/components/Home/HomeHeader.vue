<template>
    <header class="header">
        <div class="content">
            <!-- Header Navigation -->
            <nav class="nav">
                <div class="nav__logo">Listing <sup>easy</sup></div>
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#" class="nav__link">Home</a>
                        <ul class="dropdown">
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Third Fourth</a></li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Explore</a>
                        <ul class="dropdown">
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Third Fourth</a></li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Pages</a>
                        <ul class="dropdown">
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Third Fourth</a></li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Tips and Articles</a>
                        <ul class="dropdown">
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">First Second</a></li>
                            <li class="dropdown__item"><a href="#" class="dropdown__link">Third Fourth</a></li>
                        </ul>
                    </li>
                </ul>
                <a href="#" @click="openLogin" class="nav__signup">Sign Up / Register</a>
            </nav>
            <!-- Header Content -->
            <div class="header__content">
                <h1 class="heading-1">Find the best place to be</h1>
                <h3 class="heading-3 heading-3--light header__heading-3">ListingEasy is the hassle-free way of discovering the city</h3>
                <form class="form">
                    <input type="text" list="category" class="form__control" placeholder="What are you looking for?">
                    <datalist id="category">
                        <option value="Beauty">Beauty</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Finances">Finances</option>
                        <option value="Health">Health</option>
                        <option value="Plant">Plant</option>
                    </datalist>

                    <input type="text" list="location" class="form__control" placeholder="Any Category">
                    <datalist id="location">
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                    </datalist>
                    <button class="btn" @click="searchResults">
                        Search
                        <svg>
                            <use xlink:href="../../sass/sprites.svg#icon-chevron-small-right"></use>
                        </svg>
                    </button>
                </form>
                <div class="header__tags">
                    <p>Popular:</p>
                    <p>Food &amp; Drink</p>
                    <p>Hotel &amp; Hostel</p>
                    <p>Outdoor</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    searchResults: function () {
      this.$router.push({ name: 'Result' })
    },
    ...mapActions(['openLogin'])
  }
}
</script>

<style lang="scss" scoped>
.header{
    height: 90vh;
    background-image: url("../../assets/header-back.jpg");
    background-position: center;
    background-size: cover;

    &__content{
        text-align: center;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    &__heading-3{
        margin-top: -1rem;
    }

    &__tags{
        width: 50%;
        margin: 1.2rem auto;
        color: $color-white;
        font-size: 1.4rem;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(8rem,1fr));
        justify-items: center;
        grid-row-gap: 1rem;

        p{
            cursor: auto;
            &:hover{
                border-bottom: 1px solid white;
            }
        }

    }
}

.nav{
    padding: 2.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo{
        font-weight: 600;
        font-size: 2.3rem;
        text-transform: uppercase;
        color: $color-white;
        display: flex;
        align-items: center;

        sup{
            font-weight: 300;
            text-transform: uppercase;
            font-size: 1.3rem;
            margin-top: -1rem;
            margin-left: .5rem;
        }

        &::before{
            content: "";
            display: inline-block;
            width: 3.5rem;
            height: 3.5rem;
            margin-right: .7rem;
            background-color: $color-blue-light;
                    -webkit-mask-image: url(../../assets/SVG/location.svg);
                    mask-image: url(../../assets/SVG/location.svg);
                    -webkit-mask-size: cover;
                    mask-size: cover;
        }
    }

    &__list{
        list-style: none;
    }
    &__item{
        display: inline-block;
        position: relative;
        cursor: pointer;

        &:not(:last-child){
            margin-right: 4rem;
        }

        &::after{
            content: "";
            display: inline-block;
            width: 2rem;
            height: 2rem;
            margin-left: .7rem;
            vertical-align: middle;
            background-color: $color-blue-light;
                    -webkit-mask-image: url(../../assets/SVG/chevron-small-down.svg);
                    mask-image: url(../../assets/SVG/chevron-small-down.svg);
                    -webkit-mask-size: cover;
                    mask-size: cover;
        }
    }

    &__item:hover &__link{
        color: $color-blue-light;
    }

    &__item:hover .dropdown{
        top: 5rem;
        opacity: 1;
        pointer-events: all;
    }

    &__link{
        &:link,
        &:visited{
            text-decoration: none;
            color: $color-white;
            transition: all .3s;
        }
    }

    &__signup{
        display: flex;
        align-items: center;
        &:link,
        &:visited{
            text-decoration: none;
            color: $color-white;
        }

        &::before{
            content: "";
            display: inline-block;
            width: 2rem;
            height: 2rem;
            margin-right: 1rem;
            vertical-align: middle;
            background-color: $color-blue-light;
                    -webkit-mask-image: url(../../assets/SVG/add-user.svg);
                    mask-image: url(../../assets/SVG/add-user.svg);
                    -webkit-mask-size: cover;
                    mask-size: cover;
        }
    }
}

.form{
    background-color: $color-white;
    border-radius: 100px;
    padding: .3rem;
    padding-left: 3rem;
    max-width: 85%;
    margin: 3.5rem auto 0 auto;
    display: grid;
    grid-template-columns: 3fr 2fr 2fr;
    grid-gap: 1.5rem;

    &__control{
        background:none;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 1.6rem;
        &::-webkit-calendar-picker-indicator{
            display: none;
        }

        &::placeholder{
            color: #444;
        }
    }
}

</style>

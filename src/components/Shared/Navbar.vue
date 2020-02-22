<template>
    <div class="navigation">
        <div class="content">
            <nav class="nav">
                <div class="nav__logo" @click="toHome">Listing <sup>easy</sup></div>
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
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    toHome: function () {
      this.$router.push({ path: '/' })
    },
    ...mapActions(['openLogin'])
  }
}
</script>

<style lang="scss" scoped>
.navigation{
    border-bottom:1px solid $color-blue-light;
    box-shadow: 0 .5rem .5rem rgba($color: #000000, $alpha: 0.04);
    background: white;
    width: 100%;
    position: fixed;
    z-index: 1000;
    transition: all .3s ease-in;
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
        color: $color-blue-dark;
        display: flex;
        align-items: center;
        cursor: pointer;

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
    &__item:hover .dropdown::before{
        box-shadow: 2rem 2rem 3rem rgba($color: #000000, $alpha: 0.04);
    }

    &__link{
        &:link,
        &:visited{
            text-decoration: none;
            color: $color-blue-dark;
            transition: all .3s;
        }
    }

    &__signup{
        display: flex;
        align-items: center;
        &:link,
        &:visited{
            text-decoration: none;
            color: $color-blue-dark;
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
</style>

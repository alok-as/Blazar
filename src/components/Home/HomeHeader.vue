<template>
    <header class="header">
        <div class="content">
            <!-- Header Navigation -->
            <nav class="nav">
                <div class="nav__logo" @click="toHome">Listing <sup>easy</sup></div>
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#" class="nav__link">Explore</a>
                        <ul class="dropdown">
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="">All Listings</router-link>
                            </li>
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="">Category 1</router-link>
                            </li>
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="">Category 2</router-link>
                            </li>
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="">Category 3</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Pages</a>
                        <ul class="dropdown">
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="/about">About Us</router-link>
                            </li>
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="/how-it-works">How it Works</router-link>
                            </li>
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="/pricing">Pricing</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link">Tips and Articles</a>
                        <ul class="dropdown">
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="">All Listings</router-link>
                            </li>
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="">Category 1</router-link>
                            </li>
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="">Category 2</router-link>
                            </li>
                            <li class="dropdown__item">
                                <router-link class="dropdown__link" to="">Category 3</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <a href="#" @click="openLogin" class="nav__signup">Sign Up / Register</a>
            </nav>
            <!-- Header Content -->
            <div class="header__content">
                <h1 class="heading-1">Find the best place to be</h1>
                <h3 class="heading-3 heading-3--light header__heading-3">ListingEasy is the hassle-free way of discovering the city</h3>
                <!-- Header search box -->
                <header-search></header-search>
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
import SearchBox from './HomeSearch.Box'
export default {
  components: {
    'header-search': SearchBox
  },
  methods: {
    ...mapActions(['openLogin']),
    toHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "../../sass/components/home/_header.scss";
</style>

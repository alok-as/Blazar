<template>
    <div class="navigation">
        <div class="content">
            <nav class="nav">
                <div class="nav__logo" @click="toHome">Listing <sup>easy</sup></div>
                <ul class="nav__list">
                    <nav-item v-for="(item, index) in navItems" :key="index" :item="item"></nav-item>
                </ul>
                <a href="#" @click.prevent="openLogin" class="nav__signup">Sign Up / Register</a>
            </nav>
        </div>
    </div>
</template>

<script>
import NavItem from '../UI/hover-dropdown-link'
export default {
    components: {
        'nav-item': NavItem
    },
    methods: {
        toHome: function () {
        this.$router.push({ path: '/' })
        },
        openLogin () {
            this.$store.commit('openLogin')
        }
    },
    data () {
        return {
            navItems: [
                {
                    linkName: 'Explore',
                    dropLinks: [
                        { name: 'All Listings' , path: ''},
                        { name: 'Category 1' , path: ''},
                        { name: 'Category 2' , path: ''},
                        { name: 'Category 3' , path: ''}
                    ]
                },
                {
                    linkName: 'Pages',
                    dropLinks: [
                        { name: 'About Us' , path: '/about'},
                        { name: 'How it Works' , path: '/how-it-works'},
                        { name: 'Pricing' , path: '/pricing'}
                    ]
                },
                {
                    linkName: 'Tips and Articles',
                    dropLinks: [
                        { name: 'All Listings' , path: ''},
                        { name: 'Category 1' , path: ''},
                        { name: 'Category 2' , path: ''},
                        { name: 'Category 3' , path: ''}
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../sass/components/UI/_navigation.scss';
</style>

<template>
    <li class="nav__item">
        <a href="#" class="nav__link">{{item.linkName}}</a>
        <ul class="dropdown">
            <li class="dropdown__item" v-for="(dropLink,index) in item.dropLinks" :key="index">
                <router-link class="dropdown__link" :to="dropLink.path">{{dropLink.name}}</router-link>
            </li>
        </ul>
    </li>
</template>
<script>
export default {
  props: ['item']
}
</script>
<style lang="scss" scoped>
.nav {
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
}

.dropdown {
    display: block;
    position: absolute;
    top: 8rem;
    right: -1.6rem;
    width: 22rem;
    padding: 1.5rem 3rem;
    list-style: none;
    background-color: $color-white;
    border: 1px solid rgba(232, 232, 232, 0.8);
    border-top-color: rgba(232, 232, 232, 0.5);
    border-left-color: rgba(232, 232, 232, 0.5);
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transition: all .3s;
    z-index: 10;

    &__item{
        &:not(:last-child){
            margin-bottom: .5rem;
        }
    }

    &__link{
        text-decoration: none;
        color: #444;
        transition: all .1s;
        display: block;

        &:hover{
            color: $color-blue-light;
        }
    }

    &::before{
        content: "";
        position: absolute;
        top: -1rem;
        right: 1.6rem;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #ffffff;
    }

    &::after{
        position: absolute;
        content: "";
        width: 100%;
        height: 4rem;
        top: -3rem;
    }
}
</style>

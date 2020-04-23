<template>
    <div class="article">
        <img :src="content.img" alt="Article 1" class="article__img">
        <div class="article__content">
            <h5 class="article__category">{{ content.category }}</h5>
            <h4 class="article__heading">{{ content.title }}</h4>
            <div class="article__footer mt-vsmall">
                <div class="article__date">{{ content.date }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['content']
}
</script>
<style lang="scss" scoped>
.article{
    background-color: $color-white;
    &__img {
        cursor: pointer;
        width: 100%;
        border-radius: 5px;
    }

    &__content{
        padding: .6rem 0;
    }
    &__category {
        color: $color-orange;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 1.2rem;
        font-weight: 600;
    }

    &__heading {
        font-size: 2.2rem;
        font-weight: 500;
        line-height: 1.4;
        color: $color-blue-dark;
        cursor: pointer;
        transition: .2s all ease;

        &:hover {
            color: $color-blue-light;
        }
    }

    &__date{
        color: $color-grey-dark;
        font-size: 1.4rem;
    }
}
</style>

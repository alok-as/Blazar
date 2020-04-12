<template>
    <div class="card">
        <img class="card__img" :src="result.img" alt="Card 1">
        <div class="card__content">
            <h4 class="heading-4 card__heading">{{result.title}}</h4>
            <p class="card__text">{{result.tagline}}</p>
            <div class="card__ratings">
                <svg class="card__icon card__icon--star" v-for="n in result.stars" :key="n">
                    <use xlink:href="../../../sass/sprites.svg#icon-star-full"></use>
                </svg>
            </div>
            <div class="card__footer mt-small">
                <span class="card__location">
                    <svg class="card__icon card__icon--location">
                        <use xlink:href="../../../sass/sprites.svg#icon-location"></use>
                    </svg>
                    {{result.location}}
                </span>
                <span class="card__like">
                    <span class="card__like--text">Save</span>
                    <svg class="card__icon card__icon--heart">
                        <use xlink:href="../../../sass/sprites.svg#icon-heart-outlined"></use>
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['result']
}
</script>

<style lang="scss" scoped>
.card{
    background-color: white;
    border-radius: 5px;
    transition: all .4s;
    &:hover{
        box-shadow: 3px 5px 5px rgba($color: #000000, $alpha: 0.3);
    }

    &:hover &__icon--heart{
        fill: orangered;
    }   
    &:hover &__like{
        color: orangered;
        border: 1px solid orangered;
    }

    &__img{
        width: 100%;
        grid-row: 1/2;
        border-radius: 5px 5px 0 0;
    }

    &__content{
        padding: 1rem 1.5rem;
    }

    &__text{
        color: $color-dark;
        font-size: 1.4rem;
    }

    &__icon{
        width: 2rem;
        height: 2rem;
        vertical-align: middle;
        transition: all .4s;
        &--star{
            fill: #FFDF00;
            width: 1.6rem;
            height: 1.6rem;
            &:not(:last-child) {
                margin-right: .3rem;
            }
        }
        &--heart{
            fill: $color-dark;
        }
        &--location{
            fill: $color-blue-light;
            vertical-align: top;
        }
    }

    &__footer{
        color: $color-dark;
        font-size: 1.4rem;
        grid-column: 1 / -1;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    &__like{
        border: 1px solid $color-dark;
        border-radius: 100px;
        padding: .2rem 2rem;
        transition: all .4s;
        align-self: baseline;

        &--text{
            margin-right: 5px;
        }
    }
}
</style>

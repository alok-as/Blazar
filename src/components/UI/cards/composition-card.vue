<template>
     <div class="composition">
        <div class="composition__photo">
            <img class="composition__img" :src="step.image" alt="Photo 1">
        </div>
        <div class="composition__content">
            <div class="composition__card">
                <h3 class="composition__title">{{step.title}}</h3>
                <p class="composition__paragraph">{{step.content}}</p>
                <button class="composition__btn">
                    Learn more
                    <svg>
                        <use xlink:href="../../../sass/sprites.svg#icon-chevron-small-right"></use>
                    </svg>
                </button>
                <div class="composition__number">{{step.id}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['step']
}
</script>
<style lang="scss" scoped>
.composition{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(38rem,1fr));
    &:not(:last-child){
        margin-bottom: 8rem;
    }

    &:hover &__number{
        transform: scale(1.1);
    }

    &__img{
        width: 100%;
        display: block;
        border-radius: 3px;
    }
    &__content{
        position: relative;
        // order: 1;
    }

    &__card{
        width: 90%;
        height: 80%;
        position: absolute;
        top: 50%;
        left: -5rem;
        z-index: 20;
        transform: translateY(-50%);
        background-color: white;
        border-radius: 5px;
        box-shadow: 2px 3px 5px rgba($color: #000000, $alpha: 0.3);
        padding: 9.2rem 6.2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__title{
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: 1px;
        color: $color-blue-dark;
        margin-bottom: 2.5rem;
        align-self: flex-start;
    }

    &__paragraph{
        font-size: 1.6rem;
        color: $color-grey-dark;
    }

    &__btn{
        align-self: flex-start;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: none;
        border: none;
        outline: none;
        color: $color-blue-light;
        font-size: 1.7rem;
        font-family: inherit;
        font-weight: 500;
        margin-top: 2rem;
        cursor: pointer;
        transition: all .3s;

        svg {
            width: 2rem;
            height: 2rem;
            vertical-align: baseline;
            fill: currentColor;
            transition: all .3s;
        }

        &:hover{
            color: $color-grey-dark;
        }

        &:hover svg{
            margin-left: .4rem;
        }
    }

    &__number{
        position: absolute;
        left: -3rem;
        font-size: 1.8rem;
        font-weight: 600;
        color: $color-white;
        padding: 1.4rem 2.6rem;
        border-radius: 50%;
        background-color: #3ed376;
        transition: all .4s;
    }

}
    
</style>
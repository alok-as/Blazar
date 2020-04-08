<template>
    <button class="cta">
        {{ text }}
        <svg>
            <use xlink:href="../../sass/sprites.svg#icon-chevron-small-right"></use>
        </svg>
    </button>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss" scoped>
.cta {
    background-color: $color-blue-light;
    color: $color-white;
    border: 1px solid $color-blue-light;
    outline: none;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: $primary-font;
    padding: 1.5rem 3rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;

    svg{
        display: inline-block;
        width: 2.5rem;
        height:2.5rem;
        margin-left: 0.5rem;
        fill: $color-white;
        transition: all .3s;

    }

    &:hover{
        background-color: white;
        color: $color-blue-light;

        svg {
            fill: $color-blue-light;
        }
    }

}

</style>

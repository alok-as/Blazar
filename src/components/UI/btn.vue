<template>
    <button class="button">{{ text }}</button>
</template>
<script>
export default {
  props: ['text']
}
</script>
<style lang="scss" scoped>
.button {
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
    padding: 1.5rem 5rem;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        background-color: white;
        color: $color-blue-light;
    }
}

</style>

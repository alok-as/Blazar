<template>
    <div class="custom-select" tabindex="1" @blur="closeMenu">
        <div class="custom-select__selected" @click="toggleMenu">
            {{ category }}
            <svg class="custom-select__arrow" :class="{turn:arrow}">
                <use xlink:href="../../../sass/sprites.svg#icon-chevron-small-down"></use>
            </svg>
        </div>
        <transition>
            <div class="custom-select__items" v-if="open">
                <div class="custom-select__search">
                    <input ref="filter" class="custom-select__control" type="text" v-model="filterSearch" placeholder="All Categories">
                </div>
                <div class="custom-select__item" v-for="(option, index) in filteredOptions" :key="index" @click="setCategory(option); closeMenu()">{{ option }}</div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
  data () {
    return {
      open: false,
      arrow: false,
      filterSearch: ''
    }
  },
  props: {
    options: [Array],
    type: [String]
  },
  computed: {
    category () {
      return this.$store.getters.searchCategory
    },
    filteredOptions () {
      return this.options.filter((element) => {
        return element.match(this.filterSearch)
      })
    }
  },
  methods: {
    setCategory (value) {
      this.$store.dispatch('setCategory', value)
    },
    closeMenu () {
      this.open = false
      this.arrow = false
    },
    toggleMenu () {
      this.open = !this.open
      this.close = !this.close
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-select{
    position: relative;
    outline: none;
    &__selected{
        padding: 1.2rem 2.5rem;
        border: 1px solid $color-grey-light;
        font-size: 1.5rem;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        outline: none;
    }

    &__arrow{
        width: 2.25rem;
        height: 2.25rem;
        fill: $color-grey-dark;
    }

    &__items{
        position: absolute;
        width: 100%;
        top: 6rem;
        padding: 1.2rem 0;
        background-color: white;
        z-index: 20;
        border-radius: 5px;
        box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.6);
    }

    &__search{
        width: 90%;
        margin: 0 auto 1rem auto;
    }
    &__control{
        font-size: 1.5rem;
        width: 100%;
        padding: 1rem;
        font-family: $primary-font;
        background: none;
        border: 1px solid $color-grey-light;
        border-radius: 5px;
    }

    &__item{
        padding: 0 2rem;
        font-size: 1.6rem;
        color: $color-blue-dark;
        &:not(:last-child){
            margin-bottom: 1.2rem;
        }
        cursor: pointer;
        &:hover{
            color: $color-white;
            background-color: $color-blue-light;
        }
    }

}

.turn {
    transform: rotateX(180deg);
}

</style>

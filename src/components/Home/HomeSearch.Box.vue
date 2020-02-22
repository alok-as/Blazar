<template>
    <form class="form">
        <input type="text" list="category" class="form__control" v-model="searchCategory" placeholder="What are you looking for?">
        <datalist id="category">
            <option value="Beauty">Beauty</option>
            <option value="Fitness">Fitness</option>
            <option value="Finances">Finances</option>
            <option value="Health">Health</option>
            <option value="Plant">Plant</option>
        </datalist>

        <input type="text" list="location" class="form__control" v-model="searchLocation" placeholder="Location">
        <datalist id="location">
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
        </datalist>
        <button class="btn" @click="searchResults">
            Search
            <svg>
                <use xlink:href="../../sass/sprites.svg#icon-chevron-small-right"></use>
            </svg>
        </button>
    </form>
</template>
<script>
export default {
  methods: {
    searchResults: function () {
      this.$router.push({ name: 'Result', query: { searchCategory: this.searchCategory, searchLocation: this.searchLocation } })
    }
  },
  computed: {
    searchCategory: {
      get () {
        return this.$store.getters.searchCategory
      },
      set (value) {
        this.$store.dispatch('setCategory', value)
      }
    },
    searchLocation: {
      get () {
        return this.$store.getters.searchLocation
      },
      set (value) {
        this.$store.dispatch('setLocation', value)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.form{
    background-color: $color-white;
    border-radius: 100px;
    padding: .3rem;
    padding-left: 3rem;
    max-width: 85%;
    margin: 3.5rem auto 0 auto;
    display: grid;
    grid-template-columns: 3fr 2fr 2fr;
    grid-gap: 1.5rem;

    &__control{
        background:none;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 1.6rem;
        &::-webkit-calendar-picker-indicator{
            display: none;
        }

        &::placeholder{
            color: #444;
        }
    }
}
</style>

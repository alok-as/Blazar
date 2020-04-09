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
        <button class="btn" @click.prevent="searchResults">
            Search
            <svg>
                <use xlink:href="../../sass/sprites.svg#icon-chevron-small-right"></use>
            </svg>
        </button>
        <!-- <callToAction @click.native.prevent="searchResults" :text="'Learn More'"></callToAction> -->
    </form>
</template>
<script>
// import callToAction from '../UI/button'

export default {
  // components: {
  //   callToAction
  // },
  methods: {
    searchResults () {
      this.$router.replace({
        name: 'Result',
        query: {
          searchCategory: this.searchCategory,
          searchLocation: this.searchLocation
        }
      })
      this.$store.dispatch('fetchResults')
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
  @import "../../sass/components/home/_searchbox.scss";
</style>

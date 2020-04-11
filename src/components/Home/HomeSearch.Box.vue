<template>
    <form class="form">
        <!-- Categories -->
        <input type="text" list="category" class="form__control" v-model="searchCategory" placeholder="What are you looking for?">
        <datalist id="category">
          <option v-for="category in searchCategories" :key="category">{{category}}</option>
        </datalist>

        <!-- Locations -->
        <input type="text" list="location" class="form__control" v-model="searchLocation" placeholder="Location">
        <datalist id="location">
          <option v-for="location in searchLocations" :key="location">{{location}}</option>
        </datalist>

        <button class="btn" @click="searchResults" :disabled="validSearch">
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
    searchResults () {
      this.$router.replace({
        name: 'Result',
        query: {
          searchCategory: this.searchCategory,
          searchLocation: this.searchLocation
        }
      })
      this.$store.dispatch('fetchResults', this.searchCategory)
    }
  },
  computed: {
    searchCategory: {
      get () {
        return this.$store.getters.getCategory
      },
      set (value) {
        this.$store.commit('setCategory', value)
      }
    },
    searchLocation: {
      get () {
        return this.$store.getters.getLocation
      },
      set (value) {
        this.$store.commit('setLocation', value)
      }
    },
    searchCategories () {
      return this.$store.getters.getCategories
    },
    searchLocations () {
      return this.$store.getters.getLocations
    },
    validSearch () {
      let valid = this.$store.getters.validSearch
      return !valid;
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../sass/components/home/_searchbox.scss";
</style>

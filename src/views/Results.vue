<template>
    <div class="results">
        <app-navbar></app-navbar>
        <main>
          <div class="results__list">
            <form class="results__form">
              <custom-select2 :options="searchLocations" :type="'Locations'"></custom-select2>
              <custom-select2 :options="searchCategories" :type="'Categories'"></custom-select2>
            </form>
            <div class="cards mt-medium">
              <result-card v-for="result in allResults" :key="result.id" :result="result"></result-card>
            </div>
          </div>
          <div class="results__map">
            <result-map></result-map>
          </div>
        </main>
    </div>
</template>

<script>
import CustomSelect2 from '../components/Shared/Custom/CustomSelect2'
import ResultCard from '../components/UI/cards/result-card'
import ResultMap from '../components/Results/ResultMap'

export default {
  components: {
    'custom-select2': CustomSelect2,
    'result-card': ResultCard,
    'result-map': ResultMap
  },
  computed: {
    allResults () {
      return this.$store.getters.resultsArr
    },
    searchCategories () {
      return this.$store.getters.getCategories
    },
    searchLocations () {
      return this.$store.getters.getLocations
    }
  },
  created () {
    this.$store.commit('getLocalResults')
  },
  data () {
    return {
      categories: ['Beauty', 'Fitness', 'Finances', 'Health', 'Plants'],
      locations: ['East Village', 'West Village', 'SOuth Village', 'North Village']
    }
  }
}
</script>

<style lang="scss" scoped>
main{
  height: 100%;
  position: relative;
  @include clearfix;
}

.navigation {
  position: static;
  transform: translateY(0);
}

.results{
  &__list{
    width: 55%;
    height: 100%;
    float: left;
    padding:5rem;
  }
  &__map{
    position: absolute;
    width: 45%;
    height: 100%;
    right: 0;
  }

  &__form{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 2rem;
  }
}

.cards{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
  grid-gap: 3rem;
}

</style>

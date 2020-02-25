<template>
    <div class="results">
        <app-navbar></app-navbar>
        <main>
          <div class="results__list">
            <form class="results__form">
              <!-- <custom-select :options="options"></custom-select> -->
              <custom-select2 :options="locations" :type="'Location'"></custom-select2>
              <custom-select2 :options="categories" :type="'Category'"></custom-select2>
            </form>
            <div class="cards mt-medium">
              <result-card v-for="result in results" :key="result.id" :result="result"></result-card>
            </div>
          </div>
          <div class="results__map">
            <result-map></result-map>
          </div>
        </main>
    </div>
</template>

<script>
// import CustomSelect from '../components/Shared/Custom/CustomSelect'
import CustomSelect2 from '../components/Shared/Custom/CustomSelect2'
import ResultCard from '../components/Result/ResultCard'
import ResultMap from '../components/Result/ResultMap'

export default {
  components: {
    // 'app-navbar': Navbar,
    // 'custom-select': CustomSelect,
    'custom-select2': CustomSelect2,
    'result-card': ResultCard,
    'result-map': ResultMap
  },
  computed: {
    searchCategory: {
      get () {
        return this.$store.getters.searchCategory
      }
      // set (value) {
      //   this.$store.dispatch('setCategory', value)
      // }
    },
    searchLocation: {
      get () {
        return this.$store.getters.searchLocation
      }
      // set (value) {
      //   this.$store.dispatch('setLocation', value)
      // }
    }
  },
  data () {
    return {
      results: [
        {
          id: 1,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/honey_coffee-800x600.jpg',
          title: 'Honey Coffe',
          tagline: 'This cafe is small but bustling',
          location: '98 E 7th St, New York'
        },
        {
          id: 2,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/liberty_club-800x600.jpg',
          title: 'Moonlight Hotel',
          tagline: '4 star hotel by the valley in NY',
          location: 'West 14th Street 11'
        },
        {
          id: 3,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/honey_coffee-800x600.jpg',
          title: 'Africa Tasty',
          tagline: 'Wild Savour from Africa',
          location: 'Clay Street 111'
        },
        {
          id: 4,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/liberty_club-800x600.jpg',
          title: '360 Liberty Club',
          tagline: 'Work hard, play hard',
          location: 'East 34th Street 400'
        }
      ],
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

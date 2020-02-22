<template>
    <div class="results">
        <app-navbar></app-navbar>
        <main>
          <div class="results__list">
            <form class="results__form">
              <div class="custom-select">
                <input type="text" class="custom-select__selected" v-model="searchCategory">
                <ul class="custom-select__options">
                  <li class="custom-select__option">East Village</li>
                  <li class="custom-select__option">West Village</li>
                  <li class="custom-select__option">North Village</li>
                  <li class="custom-select__option">South Village</li>
                </ul>
              </div>
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
import Navbar from '../components/Shared/Navbar'
import ResultCard from '../components/Result/ResultCard'
import ResultMap from '../components/Result/ResultMap'

export default {
  components: {
    'app-navbar': Navbar,
    'result-map': ResultMap,
    'result-card': ResultCard
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
      ]
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
    // grid-template-columns: repeat(auto-fit,22rem);
    grid-gap: 2rem;
  }
}

.cards{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
  grid-gap: 3rem;
}

</style>

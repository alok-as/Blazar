<template>
    <div class="results">
        <app-navbar></app-navbar>
        <main>
          <div class="results__list">
            <form class="form">
              <div class="select">
                <div class="select__selected">All Regions</div>
              </div>
              <div class="select">
                <div class="select__selected">Any Category</div>
              </div>
              <div class="select">
                <div class="select__selected">Filter by Tags</div>
              </div>
            </form>
            <div class="cards mt-medium">
              <result-card v-for="result in results" :key="result.id" :result="result"></result-card>
            </div>
          </div>
          <div class="results__map">
            Place for Google Maps
          </div>
        </main>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Navbar from '../components/Shared/Navbar'
import ResultCard from '../components/Result/ResultCard'
import Footer from '../components/Shared/Footer'

export default {
  components: {
    'app-navbar': Navbar,
    'result-card': ResultCard,
    'app-footer': Footer
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orangered;
    color: white;
  }
}

.form{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 2rem;
}

.select{
  &__selected{
    &::after{
      content: "";
      width: 3rem;
      height: 3rem;
      background-color: $color-blue-light;
      -webkit-mask-image: url(../assets/SVG/chevron-small-down.svg);
      mask-image: url(../assets/SVG/chevron-small-down.svg);
      -webkit-mask-size: cover;
      mask-size: cover;
      position: absolute;
      right: 2rem;
    }
  }
}

.cards{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
  grid-gap: 3rem;
}

</style>

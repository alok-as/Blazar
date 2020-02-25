<template>
    <div class="carousal__wrapper">
        <div class="carousal__nav carousal__nav--previous">
            <svg class="carousal__icon">
                <use xlink:href="../../sass/sprites.svg#icon-chevron-small-left"></use>
            </svg>
        </div>
        <div class="carousal__nav carousal__nav--next">
            <svg class="carousal__icon">
                <use xlink:href="../../sass/sprites.svg#icon-chevron-small-right"></use>
            </svg>
        </div>
        <div class="carousal__cards">
            <carousal-card v-for="result in results" :key="result.id" :result="result"></carousal-card>
        </div>
    </div>
</template>
<script>
import CarousalCard from '../Result/ResultCard.vue'
export default {
  components: {
    'carousal-card': CarousalCard
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
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/honey_coffee-800x600.jpg',
          title: 'Africa Tasty',
          tagline: 'Wild Savour from Africa',
          location: 'Clay Street 111'
        },
        {
          id: 5,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/honey_coffee-800x600.jpg',
          title: 'Africa Tasty',
          tagline: 'Wild Savour from Africa',
          location: 'Clay Street 111'
        },
        {
          id: 6,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/liberty_club-800x600.jpg',
          title: 'Moonlight Hotel',
          tagline: '4 star hotel by the valley in NY',
          location: 'West 14th Street 11'
        },
        {
          id: 7,
          img: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/liberty_club-800x600.jpg',
          title: 'Moonlight Hotel',
          tagline: '4 star hotel by the valley in NY',
          location: 'West 14th Street 11'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.carousal {
    &__wrapper{
        position: relative;
    }
    &__nav{
        background-color: $color-white;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all .2s;
        position: absolute;
        top: 30%;
        transform: translateY(-50%);
        z-index: 20;
        box-shadow: 3px 4px 5px rgba($color: #000000, $alpha: 0.6);

        &--previous{
            left: -2rem;
        }
        &--next{
            right: -2rem;
        }
    }

    &__nav:hover{
        background-color: $color-blue-light;
    }
    &__nav:hover &__icon{
        fill: $color-white;
    }

    &__icon{
        width: 2rem;
        height: 2rem;
        fill: $color-grey-dark;
        transition: all .2s;
    }
    &__cards{
        display: flex;
        overflow: hidden;
    }
}

.card {
    &:not(:last-child){
        margin-right: 2rem;
    }
    width:40rem;
}
</style>

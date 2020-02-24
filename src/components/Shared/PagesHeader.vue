<template>
    <header class="page-header" :style="backgroundImage(page.image)">
        <div class="content">
            <h1 class="heading-1 heading-1--bold">{{page.name}}</h1>
            <div class="navigate">
                <router-link class="navigate__link" to="/">Home</router-link>
                <router-link class="navigate__link active" to="/how-it-works">{{page.name}}</router-link>
            </div>
        </div>
    </header>
</template>
<script>
export default {
  props: {
    page: [Object]
  },
  methods: {
    backgroundImage (image) {
      return {
        'background-image': `url(${image})`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-header{
    height: 45vh;
    background-size: cover;
    background-position: center center;
}

.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.navigate {
    &__link{
        color: $color-grey-light;
        text-decoration: none;
        font-size: 1.3rem;
        transition: all .2s;
        &:not(:last-child){
            margin-right: 1.5rem;
        }
        &:hover{
            color: $color-white;
        }
    }
}

.active{
    color: $color-white;
}

</style>

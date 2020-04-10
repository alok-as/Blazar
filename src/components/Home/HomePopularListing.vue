<template>
    <section class="popular">
        <div class="content">
            <section-header :content="content"></section-header>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      content: {
        heading: 'Popular Listings',
        subheading: 'Explore the greates places in the city. You won’t be disappointed.'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../sass/components/home/_popular.scss";
</style>

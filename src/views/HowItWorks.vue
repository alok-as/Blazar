<template>
  <div class="works">
    <app-navbar></app-navbar>
    <works-header :page="page"></works-header>
    <main>
      <works-overview></works-overview>
    </main>
  </div>
</template>

<script>
import WorksHeader from '../components/Shared/Pages/PagesHeader'
import WorksOverview from '../components/Works/WorksOverview'
export default {
  components: {
    'works-header': WorksHeader,
    'works-overview': WorksOverview
  },
  data () {
    return {
      page: {
        name: 'How it Works',
        image: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/page_title_bg_howitworks.jpg'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.navigation{
  position: static;
  transform: translateY(0);
}
</style>

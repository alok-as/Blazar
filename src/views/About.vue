<template>
  <div class="about">
    <app-navbar></app-navbar>
    <page-header :page="page"></page-header>
    <main>
      <about-overview></about-overview>
    </main>
  </div>
</template>
<script>
import PageHeader from '../components/Shared/Pages/PagesHeader'
import Overview from '../components/About/AboutOverview'
export default {
  components: {
    'page-header': PageHeader,
    'about-overview': Overview
  },
  data () {
    return {
      page: {
        name: 'About Us',
        image: 'https://livewp.site/wp/md/listingeasy/wp-content/uploads/sites/4/2017/10/page_title_bg_about.jpg'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.navigation{
  position: static;
}
</style>

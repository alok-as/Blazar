<template>
<div class="about">
    <app-navbar></app-navbar>
    <about-header :page="page"></about-header>
    <main>
      <about-overview></about-overview>
      <about-message></about-message>
    </main>
  </div>
</template>
<script>
import AboutHeader from '../components/Shared/Pages/PagesHeader'
import Overview from '../components/About/AboutOverview'
import Message from '../components/About/AboutMessage'
export default {
  components: {
    'about-header': AboutHeader,
    'about-overview': Overview,
    'about-message': Message
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
  transform: translateY(0);
}
</style>

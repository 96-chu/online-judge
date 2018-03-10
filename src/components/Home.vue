<template>
  <div class="home-content-wrapper">
    <carousel></carousel>
    <loginItem></loginItem>
  </div>
</template>

<script>
  import carousel from './pageCom/carousel.vue'
  import loginItem from './pages/homePage.vue'

  export default {
    components: {
      carousel,
      loginItem
    }
  }
</script>

<style scoped lang="stylus">
  .home-content-wrapper
    height 100%
    width 100%
</style>

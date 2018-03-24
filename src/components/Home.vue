<template>
  <div class="home-content-wrapper">
    <carousel></carousel>
    <loginItem></loginItem>
  </div>
</template>

<script>
  import carousel from './globalCom/carousel.vue'
  import loginItem from './globalCom/userBehavior/logOrReg/logOrReg.vue'

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

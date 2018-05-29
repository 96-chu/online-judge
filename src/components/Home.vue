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
    },
    created () {
    }
  }
</script>

<style scoped lang="stylus">
  .home-content-wrapper
    display block
    width 100%
    height 100%
    min-height 860px
</style>

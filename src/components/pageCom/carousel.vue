<template>
  <el-carousel :interval="5000" arrow="hover" height="100%">
    <el-carousel-item v-for="(item,index) in image" :key="index">
      <img :src="item.src">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
      data () {
        return {
          image: [
            {
              src: require('assets/homePage/jerry.jpg')
            },
            {
              src:require('assets/homePage/metro.jpeg')
            },
            {
              src:require('assets/homePage/jerry.jpg')
            },
            {
              src:require('assets/homePage/metro.jpeg')
            }
          ]
        }
      }
    }
</script>

<style scoped lang="stylus">
  .el-carousel
    height 100%
    width 100%
    z-index -1
    img
      width 100%
      height 100%
      object-fit cover
</style>

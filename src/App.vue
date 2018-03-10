<template>
  <div id="app">
    <topHeader></topHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import topHeader from './components/header/Header.vue'
  export default {
    name: 'App',
    components: {
      topHeader
    }
  }
</script>

<style lang="stylus">
  html,body
    margin 0
    height 100%
  #app
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    height 100%
    min-width 1280px
  a
    text-decoration none
    cursor pointer
    color #000
</style>

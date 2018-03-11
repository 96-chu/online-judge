<template>
  <div id="app">
    <div class="content">
      <topHeader></topHeader>
      <router-view></router-view>
    </div>
    <pageFooter v-if="this.$route.name !== 'home'"></pageFooter>
  </div>
</template>

<script>
  import topHeader from './components/Header/Header.vue'
  import pageFooter from './components/Footer/Footer.vue'

  export default {
    name: 'App',
    components: {
      topHeader,
      pageFooter
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
    min-height 880px
    display flex
    flex-direction column
    justify-content space-between
  a
    text-decoration none
    cursor pointer
    color #000
</style>

<template>
  <div id="app">
    <topHeader></topHeader>
    <router-view></router-view>
    <pageFooter v-if="route"></pageFooter>
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
    },
    computed: {
      route () {
        if (this.$route.name === 'Home' || this.$route.name === 'Register') {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<style lang="stylus">
  html,body
    margin 0
    padding 0
    height 100%
  #app
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    height 100%
    min-width 1280px
    display flex
    flex-direction column
    align-items center
    color #000
    min-height 1000px
</style>

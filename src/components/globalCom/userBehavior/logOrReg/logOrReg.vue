<template>
  <div class="login-content-wrapper">
    <div class="login-content">
      <div class="login-body">
        <registerItem v-if="$route.name === 'Register'"></registerItem>
        <loginItem v-else></loginItem>
      </div>
    </div>
  </div>
</template>

<script>
  import loginItem from './com/loginItem'
  import registerItem from './com/registerItem'
  export default {
    components: {
      loginItem,
      registerItem
    },
    data () {
      return {
        isLogin: true
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus">
  .login-content-wrapper
    width 100%
    top 60px
    position absolute
    z-index 999
    display flex
    justify-content center
    .login-content
      min-width 1280px
      display flex
      justify-content flex-end
      margin-top 100px
      & > div
        padding 40px 20px 20px 20px
        width 280px
        height 240px
        background-color #fff
        border-radius 6px
        box-shadow 2px 5px 25px rgba(0, 0, 0, 0.5)
        display flex
        align-items center
        flex-direction column
</style>

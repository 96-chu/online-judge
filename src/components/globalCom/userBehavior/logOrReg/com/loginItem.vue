<template>
  <div class="login-item-wrapper">
    <span>登录</span>
    <input type="text" placeholder="用户名/学号" class="username">
    <input type="password" placeholder="密码" class="password">
    <span class="account" @click="toRegister">没有账户？<a>注册</a></span>
    <button class="button-login">
      <span>登录</span>
    </button>
    <button class="button-register" @click="toRegister">
      <span>立即注册</span>
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      toRegister () {
        this.$router.push({name: 'Register'})
      }
    }
  }
</script>

<style scoped lang="stylus">
  .login-item-wrapper
    display flex
    flex-direction column
    & > span:first-child
      margin-bottom 20px
      font-size 20px
      align-self center
    & > input
      width 264px
      height 30px
      border none
      padding 0 10px
      transition border-color .2s ease-in-out
      &:focus
        outline none
        border-color #409eff
      &.username
        border 1px solid #e7e7e7
        border-top-left-radius 4px
        border-top-right-radius 4px
      &.password
        border-bottom 1px solid #e7e7e7
        border-left 1px solid #e7e7e7
        border-right 1px solid #e7e7e7
        border-bottom-left-radius 4px
        border-bottom-right-radius 4px
    .account
      font-size 10px
      align-self flex-end
      margin-top 4px
      cursor pointer
    button
      width 100%
      height 30px
      border none
      border-radius 4px
      padding 0
      background-color #1B9AF7
      color #fff
      outline none
      span
        transition all ease-in-out .3s
        font-size 12px
      &:hover
        background #4cb0f9
      &.button-login
        margin-top 20px
      &.button-register
        margin-top 8px
</style>

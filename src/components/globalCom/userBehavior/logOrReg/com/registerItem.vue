<template>
  <div class="register-item-wrapper">
    <span>注册</span>
    <input type="text" placeholder="用户名/学号" class="username">
    <input type="password" placeholder="密码" class="password">
    <span class="account" @click="toLogin">已有账户？<a>登录</a></span>
    <button class="button-login">
      <span>注册</span>
    </button>
    <button class="button-register" @click="toLogin">
      <span>已有账户 返回登录</span>
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      toLogin () {
        this.$router.push({name: 'Home'})
      }
    }
  }
</script>

<style scoped lang="stylus">
  .register-item-wrapper
    display flex
    flex-direction column
    & > span:first-child
      margin-bottom 20px
      font-size 20px
      align-self center
    & > input
      width 264px
      height 30px
      outline none
      border none
      padding-left 16px
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

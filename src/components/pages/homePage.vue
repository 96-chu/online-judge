<template>
  <div class="login-content-wrapper">
    <div class="login-content">
      <div>
        <span>登录</span>
        <input type="text" placeholder="用户名/学号" class="username">
        <input type="password" placeholder="密码" class="password">
        <span class="account">没有账户？<a>注册</a></span>
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {}
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
        span:first-child
          margin-bottom 20px
          font-size 20px
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
        button
          width 100%
          height 30px
          border none
          border-radius 4px
          padding 0
          background-color #3582f8
          color #fff
          margin-top 20px
        .account
          font-size 10px
          align-self flex-end
          margin-top 4px
</style>

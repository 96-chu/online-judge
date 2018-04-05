<template>
  <div class="login-item-wrapper">
    <span>登录</span>
    <form>
      <span class="warning" v-html="warning.text"></span>
      <input type="text"
             placeholder="用户名/学号"
             class="username"
             @focus="inputing(formData.username)"
             :class="{ active: formData.username.isActive }"
             v-model="formData.username.data"
             @blur="leaving(formData.username)"
      >
      <input type="password"
             placeholder="密码"
             class="password"
             @focus="inputing(formData.password)"
             :class="{ active: formData.password.isActive }"
             v-model="formData.password.data"
             @blur="leaving(formData.password)"
      >
      <span class="account" @click="toRegister">没有账户？<a>注册</a></span>
      <button class="button-login" @click="loginAction" type="button">
        <span>登录</span>
      </button>
      <button class="button-register" @click="toRegister" type="button">
        <span>立即注册</span>
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formData: {
          username: {
            isActive: false,
            data: ''
          },
          password: {
            isActive: false,
            data: ''
          }
        },
        warning: {
          text: ''
        }
      }
    },
    methods: {
      toRegister () {
        this.$router.push({name: 'Register'})
      },
      loginAction () {
        if (this.formData.username.data !== '' && this.formData.password.data !== '') {
          this.warning.text = ''
          this.$ajax.get('/static/response/teacherRight.json').then(
            (response) => {
              sessionStorage.setItem('username', response.data.data.username)
              sessionStorage.setItem('roles', response.data.data.roles)
              this.$store.commit('refreshUserInfo')
              this.$router.push({name: 'TchIndex'})
            }
          )
        } else {
          this.warning.text = '*&nbsp;&nbsp;用户名及密码不能为空'
        }
      },
      inputing (object) {
        object.isActive = true
      },
      leaving (object) {
        object.isActive = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  .login-item-wrapper
    display flex
    flex-direction column
    width 290px
    & > span:first-child
      margin-bottom 18px
      font-size 20px
      align-self center
    form
      display flex
      flex-direction column
      .warning
        color #ff3b3b
        font-size 10px
        min-height 17px
      & > input
        width 264px
        height 30px
        border none
        padding 0 10px
        transition all .2s ease-in-out
        &.username
          border 1px solid #e7e7e7
          border-top-left-radius 4px
          border-top-right-radius 4px
        &.password
          border 1px solid #e7e7e7
          border-bottom-left-radius 4px
          border-bottom-right-radius 4px
        &.active
          outline none
          border-color #409eff
      .account
        font-size 10px
        align-self flex-end
        margin-top 4px
        cursor pointer
        transition all .3s
        &:hover
          color #1b9af7
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

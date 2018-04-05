<template>
  <div class="header-content-wrapper" :class="isHomePage">
    <div class="header-content">
      <div class="menu-wrapper">
        <router-link :to="{ name: 'Home'}">
          Online Judge
          <span v-if="$store.state.roles === 'tch'" class="teacher-role">教务平台</span>
        </router-link>
        <div class="menu" v-if="$store.state.roles !== 'tch'">
          <div v-for="item in menu" class="menu-item" :class="item.isSelected">
            <a @click="changeMenu(item.path)">{{item.title}}</a>
          </div>
        </div>
      </div>
      <div class="userInfo">
        <a @click="clearSession" v-if="$store.state.username">退出登录</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          menu:[
            {
              index: 0,
              title: '题库',
              isSelected: null,
              path: '/problems'
            },
            {
              index: 1,
              title: '比赛',
              isSelected: null,
              path: '/contests'
            },
            {
              index: 2,
              title: '作业',
              isSelected: null,
              path: ''
            },
            {
              index: 3,
              title: '提交',
              isSelected: null,
              path: ''
            }
          ]
        }
      },
      computed: {
        isHomePage () {
          if (this.$route.name === 'Home' || this.$route.name === 'Register') {
            return 'home'
          }  else {
            return 'other'
          }
        }
      },
      methods: {
        changeMenu (path) {
          this.$router.push({path: path})
          this.changeMenuStyle(path)
        },
        changeMenuStyle (path) {
          for (let index in this.menu) {
            if (this.menu[index].path === path) {
              this.menu[index].isSelected = 'active'
            } else {
              this.menu[index].isSelected = null
            }
          }
        },
        routerChange () {
          this.changeMenuStyle(this.$route.path)
        },
        clearSession () {
          sessionStorage.clear()
          this.$store.commit('refreshUserInfo')
          console.log(sessionStorage.username)
        }
      },
      watch: {
        '$route': ['routerChange']
      },
      created () {
        this.changeMenuStyle(this.$route.path)
      }
    }
</script>

<style scoped lang="stylus">
  .header-content-wrapper
    height 60px
    min-width 1280px
    width 100%
    display flex
    justify-content center
    align-items center
    .header-content
      min-width 1280px
      display flex
      justify-content space-between
      align-items center
      z-index 100
      .menu-wrapper
        display flex
        align-items center
        margin-left 40px
        cursor pointer
        & > a
          font-size 24px
          color black
          .teacher-role
            font-size 12px
            color #fff
        .menu
          display flex
    &.home
      position absolute
      background rgba(255,255,255,.2)
      color black
      box-shadow 0 5px 10px rgba(0, 0, 0, 0.3)
      &::before
        content ''
        position absolute
        background rgba(255,255,255,.2)
        top 0
        right 0
        bottom 0
        left 0
        filter blur(5px)
        z-index -1
      .menu
        padding 10px 0 0 20px
        div:not(:first-child)
            margin-left 14px
    &.other
      background #545C64
      color #fff
      height 40px
      min-height 40px
      font-size 14px
      .menu-wrapper > a
        color #ccc
        font-size 20px
        &:hover
          color #fff
      .login-wrapper a
        color #fff
      .menu
        display flex
        height 40px
        padding-left 10px
        .menu-item
          padding 0 14px
          display flex
          align-items center
          transition all ease-in-out .2s
          border-bottom solid 2px #545C64
          a
            margin-top 4px
            color #ccc
            transition color ease-in-out .2s
          &:hover
            background #434A50
            a
              color #fff
          &.active
            border-bottom solid 2px #FFD04B
            a
              color #FFD04B

</style>

<template>
  <nav class="header-content-wrapper" :class="isHomePage">
    <div class="header-content">
      <div class="menu-wrapper">
        <router-link :to="{ name: 'TchIndex'}" v-if="$store.state.roles === 'tch'">
          Online Judge
          <span class="teacher-role">教务平台</span>
        </router-link>
        <router-link :to="{ name: 'Home'}" v-else>
          Online Judge
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
  </nav>
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
              name: 'problems',
              path: '/problems'
            },
            {
              index: 1,
              title: '比赛',
              isSelected: null,
              name: 'contests',
              path: '/contests'
            },
            {
              index: 2,
              title: '作业',
              isSelected: null,
              path: '/homeworks',
              name: 'homework'
            },
            {
              index: 3,
              title: '提交',
              isSelected: null,
              path: 'commit'
            },
            {
              index: 4,
              title: '帮助',
              isSelected: null,
              name: 'help',
              path: '/help'
            }
          ]
        }
      },
      computed: {
        isHomePage () {
          if (this.$route.name === 'Home' || this.$route.name === 'Register') {
            return 'home'
          }  else {
            if (this.$store.state.roles === 'tch') {
              return 'other teacher'
            } else {
              return 'other'
            }
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
            if (path.indexOf(this.menu[index].name) > -1) {
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
          this.$router.push({name: 'Home'})
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
    min-width 1200px
    width 100%
    display flex
    justify-content center
    align-items center
    .header-content
      min-width 1200px
      max-width 1200px
      display flex
      justify-content space-between
      align-items center
      z-index 100
      .menu-wrapper
        display flex
        align-items center
        cursor pointer
        & > a
          font-size 24px
          color black
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
      &.teacher
        background #4a667b
        .menu-wrapper > a
          color #d5e5ed
          font-weight normal
          font-size 20px
          &:hover
            color #fff
            .teacher-role
              color #fff
        .teacher-role
          color #d5e5ed
          font-size 12px
</style>

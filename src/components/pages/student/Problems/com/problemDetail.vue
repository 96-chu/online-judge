<template>
  <div class="problem-detail-wrapper">
    <div class="problem-detail-content" v-if="$store.state.roles !== 'tch'">
      <div class="content-title">
        <div v-for="item in contentTitle" :class="{active: item.name === $route.name}" @click="changeOption(item.name)">{{item.title}}</div>
      </div>
      <router-view></router-view>
    </div>
    <div class="problem-detail-content tch" v-else>
      <div class="content-title">
        <h3 class="problem-title">
          <router-link class="el-icon-arrow-left" :to="{name: 'AddContest'}"></router-link>
          题目信息
        </h3>
      </div>
      <router-view></router-view>
    </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        contentTitle: [
          {
            title: '题目',
            isActive: true,
            name: 'ProblemIndex'
          },
          {
            title: '我的提交',
            isActive: false,
            name: 'Submissions'
          }
        ]
      }
    },
    created () {
      console.log(this.$store.state.roles)
    },
    methods: {
      changeOption (name) {
        this.$router.push({name: name})
      }
    }
  }
</script>

<style scoped lang="stylus">
  .problem-detail-wrapper
    display block
    /*flex 1*/
    margin-top 40px
    .problem-detail-content
      width 1200px
      display flex
      flex-direction column
      .content-title
        border-bottom solid 1px #eee
        display flex
        & > div
          font-family 'STHeitiSC-Light'
          font-size 16px
          line-height 45px
          padding 0px 8px
          color #888
          &:not(:first-child)
            margin-left 20px
          &:hover
            color #000
          &.active
            border-bottom solid #ffd04b 2px
            color #000
    .tch
      h3.problem-title
        font-size 30px
        line-height 45px
        font-weight normal
        margin 0
        a
          margin-right 6px
          color #888
          &:hover
            color #4a667b
</style>

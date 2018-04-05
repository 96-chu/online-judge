<template>
  <div class="problem-detail-wrapper">
    <div class="problem-detail-content">
      <div class="content-title">
        <div v-for="item in contentTitle" :class="{active: item.name === $route.name}" @click="changeOption(item.name)">{{item.title}}</div>
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
</style>

<template>
  <div class="notice-wrapper">
    <div class="title">
      <i class="icon-notice"></i>
      <span>公告</span>
    </div>
    <div class="notice-list">
      <div class="notice-item" v-for="item in noticeData">
        <span class="number">{{item.id}}.</span>
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        noticeData: []
      }
    },
    props: ['title']
  }
</script>

<style scoped lang="stylus">
.notice-wrapper
  width 300px
  border solid 1px #85c5e5
  .title
    background #d9edf7
    color #31708f
    height 50px
    display flex
    align-items center
    padding 0px 20px
    border-bottom solid 1px #85c5e5
    cursor default
    & > i
      margin-right 6px
      font-weight bold
  .notice-list
    padding 10px 20px 20px 20px
    font-size 14px
    .notice-item:not(:first-child)
      margin-top 8px
    .notice-item
      cursor pointer
      color #15c
    .number
      margin-right 4px
      color #000
</style>

<template>
  <div class="notice-wrapper">
    <div class="title">
      <i class="icon-labels"></i>
      <span>标签</span>
    </div>
    <div class="notice-list">
      <div class="notice-item" v-for="item in labelData">
        <span class="label-name">{{item.title}}</span>
        <span class="label-num">{{item.total}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelData: []
      }
    }
  }
</script>

<style scoped lang="stylus">
  .notice-wrapper
    width 100%
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
      font-size 14px
      .notice-item:not(:last-child)
        border-bottom 1px solid #e5e5e5
        padding-bottom 8px
      .notice-item
        padding 8px 20px 8px 20px
        border none
        display flex
        justify-content space-between
      .label-name
        color #222
        letter-spacing 1px
        cursor pointer
        &:hover
          background rgba(225,225,225, .3)
      .label-num
        background #777
        border-radius 10px
        padding 2px 8px 2px 8px
        font-size 10px
        color #fff
        font-weight bold
</style>

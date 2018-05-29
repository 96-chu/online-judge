<template>
  <div class="assist-item-wrapper">
    <div class="cube-content cube-add">
      <router-link class="el-icon-circle-plus-outline" :to="{name: 'AddProblem'}">
        添加题目
      </router-link>
    </div>
    <div class="cube-content cube-add">
      <router-link class="el-icon-circle-plus-outline" :to="{name: 'AddWork'}">
        添加作业
      </router-link>
    </div>
    <div class="cube-content cube-add">
      <a class="el-icon-circle-plus-outline">
        <span>管理比赛小组</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus">
  .assist-item-wrapper
    display flex
    width 100%
    flex-wrap wrap
    .cube-content
      height 180px
      max-width 310px
      width 310px
      border-radius 0 15px
      box-shadow 0 0 2px 0px rgba(0,0,0,0.3)
      background url("~assets/teacher/cubeBg/bg.png")
      flex 0 0 33.33%
      &:hover
        box-shadow 0 2px 10px 0px rgba(0,0,0,0.3)
      &:nth-child(n+4)
        margin-top 20px
      &:nth-child(3n+2), &:nth-child(3n+3)
        margin-left 40px
    .cube-add
      display flex
      justify-content center
      align-items center
      font-size 40px
      color #ccc
      transition all ease-in-out .3s
      &:hover
        a
          color #4a667b
      a
        display flex
        align-items center
        font-size 20px
        color #b3b3b3
        transition all ease-in-out .3s
        &:before
          margin-right 10px

</style>

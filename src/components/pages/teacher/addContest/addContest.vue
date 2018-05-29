<template>
  <div class="add-contest-wrapper">
    <h3 class="contest-title">
      <router-link class="el-icon-arrow-left" :to="{name: 'TchIndex'}"></router-link>
      添加比赛
    </h3>
    <div class="add-contest-content">
      <div class="cube" @click="$router.push({name: 'ContestAuto'})">
        <h3>自动组卷</h3>
        <p>*网站题库总量：100，不建议</p>
      </div>
      <div @click="$router.push({name: 'AddProblem'})" class="cube">
        <h3>手动组卷</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus">
  .add-contest-wrapper
    display block
    width 1200px
    padding-top 40px
    h3.contest-title
      border-bottom solid 1px #eee
      font-size 30px
      line-height 45px
      font-weight normal
      a
        margin-right 6px
        color #888
        &:hover
          color #4a667b
  .add-contest-content
    display flex
    justify-content space-around
    padding 140px 0
    .cube
      display flex
      flex-direction column
      justify-content center
      align-items center
      background #4a667b
      border-radius 4px
      width 300px
      height 100px
      box-shadow 0 0 2px 0px rgba(74,102,123, .3)
      transition box-shadow ease-in-out .3s
      cursor pointer
      &:hover
        box-shadow 0 2px 10px 0 rgba(74,102,123, .3)
      h3,p
        color #c2d0da
        margin 0
        font-weight normal
</style>

<template>
  <div class="contest-detail-wrapper">
    <h3 class="contest-detail-title">
      <router-link class="el-icon-arrow-left" :to="{name: 'TchIndex'}"></router-link>
      ACM春季选拔赛
    </h3>
    <div class="contest-content-wrapper">
      <div class="left-info-panel">
        <div class="status-info">
          <h3 class="status">正在进行中</h3>
        </div>
      </div>
      <el-table :data="studentInfo" class="right-info-table">
        <el-table-column type="index" label="编号">
          <!--<template slot-scope="scope">-->
          <!--<a @click="toDetail(scope.row.index)">{{scope.row.index}}</a>-->
          <!--</template>-->
        </el-table-column>
        <el-table-column label="学生姓名"></el-table-column>
        <el-table-column label="学号/账号"></el-table-column>
        <el-table-column label="院系"></el-table-column>
        <el-table-column label="手机号"></el-table-column>
        <el-table-column label="最后登录时间"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        studentInfo: []
      }
    }
  }
</script>

<style scoped lang="stylus">
  .contest-detail-wrapper
    display block
    width 1200px
    padding-top 40px
    h3.contest-detail-title
      border-bottom solid 1px #eee
      font-size 30px
      line-height 45px
      font-weight normal
      a
        margin-right 6px
        color #888
        &:hover
          color #4a667b
    .contest-content-wrapper
      display flex
      justify-content space-between
      .left-info-panel
        flex 0 0 30%
        display flex
        flex-direction column
        min-height 200px
        border-radius 0 14px
        box-shadow 0 0 4px 0px #d5e5ed
        padding 20px
        background #4a667b
        h3.status
          font 26px normal
          color #fff
          margin 0
      .right-info-table
        flex 0 0 60%
</style>

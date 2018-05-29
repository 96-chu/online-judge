<template>
  <div class="work-manage-wrapper">
    <div class="tool-bar">
      <el-button icon="el-icon-circle-plus-outline" size="small" @click="$router.push({name: 'AddWork'})">添加作业</el-button>
    </div>
    <el-table :data="workInfo" class="student-info-table">
      <el-table-column type="index" label="编号">
        <!--<template slot-scope="scope">-->
        <!--<a @click="toDetail(scope.row.index)">{{scope.row.index}}</a>-->
        <!--</template>-->
      </el-table-column>
      <el-table-column label="作业标题"></el-table-column>
      <el-table-column label="开始时间"></el-table-column>
      <el-table-column label="结束时间"></el-table-column>
      <el-table-column label="完成人数"></el-table-column>
      <el-table-column label="状态"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        workInfo: []
      }
    }
  }
</script>

<style scoped lang="stylus">
  .work-manage-wrapper
    display flex
    flex-direction column
    align-items flex-end
    .tool-bar
      margin-top 30px
      button
        background #4a667b
        border-color #4a667b
        color #fff
        &:hover
          background #4a667b
    .student-info-table
      margin-top 40px
</style>

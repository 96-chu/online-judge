<template>
  <div class="student-info-wrapper">
    <div class="tool-bar">
      <el-button type="success" icon="el-icon-upload" circle size="small">导入表格数据</el-button>
    </div>
    <el-table :data="studentInfo" class="student-info-table">
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
  .student-info-wrapper
    display flex
    flex-direction column
    align-items flex-end
    .tool-bar
      margin-top 30px
      button
        background #4a667b
        border-color #4a667b
        &:hover
          background #4a667b
    .student-info-table
      margin-top 40px
</style>

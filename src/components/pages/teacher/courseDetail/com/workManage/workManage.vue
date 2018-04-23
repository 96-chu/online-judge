<template>
  <el-table :data="workInfo" class="student-info-table">
    <el-table-column type="index" label="编号">
      <!--<template slot-scope="scope">-->
      <!--<a @click="toDetail(scope.row.index)">{{scope.row.index}}</a>-->
      <!--</template>-->
    </el-table-column>
    <el-table-column label="作业章节名"></el-table-column>
    <el-table-column label="开始时间"></el-table-column>
    <el-table-column label="结束时间"></el-table-column>
    <el-table-column label="完成人数"></el-table-column>
    <el-table-column label="状态"></el-table-column>
  </el-table>
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
  .student-info-table
    margin-top 40px
</style>

<template>
  <el-table :data="submissionsData" class="submissions-table" :cell-style="test">
    <el-table-column prop="index" label="编号"></el-table-column>
    <el-table-column prop="dateTime" label="提交时间"></el-table-column>
    <el-table-column prop="language" label="语言"></el-table-column>
    <el-table-column prop="runtime" label="运行时间"></el-table-column>
    <el-table-column prop="status" label="结果"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data () {
      return {
        submissionsData: []
      }
    },
    methods: {
      test ({row, column, rowIndex, columnIndex}) {
        if (columnIndex === 4) {
          if (row.status === 'Accepted') {
            return {
              padding: "0",
              background: "#f0f9eb"
            }
          } else {
            return {
              padding: "0",
              background: "#fef0f0"
            }
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>

<template>
  <el-table :data="homeworkData" class="homework-table" :cell-style="test">
    <!--<el-table-column type="index" label="编号">-->
      <!--<template slot-scope="scope">-->
        <!--<a @click="toDetail(scope.row.index)">{{scope.row.index}}</a>-->
      <!--</template>-->
    <!--</el-table-column>-->
    <el-table-column type="index" label="作业课程">
      <template slot-scope="scope">
        <a @click="toDetail(scope.row.index)">{{scope.row.index}}</a>
      </template>
    </el-table-column>
    <el-table-column prop="date" label="开始时间"></el-table-column>
    <el-table-column prop="date" label="结束时间"></el-table-column>
    <el-table-column prop="tag" label="作业章节"></el-table-column>
    <el-table-column label="状态">
      <template slot-scope="scope">
        <span v-if="scope.row.status === 'finished'">已经结束</span>
        <span v-else-if="scope.row.status === 'going'">正在进行中</span>
        <span v-else class="other">暂停</span>
      </template>
    </el-table-column>
    <el-table-column prop="tag" label="课程教师"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data () {
      return {
        homeworkData: []
      }
    },
    created () {
    },
    methods: {
      test ({row, column, rowIndex, columnIndex}) {
        if (columnIndex === 4) {
          if (row.status === 'going') {
            return {
              padding: "0",
              background: "#f0f9eb"
            }
          } else if (row.status === 'finished') {
            return {
              padding: "0",
              background: "oldlace"
            }
          } else {
            return {
              padding: "0",
              background: "pink"
            }
          }
        }
      },
      toDetail (id) {
        this.$router.push({name: 'ContestDetail', params: {contestId: id}})
      }
    }
  }
</script>

<style scoped lang="stylus">
  .homework-table
    color #606266
    a:hover
      text-decoration underline
</style>


<template>
  <el-table :data="contestsData" class="contests-table" :cell-style="test">
    <el-table-column type="index" label="编号">
      <template slot-scope="scope">
        <a>{{scope.row.index}}</a>
      </template>
    </el-table-column>
    <el-table-column label="比赛名称">
      <template slot-scope="scope">
        <a>{{scope.row.name}}</a>
      </template>
    </el-table-column>
    <el-table-column prop="date" label="开始时间"></el-table-column>
    <el-table-column prop="tag" label="比赛类型"></el-table-column>
    <el-table-column label="状态">
      <template slot-scope="scope">
        <span v-if="scope.row.status === 'finished'">已经结束</span>
        <span v-else-if="scope.row.status === 'going'">正在进行中</span>
        <span v-else class="other">暂停</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data () {
      return {
        contestsData: []
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
      }
    }
  }
</script>

<style scoped lang="stylus">
  .contests-table
    color #000
</style>


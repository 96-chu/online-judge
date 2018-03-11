<template>
  <el-table :data="problemsData" class="problems-table">
    <el-table-column type="index" label="编号">
      <template slot-scope="scope">
        <a>{{scope.row.index}}</a>
      </template>
    </el-table-column>
    <el-table-column label="题目">
      <template slot-scope="scope">
        <a>{{scope.row.name}}</a>
      </template>
    </el-table-column>
    <el-table-column prop="hard" label="难度"></el-table-column>
    <el-table-column label="通过率">
      <template slot-scope="scope">
        <span>{{ Math.ceil(scope.row.access/scope.row.total*100) }}%</span>
        <span>({{ scope.row.access }}</span>
        <span>/</span>
        <span>{{scope.row.total}})</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
      data () {
        return {
          problemsData: []
        }
      },
      created () {
      },
      methods: {
      }
    }
</script>

<style scoped lang="stylus">

</style>

<template>
  <el-table :data="problemsData" class="problems-table clearfix">
    <el-table-column type="index" label="编号">
      <template slot-scope="scope">
        <a @click="toProblemDetail(scope.row.index)">{{scope.row.index}}</a>
      </template>
    </el-table-column>
    <el-table-column label="题目" width="500px">
      <template slot-scope="scope">
        <a @click="toProblemDetail(scope.row.index)">{{scope.row.name}}</a>
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
        toProblemDetail (id) {
          this.$router.push({name: 'ProblemDetail', params: {problemId: id}})
        }
      }
    }
</script>

<style scoped lang="stylus">
a:hover
  text-decoration underline
</style>

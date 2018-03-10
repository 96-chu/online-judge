<template>
  <div class="problems-content-wrapper">
    <div class="problems-content">
      <div class="title">
        <div class="problems-title">
          <span>题目列表</span>
        </div>
        <div class="filter">
          <el-input v-model="filter" class="filter-input" size="small"></el-input>
          <el-button size="small"><i class="icon-filter"></i>过滤</el-button>
        </div>
        <div class="pagination">
          <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="tableLength"></el-pagination>
        </div>
      </div>
      <div class="content">
        <div class="left-content-wrapper">
          <problemTable ref="table"></problemTable>
        </div>
        <div class="right-content-wrapper">
          <Notices ref="notice"></Notices>
        </div>
      </div>
      <div class="pagination">
        <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="tableLength"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
    import problemTable from './com/problemTable.vue'

    export default {
      data () {
        return {
          filter: null,
          tableLength: null
        }
      },
      components: {
        problemTable
      },
      created () {
        this.initData()
      },
      methods: {
        initData () {
          this.$ajax.get('/static/data.json').then(
            (response) => {
              this.$refs.table.problemsData = response.data.table
              this.$refs.notice.noticeData = response.data.notice
              this.tableLength = response.data.table.length
            }
          )
        }
      }
    }
</script>

<style scoped lang="stylus">
  .problems-content-wrapper
    display flex
    justify-content center
    margin-top 40px
    .problems-content
      width 1200px
      display flex
      flex-direction column
      & > div:not(:first-child)
        margin-top 20px
      .title
        & > div:not(:first-child)
          margin-top 10px
        .problems-title
          border-bottom solid 1px #eee
          & > span
              font-size 30px
              line-height 45px
        .filter
          display flex
          justify-content flex-end
          .filter-input
            width 200px
            margin-right 10px
          i
            margin-right 4px
        .pagination
          display flex
          justify-content center
      .content
        display flex
        .left-content-wrapper
          width 70%
          .problems-table
            width 100%
            a
              color #409EFF
              font-weight bold
        .right-content-wrapper
          width 30%
          margin-left 20px
      .pagination
        display flex
        justify-content center

</style>

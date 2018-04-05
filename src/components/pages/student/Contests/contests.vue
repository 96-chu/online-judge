<template>
  <div class="contests-content-wrapper">
    <div class="contests-content">
      <div class="title">
        <div class="contests-title">
          <span>比赛列表</span>
        </div>
        <div class="filter">
          <el-input v-model="filter" class="filter-input" size="small"></el-input>
          <el-button size="small" class="filter-button">
            <i class="icon-filter"></i>
            <span>过滤</span>
          </el-button>
        </div>
        <div class="pagination">
          <el-pagination background :total="tableLength" layout="total, prev, pager, next, jumper"></el-pagination>
        </div>
      </div>
      <div class="content">
        <div class="left-content-wrapper">
          <contestTable ref="table"></contestTable>
        </div>
        <div class="right-content-wrapper">
          <Notices ref="note"></Notices>
        </div>
      </div>
      <div class="pagination">
        <el-pagination background :total="tableLength" layout="total, prev, pager, next, jumper"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import contestTable from './com/contestTable.vue'

  export default {
    data () {
      return {
        filter: null,
        tableLength: 1
      }
    },
    components: {
      contestTable
    },
    created () {
      this.initData()
    },
    methods: {
      initData () {
        this.$ajax.get('/static/response/contestData.json').then(
          (response) => {
            this.$refs.table.contestsData = response.data.data.table
            this.$refs.note.noticeData = response.data.data.note
            this.tableLength = response.data.data.table.length
          }
        )
      }
    }
  }
</script>

<style scoped lang="stylus">
  .contests-content-wrapper
    display block
    margin-top 40px
    .contests-content
      width 1200px
      display flex
      flex-direction column
      & > div:not(:first-child)
        margin-top 20px
      .title
        & > div:not(:first-child)
          margin-top 10px
        .contests-title
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
          .filter-button
            i
              /*margin-right 4px*/
              font-weight bold
        .pagination
          display flex
          justify-content center
      .content
        display flex
        .left-content-wrapper
          width 70%
          .contests-table
            width 100%
            a
              color #409EFF
              font-weight bold
        .right-content-wrapper
          width 30%
          margin-left 20px
          div:not(:first-child)
            margin-top 20px
      .pagination
        display flex
        justify-content center
</style>

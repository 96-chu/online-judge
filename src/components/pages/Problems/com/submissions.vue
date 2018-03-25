<template>
  <div class="submissions-wrapper">
    <div class="problem-detail-content">
      <h2>{{problem.name}}</h2>
      <p>
        <span>发布时间：{{problem.date}}</span>
        <span>时间限制: {{problem.time_limit}}s</span>
        <span>空间限制：{{problem.space_limit}}K</span>
      </p>
    </div>
    <submissionTable ref="table"></submissionTable>
  </div>
</template>

<script>
  import submissionTable from './submissionTable.vue'
  export default {
    data () {
      return {
        submissions: [],
        problem: {}
      }
    },
    components: {
      submissionTable
    },
    created () {
      this.getDetail()
      this.initTableData()
    },
    methods: {
      getDetail () {
        this.$ajax.get('/static/response/submissions.json').then(
          (response) => {
            this.problem = response.data.data.problem
            this.submissions = response.data.data.submissions
          }
        )
      },
      initTableData () {
        this.$ajax.get('/static/response/submissionsData.json').then(
          (response) => {
            this.$refs.table.submissionsData = response.data.data.table
          }
        )
      }
    }
  }
</script>

<style scoped lang="stylus">
  h2,p
    margin 0
    font-family 'STHeitiSC-Light'
  .submissions-wrapper
    padding-top 30px
    .problem-detail-content
      display flex
      flex-direction column
      align-items center
      margin-bottom 20px
      p
        color #b3b3b3
        font-size 14px
        line-height 20px
        span:not(:first-child)
          margin-left 10px
</style>

<template>
  <div class="add-work-wrapper">
    <h3 class="work-title">
      <router-link class="el-icon-arrow-left" :to="{name: 'TchIndex'}"></router-link>
      添加作业
    </h3>
    <el-form class="work-content-wrapper">
      <div class="row-input">
        <p class="row-input-title">
          作业标题
        </p>
        <el-input type="text"></el-input>
      </div>
      <div class="row-input">
        <p class="row-input-title">
          作业时间
        </p>
        <el-date-picker
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="row-input">
        <p class="row-input-title">
          作业详情
        </p>
        <el-input type="textarea"></el-input>
      </div>
      <div class="row-button">
        <el-button>确认添加</el-button>
        <el-button>确认添加并添加下一个</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        workInfo: [
          {
            name: '题目描述',
            data: '',
            required: true,
          }
        ]
      }
    },
    computed: {
    },
    methods: {

    }
  }
</script>

<style scoped lang="stylus">
  .add-work-wrapper
    display block
    width 1200px
    padding-top 40px
    h3.work-title
      border-bottom solid 1px #eee
      font-size 30px
      line-height 45px
      font-weight normal
      a
        margin-right 6px
        color #888
        &:hover
          color #4a667b
    .work-content-wrapper
      display flex
      flex-wrap wrap
      justify-content space-between
      .row-input
        flex 0 0 40%
        /*padding 0 10px*/
        /*&.work-description*/
        /*flex 0 0 100%*/
        .row-input-title
          border-left solid 2px #6084a0
          font-size 20px
          line-height 24px
          padding-left 8px
          i
            color #fa7d3c
      .row-input:nth-child(3)
        flex 0 0 100%
      .row-button
        margin-top 20px
        display flex
        flex 0 0 100%
        justify-content flex-end
        align-items flex-end
      .el-date-editor
        width 100%
</style>


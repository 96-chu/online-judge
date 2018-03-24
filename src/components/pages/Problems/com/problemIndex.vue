<template>
  <div class="problem-index-wrapper">
    <div class="left-panel">
      <div class="problem-detail-content">
        <h3 class="problem-title">{{problem.name}}</h3>
        <p>
          <span>发布时间：{{problem.date}}</span>
          <span>时间限制: {{problem.time_limit}}s</span>
          <span>空间限制：{{problem.space_limit}}K</span>
        </p>
      </div>
      <div class="problem-index-content">
        <div class="problem-description">
          <h4>题目描述</h4>
          <p>{{problem.description}}</p>
        </div>
        <div class="problem-input-description">
          <h4>输入描述</h4>
          <p>{{problem.input_description}}</p>
        </div>
        <div class="problem-output-description">
          <h4>输出描述</h4>
          <p>{{problem.output_description}}</p>
        </div>
        <div class="problem-input-example">
          <h4>输入示例</h4>
          <p>{{problem.input_example}}</p>
        </div>
        <div class="problem-output-example">
          <h4>输出示例</h4>
          <p>{{problem.output_example}}</p>
        </div>
      </div>
    </div>
    <div class="right-panel">
      <codemirror :value="code" class="editor"></codemirror>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        code: '',
        problem: {}
      }
    },
    created () {
      this.getDetail()
    },
    methods: {
      getDetail () {
        this.$ajax.get('/static/response/problemDetail.json').then(
          (response) => {
            this.problem = response.data.data
          }
        )
      }
    }
  }
</script>

<style scoped lang="stylus">
  h3,p
    margin 0
  .problem-index-wrapper
    display flex
    margin-top 80px
    border solid 1px #eee
    font-size 'STHeitiSC-Light'
    /*padding-bottom 10px*/
    .left-panel
      flex  0 0 40%
      padding 0 10px 20px 10px
      height 600px
      overflow auto
      .problem-detail-content
        background #ebebeb
        border-radius 4px
        margin 10px 0
        padding 10px
        display flex
        flex-direction column
        align-items center
        p
          margin 0
          span
            font-size 12px
            font-size 'STHeitiSC-Light'
            color #b3b3b3
          span:not(:first-child)
            margin-left 8px
        .problem-title
          color #000
          font-size 'STHeitiSC-Light'
          font-weight normal
          margin 0px
      .problem-index-content
        p
          color #696969
          border-left solid 2px #FFD04B
          margin 0
          padding 10px
        & > div:not(:first-child)
          margin-top 20px
        .problem-input-example p,
        .problem-output-example p
          border solid 1px #eee
          border-left solid 2px #FFD04B
    .right-panel
      flex 1

</style>

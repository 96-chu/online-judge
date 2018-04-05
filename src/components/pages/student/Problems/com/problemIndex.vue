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
      <form class="languageSelect">
        <h4>语言选择</h4>
        <div class="selectContent">
          <span v-for="item in language" class="language-item">
            <!--input type=radio 需要绑定一个v-model来绑定值-->
            <input type="radio" :id="'langRadio' + item.index" :value="item.index" v-model="chosenLanguage">
            <label :for="'langRadio' + item.index">{{item.name}} {{item.standard}}</label>
          </span>
        </div>
      </form>
      <codemirror :value="code" class="editor"></codemirror>
      <el-button class="submite-code" size="small" @click="alertWarning">提交代码</el-button>
    </div>
    <div class="bottom-panel" v-if="runtime" :style="statusBg">
      <div class="runtime-title">
        <h3>运行结果: <span :style="status">{{runtime.status}}</span></h3>
        <el-button size="small" class="check-confirm" @click="toConfirmRecord">查看提交记录</el-button>
      </div>
      <div class="success-info" v-if="runtime.status === 'Accepted'">
        <p>
          <span>运行时间：{{runtime.runtime}}ms</span>
          <span>语言：{{runtime.language}}</span>
        </p>
        <p>提交时间：{{runtime.date}}</p>
      </div>
      <div class="warning-info" v-else>
        <div v-html="runtime.errorInfo" class="error-detail"></div>
        <p>
          <span>语言：{{runtime.language}}</span>
          <span>提交时间：{{runtime.date}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        code: '',
        problem: {},
        language: [
          {
            index: 1,
            name: 'c',
            standard: '( GCC 4.8 )'
          },
          {
            index: 2,
            name: 'c++',
            standard: '( G++ 4.3 )'
          },
          {
            index: 3,
            name: 'Java',
            standard: '( Oracle JDK 1.7 )'
          }
        ],
        // 选中的语言
        chosenLanguage: '',
        runtime: null,
      }
    },
    created () {
      this.getDetail()
    },
    computed: {
      status () {
        if (this.runtime.status === 'Accepted') {
          return {color: 'green'}
        } else {
          return {color: 'red'}
        }
      },
      statusBg () {
        if (this.runtime.status === 'Accepted') {
          return {background: '#f0f9eb'}
        } else {
          return {background: '#fef0f0'}
        }
      }
    },
    methods: {
      getDetail () {
        this.$ajax.get('/static/response/problemDetail.json').then(
          (response) => {
            this.problem = response.data.data
          }
        )
      },
      confirmCode () {
        this.$ajax.get('/static/response/runtimeSuccess.json').then(
          (response) => {
            this.runtime = response.data.data
          }
        )
      },
      toConfirmRecord () {
        this.$router.push({name: 'Submissions'})
      },
      alertWarning () {
        this.$confirm('你的代码也许包含错误，确定提交？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$notify({
            title: '提示',
            message: '提交成功！'
          });
          this.confirmCode()
        }).catch(() => {
          this.$notify({
            title: '提示',
            message: '取消提交！',
          });
        });
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
    flex-wrap wrap
    /*padding-bottom 10px*/
    .left-panel
      flex  0 0 40%
      padding 0 10px 20px 10px
      height 650px
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
      padding 0 10px
      display flex
      flex-direction column
      border-left solid 1px #eee
      overflow auto
      .languageSelect
        margin-bottom 30px
        .selectContent
          border-left solid 2px #FFD04B
          padding 10px
          span:not(:first-child)
            margin-left 20px
          span
            cursor pointer
            input
              cursor pointer
            label
              padding-left 10px
              cursor pointer

      .editor
        border solid 1px #eee
        margin-bottom 15px
      .submite-code
        width 100px
        align-self flex-end
    .bottom-panel
      width 1200px
      border-top solid 1px #eee
      padding 10px
      display flex
      flex-direction column
      h3
        font-weight normal
      p
        font-size 14px
        margin 10px 10px 10px 0
        color #242424
        span:first-child
          margin-right 10px
      .runtime-title
        display flex
        justify-content space-between
      .warning-info
        .error-detail
          padding 10px
          border solid 1px #ccc
          margin 10px 0
      .check-confirm
        height 30px
</style>

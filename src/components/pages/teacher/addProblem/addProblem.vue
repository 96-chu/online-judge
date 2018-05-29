<template>
  <div class="add-problem-wrapper">
    <h3 class="problem-title">
      <a class="el-icon-arrow-left" @click="backToPrevious"></a>
      添加题目
    </h3>
    <div class="added-problem">

    </div>
    <el-form class="problem-content-wrapper" :rules="rules">
      <div class="row-input" v-for="(item, index) in problemInfo" :key="index">
        <p class="row-input-title">{{item.name}}<i v-show="item.required">*</i></p>
        <el-form-item v-if="index === 0" prop="empty">
          <el-input type="text" clearable v-model="item.data"></el-input>
        </el-form-item>
        <el-form-item v-else-if="index === 3" prop="number">
          <el-input placeholder="请输入时间" v-model="item.data" >
            <template slot="append">S</template>
          </el-input>
        </el-form-item>
        <el-form-item v-else-if="index === 4" prop="number">
          <el-input placeholder="请输入空间" v-model="item.data" >
            <template slot="append">K</template>
          </el-input>
        </el-form-item>
        <el-form v-else-if="index === 5" :rules="rules">
          <div class="examples">
            <div class="examples-item" v-for="(item, index) in examples">
              <div class="examples-title">
                <p>
                  示例{{index + 1}}
                  <i v-show="item.required">*</i>
                </p>
                <div class="examples-toolbar">
                  <i class="el-icon-plus" v-show="index + 1 === examples.length" @click="addExamples"></i>
                  <i v-show="examples.length > 1" class="el-icon-minus" @click="deleteExamples(index)"></i>
                </div>
              </div>
              <div class="examples-content">
                <el-form-item class="input-examples" prop="empty">
                  <h4>-&nbsp;输入样例</h4>
                  <el-input type="textarea" clearable v-model="item.data" :autosize="{ minRows: 2, maxRows: 4}" ></el-input>
                  <!--<el-button size="small" type="primary">点击上传图片样例</el-button>-->
                </el-form-item>
                <el-form-item class="output-examples" prop="empty">
                  <h4>-&nbsp;输出样例</h4>
                  <el-input type="textarea" clearable v-model="item.data" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                  <!--<el-button size="small" type="primary">点击上传图片样例</el-button>-->
                </el-form-item>
              </div>
            </div>
          </div>
        </el-form>
        <div class="knowledge-point" v-else-if="index === 6">
          <el-checkbox-group v-model="item.data">
            <el-checkbox v-for="tag in tags" :label="tag" border size="medium" :key="tag"></el-checkbox>
          </el-checkbox-group>
          <div class="add-new">
            <input type="text" v-model="tagNew">
            <el-button icon="el-icon-plus" size="medium" @click="addNewTag"></el-button>
          </div>
        </div>
        <el-input placeholder="请输入时间" v-model="item.data" v-else-if="index === 8">
          <template slot="append">分钟</template>
        </el-input>
        <el-rate v-model="item.data" v-else-if="index === 9"></el-rate>
        <el-form-item v-else prop="empty">
          <el-input type="textarea" clearable v-model="item.data" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
          <!--<el-upload-->
            <!--class="upload-demo"-->
            <!--action="https://jsonplaceholder.typicode.com/posts/"-->
            <!--:on-preview="handlePreview"-->
            <!--:on-remove="handleRemove"-->
            <!--:file-list="fileList"-->
            <!--v-show="index === 1 || index === 2"-->
            <!--list-type="picture">-->
            <!--<el-button size="small" type="primary">点击上传图片描述</el-button>-->
            <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
          <!--</el-upload>-->
        </el-form-item>
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
        fileList: [
          {name: 'example1.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
        ],
        problemInfo: [
          {
            name: '题目描述',
            data: '',
            required: true,
          },
          {
            name: '输入描述',
            data: '',
            required: true
          },
          {
            name: '输出描述',
            data: '',
            required: true
          },
          {
            name: '时间限制',
            data: '',
            required: true
          },
          {
            name: '空间限制',
            data: '',
            required: true
          },
          {
            name: '示例',
            content: [
              {
                name: '输入示例',
                data: []
              },
              {
                name: '输出示例',
                data: []
              }
            ],
            required: true
          },
          {
            name: '相关知识点',
            data: [],
            required: false
          },
          {
            name: '答题提示',
            date: '',
            required: false
          },
          {
            name: '建议答题时间',
            data: '',
            required: false
          },
          {
            name: '题目难度',
            data: 0,
            required: false
          }
        ],
        examples: [
          {
            content: [
              {
                value: 'input',
                data: ''
              },
              {
                value: 'output',
                data: ''
              }
            ],
            required: true
          }
        ],
        optionalInfo: [
          {

          }
        ],
        tags:['快速排序','二分法','冒泡排序'],
        tagNew: '',
        rules: {
          empty: [
            { required: true, message: '该项不能为空', trigger: 'blur' }
          ],
          number: [
            { required: true, message: '该项不能为空'},
            { type: 'number', message: '该项必须为数字值'}
          ]
        }
      }
    },
    computed: {
      newTag () {
      }
    },
    methods: {
      addNewTag () {
        if (this.tagNew !== '') {
          this.tags.push(this.tagNew)
          this.problemInfo[this.problemInfo.length-1].data.push(this.tagNew)
          this.tagNew = ''
        }
      },
      backToPrevious () {
        this.$router.go(-1)
      },
      addExamples () {
        let example = {
          content: [
            {
              value: 'input',
              data: ''
            },
            {
              value: 'output',
              data: ''
            }
          ]
        }
        this.examples.push(example)
      },
      deleteExamples (index) {
        this.examples.splice(index, 1)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .upload-demo
    margin-top 10px
  .add-problem-wrapper
    display block
    width 1200px
    padding-top 40px
    h3.problem-title
      border-bottom solid 1px #eee
      font-size 30px
      line-height 45px
      font-weight normal
      a
        margin-right 6px
        color #888
        &:hover
          color #4a667b
    .problem-content-wrapper
      display flex
      flex-wrap wrap
      justify-content space-between
      .row-input
        flex 0 0 40%
        /*padding 0 10px*/
        /*&.problem-description*/
          /*flex 0 0 100%*/
        .row-input-title
          border-left solid 2px #6084a0
          font-size 20px
          line-height 24px
          padding-left 8px
          i
            color #fa7d3c
        .examples
          border 1px solid #dcdfe6
          border-radius 4px
          padding 20px
          .examples-title
            display flex
            align-items center
            justify-content space-between
            i
              color #fa7d3c
              font-size 20px
              font-weight bold
            p
              margin 0
              i
                font-size 14px
                font-weight 14px
            .examples-toolbar
              display flex
              justify-content flex-end
              i
                margin-left 20px
          .examples-content
            margin 10px 0
            /*border solid 1px #dcdfe6*/
            border-radius 4px
            padding 0 0 20px 10px
            h4
              margin 10px 0
              font-weight normal
              font-family 'PingFangTC-Light'

        .knowledge-point
          display flex
          flex-wrap wrap
          label
            margin 0 10px 10px 0
          .add-new
            display flex
            input
              height 14px
              outline none
              text-decoration none
              padding 10px
              margin 0
              border none
              border 1px solid #dcdfe6
              border-radius 4px
              border-bottom-right-radius 0
              border-top-right-radius 0
              border-right 0
            button
              height 36px
              border-top-left-radius 0
              border-bottom-left-radius 0
      .row-input:nth-child(6),
      .row-input:nth-child(7),
      .row-input:first-child
        flex 0 0 100%
      .row-button
        display flex
        flex 0 0 40%
        justify-content flex-end
        align-items flex-end
</style>

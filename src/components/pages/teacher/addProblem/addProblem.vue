<template>
  <div class="add-problem-wrapper">
    <h3 class="problem-title">
      <router-link class="el-icon-arrow-left" :to="{name: 'TchIndex'}"></router-link>
      添加题目
    </h3>
    <form class="problem-content-wrapper">
      <div class="row-input" v-for="(item, index) in problemInfo" :key="index">
        <p>{{item.name}}<i>*</i></p>
        <el-input type="text" clearable v-model="item.data" v-if="index === 0 || index === 6"></el-input>
        <el-input placeholder="请输入时间" v-model="item.data" v-else-if="index === 5">
          <template slot="append">分钟</template>
        </el-input>
        <el-rate v-model="item.data" v-else-if="index === 8"></el-rate>
        <div class="knowledge-point" v-else-if="index === 7">
          <el-checkbox-group v-model="item.data">
            <el-checkbox v-for="tag in tags" :label="tag" border size="medium" :key="tag"></el-checkbox>
          </el-checkbox-group>
          <div class="add-new">
            <input type="text" v-model="tagNew">
            <el-button icon="el-icon-plus" size="medium" @click="addNewTag"></el-button>
          </div>
        </div>
        <el-input type="textarea" clearable v-model="item.data" v-else :autosize="{ minRows: 2, maxRows: 4}"></el-input>
      </div>
      <div class="row-button">
        <el-button>确认添加</el-button>
        <el-button>确认添加并添加下一个</el-button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        problemInfo: [
          {
            name: '题目描述',
            data: ''
          },
          {
            name: '输入描述',
            data: ''
          },
          {
            name: '输出描述',
            data: ''
          },
          {
            name: '输入示例',
            data: ''
          },
          {
            name: '输出示例',
            data: ''
          },
          {
            name: '建议答题时间',
            data: ''
          },
          {
            name: '答题提示',
            date: ''
          },
          {
            name: '相关知识点',
            data: []
          },
          {
            name: '题目难度',
            data: 0
          }
        ],
        tags:['快速排序','二分法','冒泡排序'],
        tagNew: ''
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
      }
    }
  }
</script>

<style scoped lang="stylus">
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
        p
          border-left solid 2px #6084a0
          font-size 20px
          line-height 24px
          padding-left 8px
          i
            color #fa7d3c
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
      .row-button
        flex 0 0 40%
        margin-top 20px
        padding-top 40px
        justify-content flex-end
</style>

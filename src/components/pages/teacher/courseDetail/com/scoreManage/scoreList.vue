<template>
  <div class="score-manage-table-wrapper">
    <el-tabs type="border-card">
      <el-tab-pane label="成绩列表">
        <div class="filter-wrapper">
          <el-input class="filter-input" size="small"></el-input>
          <el-button-group>
            <el-button icon="el-icon-search" size="small"></el-button>
            <el-button icon="el-icon-circle-close-outline" size="small"></el-button>
            <el-button class="icon-download" size="small"></el-button>
          </el-button-group>
        </div>
        <el-table :data="scoreData" class="score-manage-table">
          <el-table-column type="index" label="编号"></el-table-column>
          <el-table-column label="学生姓名"></el-table-column>
          <el-table-column label="学号/账号"></el-table-column>
          <el-table-column label="院系"></el-table-column>
          <el-table-column :label="item.label" v-for="(item, index) in weight" :key="index"></el-table-column>
          <el-table-column label="综合成绩"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="权重管理" class="weight-manage-panel">
        <form class="weight-edit-form">
          <div class="input-item" v-for="(item,index) in weight" :key="index">
            <label>{{item.label}}</label>
            <!--<el-input v-model="item.weight" class="weight-input">-->
            <!--<template slot="append">%</template>-->
            <!--</el-input>-->
            <el-input-number v-model="item.weight"
                             controls-position="right"
                             :min="1"
                             :max="100"
                             class="weight-input"
                             size="small">
            </el-input-number>
          </div>
        </form>
        <div class="input-unit">
          <el-tag type="warning">权重按100分计算 单位（%）</el-tag>
          <el-button size="small" type="primary" class="submit-edit">确认修改</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        scoreData: [],
        weight: [
          {
            label: '课程视频(%)',
            weight: 5
          },
          {
            label: '课程表现(%)',
            weight: 5
          },
          {
            label: '访问次数(%)',
            weight: 5
          },
          {
            label: '章节测试(%)',
            weight: 5
          },
          {
            label: '课后作业(%)',
            weight: 20
          },
          {
            label: '期末考试(%)',
            weight: 60
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped lang="stylus">
  .score-manage-table-wrapper
    margin-top 40px
    .filter-wrapper
      display flex
      justify-content flex-end
      .filter-input
        max-width 200px
        margin-right 4px
    .score-manage-table
      margin-top 60px
    .weight-manage-panel
      display flex
      .weight-edit-form
        display flex
        flex 0 0 70%
        padding 10px
        flex-wrap wrap
        .input-item
          display flex
          align-items center
          flex 0 0 50%
          margin 10px 0
        .weight-input
          margin-left 20px
      .input-unit
        display flex
        flex-direction column
        justify-content center
        .submit-edit
          margin-top 20px
</style>

<template>
  <div class="add-contest-wrapper">
    <div class="contest-title-wrapper">
      <h3 class="contest-title">
        <router-link class="el-icon-arrow-left" :to="{name: 'AddContest'}"></router-link>
        添加比赛
      </h3>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ name: 'TchIndex' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{name: 'AddContest'}">添加比赛</el-breadcrumb-item>
        <el-breadcrumb-item>自动组卷</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="contest-info-wrapper">
      <div class="contest-info-title">
        <p class="contest-info-title">比赛基本信息</p>
        <!--<el-button size="small" v-show="status === 'edit'">保存编辑</el-button>-->
        <!--<el-button size="small" @click="status = 'edit'" v-show="status === 'check'">打开编辑</el-button>-->
      </div>
      <form class="basic-info">
        <div class="row-data" v-for="(item, index) in basicInfo" :key="index">
          <p v-show="index <= 3"><i>*</i>{{item.name}}</p>
          <el-input type="text" clearable v-model="basicInfo[0].data" v-show="index === 0" autofocus></el-input>
          <el-date-picker
            v-show="index === 1"
            v-model="basicInfo[1].data"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <el-cascader
            v-show="index === 2"
            :options="options"
            :show-all-levels="false"
            v-model="basicInfo[2].data"
          ></el-cascader>
          <!--<div class="attend-member" v-show="index === 3">-->
            <!--<el-select v-model="basicInfo[3].data" multiple placeholder="请选择">-->
              <!--<el-option-->
                <!--v-for="opt in optionPerson"-->
                <!--:key="opt.value"-->
                <!--:label="opt.label"-->
                <!--:value="opt.value">-->
              <!--</el-option>-->
            <!--</el-select>-->
            <!--<el-button>管理分组</el-button>-->
          <!--</div>-->
        </div>
      </form>
      <div class="contest-info-title">
        <p class="contest-info-title">已选题目列表</p>
      </div>
      <el-table
        :data="tableData4"
        border
        class="autocomplete-table"
      >
        <!--<el-table-column-->
          <!--type="selection"-->
          <!--width="55">-->
        <!--</el-table-column>-->
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="题目编号">
                <span>{{ props.row.index }}</span>
              </el-form-item>
              <el-form-item label="题目标题">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="题目描述">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="题目难度">
                <span>{{ props.row.hard }}</span>
              </el-form-item>
              <el-form-item label="题目知识点">
                <span>{{ props.row.tag }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="题目标题"
          prop="name">
        </el-table-column>
        <el-table-column
          label="题目描述"
          prop="description">
        </el-table-column>
        <el-table-column
          label="题目使用次数"
          prop="total_use">
        </el-table-column>
        <el-table-column
          label="题目最近使用时间"
          prop="date">
        </el-table-column>
        <el-table-column label="通过率">
          <template slot-scope="scope">
            <span>{{ Math.ceil(scope.row.access/scope.row.total*100) }}%</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="contest-info-title">
        <p class="contest-info-title">比赛题目组建</p>
      </div>
      <div class="contest-problem-wrapper">
        <div class="row">
          <div class="left">
            <div class="title">
              <h3>题量</h3>
            </div>
            <el-select placeholder="请选择" v-model="optionalInfo[0].data" size="mini">
              <el-option
                v-for="opt in 10"
                :key="opt"
                :label="opt"
                :value="opt">
              </el-option>
            </el-select>
          </div>
          <div class="right">
            <div class="title">
              <h3>难度</h3>
            </div>
            <el-rate v-model="optionalInfo[1].data" size="mini"></el-rate>
          </div>
        </div>
        <div class="row">
          <div class="title">
            <h3>知识点选择</h3>
          </div>
          <div class="knowledge-point">
            <el-checkbox-group v-model="optionalInfo[2].data">
              <el-checkbox v-for="tag in tags" :label="tag" border size="mini" :key="tag"></el-checkbox>
            </el-checkbox-group>
            <div class="add-new">
              <input type="text" v-model="tagNew">
              <el-button icon="el-icon-plus" size="mini" @click="addNewTag"></el-button>
            </div>
          </div>
        </div>
        <div class="row time-limit-row">
          <div class="title">
            <h3>题目使用筛选</h3>
          </div>
          <div class="time-limit">
            近
            <el-select v-model="optionalInfo[3].data" filterable allow-create size="mini">
              <el-option v-for="item in 10" :key="item" :label="item" :value="item">
              </el-option>
            </el-select>
            <el-select v-model="optionalInfo[3].unit" size="mini">
              <el-option v-for="item in timeUnit" :key="item.unit" :label="item.label" :value="item.unit"></el-option>
            </el-select>
            未使用
          </div>
        </div>
      </div>
      <a @click="toAddProblem"class="addProblem">没找到合适的题？点击手动添加题目至题库</a>
      <el-table
        :data="tableData5"
        border
        class="autocomplete-table"
        @selection-change="handleSelectChange"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="题目编号">
                <span>{{ props.row.index }}</span>
              </el-form-item>
              <el-form-item label="题目标题">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="题目描述">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="题目难度">
                <span>{{ props.row.hard }}</span>
              </el-form-item>
              <el-form-item label="题目知识点">
                <span>{{ props.row.tag }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="题目标题"
          prop="name">
        </el-table-column>
        <el-table-column
          label="题目描述"
          prop="description">
        </el-table-column>
        <el-table-column
          label="题目使用次数"
          prop="total_use">
        </el-table-column>
        <el-table-column
          label="题目最近使用时间"
          prop="date">
        </el-table-column>
        <el-table-column label="通过率">
          <template slot-scope="scope">
            <span>{{ Math.ceil(scope.row.access/scope.row.total*100) }}%</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="button-group">
        <el-button type="success" plain v-show="addButtonShow" @click="addProblemToSelected">添加选中题目</el-button>
        <el-button type="success" plain>保存编辑</el-button>
        <el-button type="warning" plain>及时发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        status: 'edit',
        basicInfo: [
          {
            name: '比赛标题',
            data: ''
          },
          {
            name: '比赛时间',
            data: ''
          },
          {
            name: '参赛形式',
            data: []
          }
        ],
        optionalInfo: [  // 可选填条件
          {
            name: '题量',
            data: ''
          },
          {
            name: '难度',
            data: 0
          },
          {
            name: '知识点',
            data: []
          },
          {
            name: '近期使用次数限制',
            data: 1,
            unit: 'month'
          }
        ],
        timeUnit: [
          {
            label: '日',
            unit: 'day'
          },
          {
            label: '月',
            unit: 'month'
          },
          {
            label: '年',
            unit: 'year'
          }
        ],
        options: [
          {
            value: 'single',
            label: '个人赛'
          },
          {
            value: 'group',
            label: '团体赛',
            children: [
              {
                value: 'two',
                label: '双人组赛'
              },
              {
                value: 'three',
                label: '三人组赛'
              },
              {
                value: 'four',
                label: '四人组赛'
              }
            ]
          }
        ],
        tags: ['快速排序', '二分法', '冒泡排序'],
        tagNew: '',
        optionPerson: [
          {
            value: 'all',
            label: '全部'
          },
          {
            value: '1',
            label: 'group1（ben,peter,kitty）'
          },
          {
            value: '2',
            label: 'group2（ben,peter,kitty）'
          }
        ],
        tableData4: [
          // {
          //   "index": 1,
          //   "date": "2016-05-03",
          //   "name": "A+B 问题",
          //   "description": "Calculate a+b",
          //   "tag": ["快速排序","二分法"],
          //   "hard": "简单",
          //   "total": 1749,
          //   "access": 880,
          //   "total_use": 5
          // }
        ],
        tableData5: [
          {
            "index": 1,
            "date": "2016-05-03",
            "name": "A+B 问题",
            "description": "Calculate a+b",
            "tag": ["快速排序","二分法"],
            "hard": "简单",
            "total": 1749,
            "access": 880,
            "total_use": 5
          },
          {
            "index": 3,
            "date": "2016-05-03",
            "name": "A+B 问题",
            "description": "Calculate a+b",
            "tag": "算法",
            "hard": "简单",
            "total": 1749,
            "access": 880,
            "total_use": 1
          },
          {
            "index": 4,
            "date": "2016-05-03",
            "name": "A+B 问题",
            "description": "Calculate a+b",
            "tag": "算法",
            "hard": "简单",
            "total": 1749,
            "access": 880,
            "total_use": 5
          },
          {
            "index": 7,
            "date": "2016-05-03",
            "name": "A+B 问题",
            "description": "Calculate a+b",
            "tag": "算法",
            "hard": "简单",
            "total": 1749,
            "access": 880,
            "total_use": 5
          },
          {
            "index": 8,
            "date": "2016-05-03",
            "name": "A+B 问题",
            "description": "Calculate a+b",
            "tag": "算法",
            "hard": "简单",
            "total": 1749,
            "access": 880,
            "total_use": 5
          },
          {
            "index": 9,
            "date": "2016-05-03",
            "name": "A+B 问题",
            "description": "Calculate a+b",
            "tag": "算法",
            "hard": "简单",
            "total": 1749,
            "access": 880,
            "total_use": 5
          }
        ],
        addButtonShow: false,
        selection: []
      }
    },
    methods: {
      handleDelete  (index, row) {
        this.tableData4.splice(index, 1)
      },
      handleSelectChange (selection) {
        if (selection.length !== 0) {
          this.addButtonShow = true
          this.selection = selection
        } else {
          this.addButtonShow = false
        }
      },
      addProblemToSelected () {
        for (let item in this.selection) {
          this.tableData4.push(this.selection[item])
        }
      },
      addNewTag () {
        console.log(this.tagNew)
        if (this.tagNew !== '') {
          this.tags.push(this.tagNew)   //  新增
          this.optionalInfo[2].data.push(this.tagNew)    // 选中状态
          this.tagNew = ''
        }
      },
      toAddProblem () {
        this.$confirm('即将跳转,您的编辑已作为草稿保存 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({name: 'AddProblem'})
        }).catch(() => {
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .add-contest-wrapper
    display block
    width 1200px
    padding-top 40px
    .contest-title-wrapper
      display flex
      align-items flex-end
      justify-content space-between
      border-bottom solid 1px #eee
      h3.contest-title
        font-size 30px
        line-height 45px
        font-weight normal
        margin 0
        a
          margin-right 6px
          color #888
          &:hover
            color #4a667b
      .el-breadcrumb
        margin-bottom 8px
    .contest-info-wrapper
      font-family 'PingFangTC-Light'
      display flex
      flex-direction column
      .contest-info-title
        display flex
        justify-content space-between
        margin 20px 0
        /*padding 4px 0*/
        p
          border-left solid 2px #6084a0
          font-size 20px
          line-height 32px
          padding-left 8px
          margin 0
      .basic-info
        display flex
        justify-content space-between
        flex-wrap wrap
        .row-data
          flex 0 0 40%
          p
            i
              color #fa7d3c
              margin-right 8px
          .el-date-editor--datetimerange.el-input__inner,
          .el-select,
          .el-cascader
            width 100%
          .attend-member
            display flex
            button
              margin-left 8px
    .contest-problem-wrapper
      display flex
      flex-direction column
      font-size 14px
      border solid 1px #c2d0da
      .row
        display flex
        &:not(:first-child)
          border-top solid 1px #c2d0da
          .title
            flex 0 0 15%
        .title
          display flex
          justify-content center
          align-items center
          flex 0 0 30%
          background #f5f7fa
          border-right solid 1px #c2d0da
          h3
            margin 0
            font-family 'PingFangTC-Light'
            font-weight normal
        & > div
          padding 10px 0px
        .add-new
          display flex
          flex 0 0 100%
          margin-left 20px
          input
            height 14px
            outline none
            text-decoration none
            padding 6px
            margin 0
            border none
            border 1px solid #dcdfe6
            border-radius 4px
            border-bottom-right-radius 0
            border-top-right-radius 0
            border-right 0
          button
            height 28px
            border-top-left-radius 0
            border-bottom-left-radius 0
        .knowledge-point
          display flex
          flex-direction column
          flex 0 0 70%
          .el-checkbox-group
            margin-left 20px
          label
            margin 0 10px 10px 0
        &:first-child
          justify-content space-between
          .left, .right
            flex 0 0 50%
            padding 0
            display flex
            & > div
              padding 10px 0
              display flex
              align-items center
            .el-select
              width 50%
              margin-left 20px
            .el-rate
              margin 0 auto
          .right
            .title
              border-left solid 1px #c2d0da
      .time-limit-row
        .time-limit
          margin-left 20px
          .add-new
            margin-left 0
            margin-top 10px

    .autocomplete-table
      margin-top 10px
    .addProblem
      align-self flex-end
      margin-top 50px
      color #6084a0
      &:hover
        text-decoration underline
    .button-group
      align-self flex-end
      margin-top 20px
</style>

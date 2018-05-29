<template>
  <div class="teacher-index-wrapper">
    <div class="course-manage">
      <p class="semester">当前学期：{{semester}}</p>
      <p>
        课程管理
        <a @click="isCourseShow = !isCourseShow">
          <span v-show="isCourseShow"><i class="el-icon-arrow-down"></i>收起</span>
          <span v-show="!isCourseShow"><i class="el-icon-arrow-up"></i>展开</span>
        </a>
      </p>
      <cube :type="'course'" @semester="changeSemester" v-show="isCourseShow"></cube>
    </div>
    <div class="contest-manage">
      <p>
        比赛管理
        <a @click="isContestShow = !isContestShow">
          <span v-show="isContestShow"><i class="el-icon-arrow-down"></i>收起</span>
          <span v-show="!isContestShow"><i class="el-icon-arrow-up"></i>展开</span>
        </a>
      </p>
      <cube :type="'contest'" v-show="isContestShow"></cube>
    </div>
    <div class="teach-assist">
      <p>教务辅助</p>
      <cube :type="'assist'"></cube>
    </div>
  </div>
</template>

<script>
  import cube from './com/cube.vue'
  export default {
    data () {
      return {
        semester: '暂无',
        isCourseShow: true,
        isContestShow: true
      }
    },
    components: {
      cube
    },
    methods: {
      changeSemester (semester) {
        this.semester = semester
      }
    }
  }
</script>

<style scoped lang="stylus">
  .teacher-index-wrapper
    width 1200px
    padding-top 40px
    display block
    & > div
      display flex
      flex-direction column
      margin-bottom 40px
      p.semester
        align-self flex-end
        color #4a667b
        font-family 'Heiti SC'
        font-weight bold
      p:not(.semester)
        padding-left 10px
        font-size 20px
        margin 0
        margin-bottom 30px
        border-left solid 3px #4a667b
        display flex
        justify-content space-between
        align-items flex-end
        font-family 'Heiti SC'
        font-weight bold
        a
          font-size 14px
          color #4a667b
          font-family 'Heiti SC'
          transition all ease-in-out .3s
          i
            transition all ease-in-out .3s
            margin-right 10px
          &:hover
            text-decoration underline
            i
              transform rotate(180deg)
              text-decoration none

</style>

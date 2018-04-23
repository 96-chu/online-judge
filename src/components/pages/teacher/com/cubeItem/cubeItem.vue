<template>
  <div class="cube-item-wrapper">
    <div class="cube-content" v-for="item in cubeData" @click="toDetail" :class="type">
      <div class="id-row" v-show="type === 'course'">
        <p class="courseId">{{item.id}}</p>
        <p>{{item.stu_level}}&nbsp;课程</p>
      </div>
      <p class="title-name">{{item.name}}</p>
      <div class="course-info">
        <p v-show="type === 'course'">学生人数：{{item.stu_total}}</p>
        <p v-show="type === 'contest'">参与小组：{{item.group_total}}</p>
        <!--<p v-show="type === 'contest'">开始时间：{{item.time_start}}</p>-->
        <p v-show="type === 'contest'">结束时间：{{item.time_end}}</p>
      </div>
    </div>
    <div class="cube-content cube-add" v-show="type === 'contest'">
      <a class="el-icon-circle-plus-outline"></a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cubeData: [],
        type: null
      }
    },
    created () {
    },
    methods: {
      toDetail () {
        if (this.type === 'course') {
          this.$router.push({name: 'stuInfo'})
        } else {
          this.$router.push({name: 'TchContestDetail'})
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .cube-item-wrapper
    display flex
    width 100%
    flex-wrap wrap
    .cube-content
      height 180px
      max-width 270px
      width 270px
      border-radius 0 15px
      flex 0 0 33.33%
      box-shadow 0 0 2px 0px rgba(0,0,0,0.3)
      font-family 'Songti SC Regular'
      padding 20px
      /*background url("~assets/teacher/cubeBg/bg.png")*/
      display flex
      flex-direction column
      transition all ease-in-out .3s
      cursor pointer
      &.course
        background url("~assets/teacher/cubeBg/course.jpg") no-repeat center
        background-size cover
      &.contest
        background url("~assets/teacher/cubeBg/contest.png") no-repeat center
        background-size cover
      &:hover
        box-shadow 0 2px 10px 0px rgba(0,0,0,0.3)
      &:nth-child(n+4)
        margin-top 20px
      &:nth-child(3n+2), &:nth-child(3n+3)
        margin-left 40px
      p
        margin 0
      &.course > p, .id-row, .course-info
        background rgba(255, 255, 255, .3)
      .id-row
        display flex
        justify-content space-between
        font-size 16px
        flex 1
        max-height 22px
      .title-name
        font-size 24px
        color #242424
        overflow hidden
        text-overflow ellipsis
        white-space nowrap/*加宽度width属来兼容部分浏览*/
        flex 1
        font-family "Songti SC"
        font-weight bold
      .course-info
        color #535953
    .cube-add
      display flex
      justify-content center
      align-items center
      font-size 80px
      color #ccc
      transition all ease-in-out .3s
      background url("~assets/teacher/cubeBg/bg.png")
      &:hover
        color #616138
</style>

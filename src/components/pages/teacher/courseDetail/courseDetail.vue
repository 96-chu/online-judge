<template>
  <div class="course-detail-wrapper">
    <div class="course-title">
      <p class="course-title-com"><a class="el-icon-arrow-left" @click="$router.push({name: 'TchIndex'})"></a>数据结构&nbsp;<span>[00860086]</span></p>
      <ul class="sub-title">
        <li v-for="(item, index) in contentTitle"
            class="title-list"
            :class="{active: item.name.match($route.name)}"
            @click="changeOption(index)">
          <a>{{item.title}}</a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import studentInfo from './com/stuInfo/studentInfoTable.vue'
  export default {
    data () {
      return {
        contentTitle: [
          {
            title: '学生信息',
            isActive: false,
            name: 'stuInfo'
          },
          {
            title: '成绩管理',
            isActive: false,
            name: 'scoreManage&weightEdit'
          },
          {
            title: '作业管理',
            isActive: false,
            name: 'workManage'
          }
        ]
      }
    },
    components: {
      studentInfo
    },
    methods: {
      changeOption (index) {
        for (let i in this.contentTitle) {
          this.contentTitle[i].isActive = false
        }
        this.contentTitle[index].isActive = true
        if (index === 1) {
          this.$router.push({name: 'scoreManage'})
        } else {
          this.$router.push({name: this.contentTitle[index].name})
        }
      }
    },
    created () {
    }
  }
</script>

<style scoped lang="stylus">
  p
    margin 0
  .course-detail-wrapper
    display block
    width 1200px
    padding-top 40px
    .course-title
      display flex
      justify-content space-between
      border-bottom solid 1px #eee
      p.course-title-com
        font-size 30px
        font-weight normal
        line-height 45px
        margin 0
        span
          font-size 14px
        a
          margin-right 6px
          color #888
          &:hover
            color #4a667b
      .sub-title
        display flex
        justify-content space-between
        width 30%
        list-style none
        margin 0
        .title-list
          align-self flex-end
          font-family 'STHeitiSC-Light'
          font-size 16px
          line-height 30px
          color #888
          padding 0 6px
          transition all ease-in-out .3s
          &:hover
            color #4a667b
          &.active
            border-bottom solid 1px #4a667b
            color #000

</style>

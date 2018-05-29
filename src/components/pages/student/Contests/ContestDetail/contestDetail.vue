<template>
  <div class="contest-detail-wrapper">
    <h3 class="contest-title">
      ACM寒假训练题
      <span class="status" :class="indexInfo.status.value">{{status}}</span>
    </h3>
    <div class="contest-status-info">
      <div class="info" v-for="info in indexInfo" :class="info.name === '状态'? 'status' : ''">
        <h4>{{info.name}}</h4>
        <p>{{info.data}}</p>
      </div>
    </div>
    <div class="contest-detail-content">
      <div class="left-panel">
        <div class="content-menu-list" v-if="$store.state.roles !== 'tch'">
          <div v-for="item in contentTitle" :class="{active: item.name === $route.name}" @click="changeOption(item.name)">{{item.title}}</div>
        </div>
        <div class="content-menu-list" v-else>
          <div v-for="item in tchContentTitle" :class="{active: item.name === $route.name}" @click="changeOption(item.name)">{{item.title}}</div>
        </div>
      </div>
      <div class="right-panel">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        contentTitle: [
          {
            title: '题目列表',
            name: 'ContestProblemList'
          },
          {
            title: '提交',
            name: 'SubmissionList'
          },
          {
            title: '排名',
            name: ''
          }
        ],
        tchContentTitle: [
          {
            title: '题目列表',
            name: 'ContestProblemList'
          },
          {
            title: '排名',
            name: ''
          }
        ],
        indexInfo: {
          start_time: {
            name: '开始时间',
            data: '2018年2月21日 19:00'
          },
          end_time: {
            name: '结束时间',
            data: '2018年2月28日 00:00'
          },
          status: {
            name: '状态',
            data: '已结束',
            value: 'ended'
          },
          type: {
            name: '比赛类型',
            data: '公开赛'
          },
          creater: {
            name: '创建者',
            data: 'Admin'
          }
        }
      }
    },
    created () {
    },
    computed: {
      status () {
        if ( this.indexInfo.status.value === 'ended') {
          return '已结束'
        }
      }
    },
    methods: {
      changeOption (name) {
        // console.log(this.$route.params.contestId)
        this.$router.push({name: name, params: { contestId: this.$route.params.contestId }})
      }
    }
  }
</script>

<style scoped lang="stylus">
  .contest-detail-wrapper
    display block
    /*flex 1*/
    margin-top 40px
    .contest-title
      width 1200px
      font-size 30px
      line-height 45px
      font-weight normal
      margin 0
      border-bottom solid 1px #eee
      .ended
        background #ffb098
        font 16px 'STHeitiSC-Light'
        padding 4px
        border-radius 4px
    .contest-status-info
      display flex
      flex-wrap wrap
      justify-content space-between
      .info
        /*flex 0 0 20%*/
        h4
          border-bottom solid #ffd04b 2px
          line-height 43px
          font-weight normal
          margin 0
    .contest-detail-content
      width 1200px
      display flex
      margin-top 20px
      font-family 'STHeitiSC-Light'
      .left-panel
        display flex
        flex-direction column
        flex 0 0 25%
        .content-menu-list
          display flex
          flex-direction column
          & > div
            font-family 'STHeitiSC-Light'
            font-size 16px
            line-height 45px
            padding 0px 8px
            color #888
            cursor pointer
            &:hover
              color #000
            &.active
              border-left solid #ffd04b 2px
              background #fff4d4
              color #000
      .right-panel
        display flex
        flex-direction column
        flex 1
        margin-left 40px
</style>

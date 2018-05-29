<template>
  <div class="notice-detail-wrapper">
    <div class="notice-detail-content">
      <h2 class="notice-detail-title">{{notice.title}}</h2>
      <div class="info">
        <p>作者：{{notice.writer}}</p>
        <p>创建时间：{{notice.create_time}}</p>
        <p>更新时间：{{notice.update_time}}</p>
      </div>
      <p v-html="notice.content"></p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        notice: {
          title: '2016级新生《计算机程序设计实训》OJ使用向导',
          writer: 'Darrell',
          create_time: '2017年7月3日 17:45',
          update_time: '2017年7月3日 17:45',
          content: '步骤如下：<br>' +
          '1、打开网页acmoj.shu.edu.cn' +
          '<br>' +
          '2、在上方导航栏点击“比赛”' +
          '<br>' +
          '3、在比赛列表中选择“25程序设计实训示例题”、“19程序设计实训基础题A”（必做）、“20程序设计实训基础题B”（选做）' +
          '<br>' +
          '以上，欢迎各位学弟学妹来到计算机学院！祝AC愉快^_^'
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .notice-detail-wrapper
    display block
    /*flex 1*/
    margin-top 40px
    .notice-detail-content
      display flex
      width 1200px
      flex-direction column
      .notice-detail-title
        align-self center
      .info
        display flex
        font-size 14px
        align-self center
        p
          margin 0
        p:not(:first-child)
          margin-left 16px
</style>

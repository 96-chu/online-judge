<template>
    <footer class="footer-wrapper">
      <!--<div class="info">-->
        <!--<router-link :to="{name: 'NoticeDetail'}">关于</router-link>-->
        <!--<router-link :to="{name: 'Help'}">帮助</router-link>-->
      <!--</div>-->
      <span class="copyright">copyright &copy; 2018 上海大学计算机学院</span>
    </footer>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus">
  .footer-wrapper
    display flex
    flex-direction column
    justify-content flex-end
    align-items center
    font-size 12px
    flex 1
    padding-top 100px
    min-height 24px
    .copyright
      margin-bottom 10px

    /*.info*/
      /*padding 5px 0*/
      /*a*/
        /*color #242424*/
        /*font-weight bold*/
        /*text-decoration underline*/
      /*a:first-child*/
        /*margin-right 8px*/
</style>

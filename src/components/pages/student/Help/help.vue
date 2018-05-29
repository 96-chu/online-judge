<template>
  <div class="help-wrapper">
    <h3 class="help-title">
      帮助
    </h3>
    <div class="help-content">
      <el-menu
        default-active="1"
        class="el-menu-vertical"
        >
        <el-menu-item index="1" @click="handleOpen(1)">
          <i class="el-icon-info"></i>
          <span slot="title">编译结果</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-info"></i>
            <span>编译参数</span>
          </template>
          <el-menu-item index="2-1" @click="handleOpen(2.1)">C (GCC 4.8)</el-menu-item>
          <el-menu-item index="2-2" @click="handleOpen(2.2)">C++（G++ 4.3</el-menu-item>
          <el-menu-item index="2-3" @click="handleOpen(2.3)">Java（Oracle JDK 1.7）</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" @click="handleOpen(3)">
          <i class="el-icon-info"></i>
          <span slot="title">常见问题</span>
        </el-menu-item>
      </el-menu>
      <div class="help-menu-content">
        <ol v-show="menuIndex === 1" class="result-list">
          <li>Accepted: 你的答案符合判题标准</li>
          <li>Runtime Error: 你的程序运行时出现错误（指针越界，栈溢出，有未处理的异常，主函数返回值非零等）</li>
          <li>Time Limit Exceeded: 你的程序执行时间超出题目要求</li>
          <li>Memory Limit Exceeded: 你的程序内存使用超出题目要求</li>
          <li>Compile Error: 你的程序在编译（包括链接）时出现错误</li>
          <li>Wrong Answer: 你的程序输出的答案不符合判题标准</li>
          <li>System Error: 判题系统发生故障，请等待重判</li>
          <li>Waiting: 你的提交正在等待处理</li>
        </ol>
        <p class="compile-parameter" v-show="menuIndex === 2.1">gcc -DONLINE_JUDGE -O2 -w -std=c99 {src_path} -lm -o {exe_path}main</p>
        <p class="compile-parameter" v-show="menuIndex === 2.2">g++ -DONLINE_JUDGE -O2 -w -std=c++11 {src_path} -lm -o {exe_path}main</p>
        <p class="compile-parameter" v-show="menuIndex === 2.3">
          //编译<br>
          javac {src_path} -d {exe_path}<br>
          //运行<br>
          java -cp {exe_path} Main
        </p>
        <ul v-show="menuIndex === 3" class="faq-list">
          <li>无特殊说明，请使用标准输入输出。</li>
          <li>Java 代码需使用 Main 作为主类名。C/C++代码使用<code>int main()</code>，并且需要<code>return 0;</code>。</li>
          <li>C/C++ 的64位整数类型，请使用 <code>long long</code> 声明，使用 <code>cin/cout</code> 或 <code>%lld</code> 输入输出。
            使用<code>__int64</code>会导致编译错误。</li>
          <li>程序执行时间指CPU时间，占用内存按执行过程中内存消耗的峰值计，有多组测试数据时以最大的时间和内存消耗为准</li>
          <li>判题的时候会去除你的输出的最后的换行和空格，然后与去除最后的换行和空格的答案做比较，如果不一致就是 Wrong Answer。
            其余的行末空格和空行不去除，看清楚题目的要求。没有格式错误。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        leftMenu: [
          {
            index: "1",
            title: '判题结果'
          },
          {
            index: "2",
            title: '编译参数'
          },
          {
            index: "3",
            title: '常见问题'
          }
        ],
        menuIndex: 1
      }
    },
    methods: {
      handleOpen (index) {
        this.menuIndex = index
      }
    }
  }
</script>

<style scoped lang="stylus">
  .help-wrapper
    display block
    width 1200px
    padding-top 40px
    h3.help-title
      border-bottom solid 1px #eee
      font-size 30px
      line-height 45px
      font-weight normal
  .help-content
    display flex
    .el-menu-vertical
      flex 0 0 25%
      span
        font-size 18px
    .help-menu-content
      margin-left 20px
      flex 1
      .result-list,
      .faq-list
        list-style-type disc
        margin 0
        li
          font-size 14px
          line-height 1.5
      .compile-parameter
        font-size 14px
        padding 10px
        border solid 1px #e6e6e6
</style>

/**
 * created by melody   2018/3/11
 **/
import Label from './Label.vue'

// 这里是重点

const Labels = {
  install: function (Vue) {
    Vue.component('Labels', Label)
  }
}

// 导出组件
export default Labels

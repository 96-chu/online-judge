/**

 * author:      melody
 * createTime:      2018/3/10 13:05
 * description:

 **/

import Notice from './Notice.vue'

// 这里是重点

const Notices = {
  install: function (Vue) {
    Vue.component('Notices', Notice)
  }
}

// 导出组件
export default Notices

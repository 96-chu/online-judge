// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import codeMirror from 'vue-codemirror-lite'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js'
import asyncRouterMap from '@/router'


//引入自定义组件
import Notices from './components/globalCom/Notice'
import Labels from './components/globalCom/Label'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Notices)
Vue.use(Labels)
Vue.use(codeMirror)
Vue.use(Vuex)
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

//  路由全局钩子
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    if (sessionStorage.roles !== 'tch') {
      next({
        name: 'Home',
      })
    }
    else {
      next()
    }
  } else {
    next()
  }
})

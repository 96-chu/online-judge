import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Problem from '@/components/pages/Problems/problems.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/problems',
      component: Problem,
      name: 'problem'
    }
  ]
})

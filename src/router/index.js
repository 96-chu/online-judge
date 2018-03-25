import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Problem from '@/components/pages/Problems/problems.vue'
import ProblemDetail from '@/components/pages/Problems/com/problemDetail.vue'
import Contests from '@/components/pages/Contests/contests.vue'
import Submissions from '@/components/pages/Problems/com/submissions.vue'
import ProblemIndex from '@/components/pages/Problems/com/problemIndex.vue'

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
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/home/login',
    //   component: Home,
    //   name: 'Login'
    // },
    {
      path: '/home/register',
      component: Home,
      name: 'Register'
    },
    {
      path: '/problems',
      component: Problem,
      name: 'Problem'
    },
    {
      path: '/problems/:problemId',
      component: ProblemDetail,
      name: 'ProblemDetail',
      redirect: '/problems/:problemId/index',
      children: [
        {
          path: '/problems/:problemId/submissions',
          component: Submissions,
          name: 'Submissions'
        },
        {
          path: '/problems/:problemId/index',
          component: ProblemIndex,
          name: 'ProblemIndex'
        }
      ]
    },
    {
      path: '/contests',
      component: Contests,
      name: 'Contests'
    }
  ],
  // 每次router到新的页面就会滚到顶部
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

//  学生权限页面
// import Problem from '@/components/pages/student/Problems/problems.vue'
// import ProblemDetail from '@/components/pages/student/Problems/com/problemDetail.vue'
// import Submissions from '@/components/pages/student/Problems/com/submissions.vue'
// import ProblemIndex from '@/components/pages/student/Problems/com/problemIndex.vue'
// import Contests from '@/components/pages/student/Contests/contests.vue'
// import ContestDetail from '@/components/pages/student/Contests/ContestDetail/contestDetail.vue'
// import ContestIndex from '@/components/pages/student/Contests/ContestDetail/com/contestIndex.vue'
//  懒加载
const Problem = (resolve) => {
  import('@/components/pages/student/Problems/problems.vue').then((module) => {
    resolve(module)
  })
}
const ProblemDetail = (resolve) => {
  import('@/components/pages/student/Problems/com/problemDetail.vue').then((module) => {
    resolve(module)
  })
}
const Submissions = (resolve) => {
  import('@/components/pages/student/Problems/com/submissions.vue').then((module) => {
    resolve(module)
  })
}
const ProblemIndex = (resolve) => {
  import('@/components/pages/student/Problems/com/problemIndex.vue').then((module) => {
    resolve(module)
  })
}
const Contests = (resolve) => {
  import('@/components/pages/student/Contests/contests.vue').then((module) => {
    resolve(module)
  })
}
const ContestDetail = (resolve) => {
  import('@/components/pages/student/Contests/ContestDetail/contestDetail.vue').then((module) => {
    resolve(module)
  })
}
const ContestIndex = (resolve) => {
  import('@/components/pages/student/Contests/ContestDetail/com/contestIndex.vue').then((module) => {
    resolve(module)
  })
}

//  教师权限页面
const TchIndex = (resolve) => {
  import('@/components/pages/teacher/index.vue').then((module) => {
    resolve(module)
  })
}


Vue.use(Router)

//  不需要权限的页面
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home/register',
    component: Home,
    name: 'Register'
  },
  //  学生权限页面
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
  },
  {
    path: '/contests/:contestId',
    component: ContestDetail,
    name: 'ContestDetail',
    redirect: '/contests/:contestId/index',
    children: [
      {
        path: '/contests/:contestId/index',
        component: ContestIndex,
        name: 'ContestIndex'
      }
    ]
  },
  {
    path: '/tch/index',
    component: TchIndex,
    name: 'TchIndex',
    meta: { requiresAuth: true } //页面需要的权限
  }
]

//实例化vue的时候只挂载constantRouter
export default new Router({
  routes: constantRouterMap,
  // 每次router到新的页面就会滚到顶部
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

//异步挂载的路由
//动态需要根据权限加载的路由表
// export const asyncRouterMap = [
//
// ]


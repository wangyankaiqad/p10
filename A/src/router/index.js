import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/students'
  },
   {
    path: '/',
    meta: {
      title: '公共组件'
    },
    component: () => import('../components/Sidebar.vue'),
    children: [
      {
        path: '/students',
        title: '学生管理',
        name: '学生管理',
        component: () => import('../views/Student.vue')
      },
      {
        path: '/teacher',
        title: '教师管理',
        name: '教师管理',
        component: () => import('../views/Teacher.vue')
      },
      {
        path: '/assistant',
        title: '助教管理',
        name: '助教管理',
        component: () => import('../views/Assistant.vue')
      },
    ]
  }


  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'  //静态导入

//路由懒加载
const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
    
      {
        path: '/commodity',
        component: () => import('../components/Commodity.vue')
      },
      /**关于我们 */
      {
        path: '/about',
        component: () => import('../components/About_us.vue')
      },
      /**详情页 */
      {
        path: '/xqy',
        component: () => import('../components/xqydetails.vue')
      },
      /**购物车 */
      {
        path: '/gwc',
        component: () => import('../components/Shopping_cart.vue')
      },
      /** 我的订单 */
      {
        path: '/order',
        component: () => import('../components/Order.vue')
      },
     



    ]

  },

  {
    path: '*',
    redirect: '/Login'
  },
]
const router = new VueRouter({
  routes
})
//路由守卫-进行全局路由拦截




export default router

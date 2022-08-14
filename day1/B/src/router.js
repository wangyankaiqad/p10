import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import biaoge from './components/biaoge.vue'
import tab from './components/tab.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/biaoge',
          component: biaoge,
        },
        {
          path: '/tab',
          component: tab,
        }
      ]
    },

  ]
})

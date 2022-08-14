import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import xygl from './components/xygl.vue'
import jsgl from './components/jsgl.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/xygl',
          component: xygl
        },
        {
          path: '/jsgl',
          component: jsgl
        },
      ]

    },


  ]
})

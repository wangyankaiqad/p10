import Vue from 'vue'
import Vuex from 'vuex'
import tables from './assets/json数据/tabs.json'
import p from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 原数据
    list: tables.unread,
    // 已读数据
    ydlist: [],
    // 回收站数据
    dellist: []
  },
  mutations: {
    /**已读还原 */
    huan1(state, val) {
      // 添加给未读数组
      state.list.push(val)
      // 根据id找下标
      let idd = state.ydlist.findIndex(item => item.id == val.id)
      // 讲已读数组里面的数据根据下标进行删除
      state.ydlist.splice(idd, 1)
    },
    /**清空 */
    qing(state) {
      // 直接讲回收站数组清空
      state.dellist = []
    },
    /**还原 */
    huan(state, val) {
      // 添加给未读数组
      state.list.push(val)
      let idd = state.dellist.findIndex(item => item.id == val.id)
      // 讲回收数组里面的数据根据下标进行删除
      state.dellist.splice(idd, 1)
    },
    /**
     * 点击全部删除
     * */
    delAll(state) {
      // 讲已读的数据全部放进删除的数据中
      state.ydlist.forEach(item => {
        state.dellist.push(item)
      })
      // 讲已读数据清空
      state.ydlist = []
    },
    /**
     * 点击删除
     * */
    del(state, val) {
      state.dellist.push(val)
      let idd = state.ydlist.findIndex(item => item.id == val.id)
      // 讲已读数组里面的数据根据下标进行删除
      state.ydlist.splice(idd, 1)
    },
    /**点击全部为已读*/
    yiduAll(state) {
      state.list.forEach(item => {
        state.ydlist.push(item)
      })
      // 讲未读数组清空
      state.list = []
    },
    /**点击标为已读*/
    yidu(state, val) {
      // 讲点击标为已读的数据添加到已读的数组里面
      state.ydlist.push(val)
      // 根据id找到下标
      let idd = state.list.findIndex(item => item.id == val.id)
      // 讲未读数组里面的数据根据下标进行删除
      state.list.splice(idd, 1)
    }
  },
  actions: {

  },
  plugins: [
    p()
  ]

})

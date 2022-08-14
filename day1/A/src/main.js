import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.prototype.$http = axios
//时间格式化
import moment from 'moment'

Vue.filter('dateFormat', function (date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
})

// 树形表格
import TreeTable from 'vue-table-with-tree-grid'

Vue.use(TreeTable)
// 注册树形表格组件
Vue.component('tree-table', TreeTable)

// axios.defaults.baseURL=''


// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什

//   config.headers.Authorization=sessionStorage.getItem('token')

//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

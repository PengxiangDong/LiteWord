import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/home'

import 'animate.css';



import "./mock"

// 引入mock
import "./mock/login/index";

// 导入VantUI
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 导入axios
import axios from 'axios'
Vue.prototype.$http = axios

// 导入 mock
import './mock/shop'






Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
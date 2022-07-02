import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入mock
import "./mock/login/index";

// 导入VantUI
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 导入axios
import axios from 'axios'
Vue.prototype.$http = axios

// 全局导入公共组件
// import FooterNav from './components/FooterNav.vue'
// Vue.component('FooterNav', FooterNav)


// 全局配置公共组件





Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
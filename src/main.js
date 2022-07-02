import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/home'
import waterfall from 'vue-waterfall2'
import 'animate.css';
Vue.use(waterfall)
import { Popup } from 'vant';
Vue.use(Popup);
import "./mock"

// 引入mock
import "./mock/login/index";

// 导入VantUI
import Vant from 'vant';
import 'vant/lib/index.css';
import { Notify } from 'vant';
import { Toast } from 'vant';

import { ContactList } from 'vant';
import { SwitchCell } from 'vant';
import { Area } from 'vant';

Vue.use(Area);
import { Popup } from 'vant';

Vue.use(Popup);
import { Field } from 'vant';

Vue.use(Field);

Vue.use(SwitchCell);
Vue.use(ContactList);
// 地区
import { Cascader } from 'vant';
Vue.use(Cascader);

// 全局注册
Vue.use(Notify);
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
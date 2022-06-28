import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 默认路径 重定向为 首页
  {
    path: '/',
    redirect: '/home'
  },
  // 登录相关路由-负责人：石磊
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/Login')
  },
  // 首页相关路由-负责人：贾子正
  {
    name: 'home',
    path: '/home',
    component: () => import('../views/Home')
  },
  // 商城相关路由-负责人；董鹏翔
  {
    name: 'shop',
    path: '/shop',
    component: () => import('../views/Shop'),
    meta: {
      keepAlive: true
    }
  },
  // 消息相关路由-吕沁儒
  {
    name: 'message',
    path: '/message',
    component: () => import('../views/Message')
  },
  // 我的 相关路由-郝兰
  {
    name: 'my',
    path: '/my',
    component: () => import('../views/My')
  },
  // 发布页面 相关路由-待定
  {
    name: 'new',
    path: '/new',
    component: () => import('../views/New')
  },

  // 商品详情页
  {
    name: 'details',
    path: '/details',
    component: () => import('../views/GoodsDetails.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
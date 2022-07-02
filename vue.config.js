const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
     proxy: 'http://172.16.107.58:8080/' // 配置访问的服务器地址
     }
})

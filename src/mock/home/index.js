
// 引入 Mock
var Mock = require('mockjs')

// 定义数据类型
 Mock.mock('/home/local', "get", {
    // 20条数据
    "data|24": [{
      // 主图
     "workImage":"http://localhost:8080/img/123.a3d04572.jpg",
    //  标题
      "tatle":"@ctitle(15)",
      // 头像
      "headPhoto":"http://localhost:8080/img/tx.59e92c99.jpg",
      // 网名
      "username":"@ctitle(4)",
      // 点赞数
      "likeWorkNumber|30-500": 30
    }]
  })

  Mock.mock('/home/attention', "get", {
    // 4条数据
    "data|4": [{
      // 主图
     "workImage":"http://localhost:8080/img/123.a3d04572.jpg",
      // 头像
      "headPhoto":"http://localhost:8080/img/tx.59e92c99.jpg",
      // 网名
      "username":"@ctitle(4)",
      // 点赞数
      "likeWorkNumber|30-500": 30,
      // 收藏数量
      "collectNumber|30-500":30,
      // 评论数量
      "commentNumber|30-500":30
    }]
  })
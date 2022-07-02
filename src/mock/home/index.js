
// 引入 Mock
var Mock = require('mockjs')

// 定义数据类型
// 首页
 Mock.mock('/home/finAll', "get", {
    // 20条数据
    "data|24": [{
      "workId|+1":1,
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


  // 关注
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


  // 本地
  Mock.mock('/home/local', "get", {
    // 24条数据
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


  // 详情页
  // Mock.mock('/home/findOne/1', "get", {
  //   // 24条数据
  //   "data|1": [{
  //     // 主图
  //    "workImage":"http://localhost:8080/img/123.a3d04572.jpg",
  //   //  标题
  //     "tatle":"@ctitle(15)",
  //     // 头像
  //     "headPhoto":"http://localhost:8080/img/tx.59e92c99.jpg",
  //     // 网名
  //     "username":"@ctitle(4)",
  //     // 点赞数
  //     "likeWorkNumber|30-500": 30
  //   }]
  // })
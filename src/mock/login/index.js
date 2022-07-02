// // 引入Mock
// var Mock = require('mockjs')

// let mql = [
//     {
//         id: "0",
//         phone: "123123",
//         password: "123",
//         username: "zs",
//         sex: "男",
//         email: "12@qq.com",
//         age: "18"
//     },
//     {
//         id: "1",
//         phone: "123",
//         password: "123",
//         username: "zs",
//         sex: "男",
//         email: "12@qq.com",
//         age: "18"
//     },
// ]


// // 拦截异步请求
// Mock.mock('/login', 'post', (data) => {
//     //传递过来的数据传为对象
//     const body = JSON.parse(data.body)
//     // 拿到传递来的数据
//     const pass = body.data
//     // 是否有此人 所对应的参数
//     let ismql = false
//     let id;
//     // 判断数据库是否有此人
//     mql.forEach(ele => {
//         if (ele.phone == pass.phone) {
//             if (ele.password == pass.password) {
//                 ismql = true
//                 id = ele.id
//             }
//         }
//     })
//     // 返回数据
//     if (ismql) {
//         for (let index = 0; index < mql.length; index++) {
//             if (mql[index].id == id) {
//                 return {
//                     data: mql[index],
//                     meta: {
//                         msg: "登录成功",
//                         status: "200"
//                     }
//                 }
//             }
//         }
//     } else {
//         return {
//             meta: {
//                 msg: "登录失败",
//                 status: "404"
//             }

//         }
//     }
// })


// // 注册
// Mock.mock('/register', 'post', (a) => {
//     //传递过来的数据传为对象
//     const body = JSON.parse(a.body)
//     // 拿到传递来的数据
//     const pass = body.data
//     // 是否有此人 所对应的参数
//     let obj = {
//         id: mql.length,
//         username: pass.username,
//         password: pass.password,
//         phone: pass.phone,
//         sex: pass.sex,
//         age: pass.age,
//         email: pass.email
//     }
//     mql.push(obj)



//     return {
//         meta: {
//             msg: "登录成功",
//             status: "200"
//         }
//     }
// })

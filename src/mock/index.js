// 引入 Mock
import  Mock  from "mockjs";

Mock.mock('/call/shoucang','get',{

    'data|24':[
    {
        // 主图
       "workImage":"http://localhost:8080/img/five.2cafd798.jpg",
        //标题
        "tatle":"@ctitle(5)",
        // 头像
        "headPhoto":"http://localhost:8080/img/one.98ed77a9.jpg",
        // 网名
        "username":"@ctitle(3)",
        // 点赞数
        "likeWorkNumber|30-200":15
        

    }
    ]
})

Mock.mock("/call/jan",'get',{
    tatle:'糖果小妮子',
    tatle:'旺仔小樱桃',
    tatle:'僵尸小可爱',
    tatle:'可爱到发芽',
    tatle:'可爱草莓',
    tatle:'软果儿。'



})

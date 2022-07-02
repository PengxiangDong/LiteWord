import Mock from 'mockjs'

// 获取商品列表
Mock.mock('/call/talk', 'get', {
    "code": '200',
    "data|20": [{
        // 商品Id
        "goodsId|+1": 1,
        //商品名称
        "title": "@ctitle(50)",
        //商品图片
        "goodsImage": "@Image('600x600','@color','goods')",
        //商品售价
        "price|30-500": 30.99

    }]
})

// 商品详情 :goods_id

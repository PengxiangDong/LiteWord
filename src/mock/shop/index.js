import Mock from 'mockjs'

// 获取商品列表
Mock.mock('/goods/finAll', 'get', {
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
Mock.mock('goods/open/', 'get', ({
    body
}) => {
    // 获取商品id
    return {
        "data": {
            images: [
                'http://49.232.3.226:8090/upload/2022/06/goods%20(1).png',
                'http://49.232.3.226:8090/upload/2022/06/goods%20(2).png',
                'http://49.232.3.226:8090/upload/2022/06/goods%20(3).png',
                'http://49.232.3.226:8090/upload/2022/06/goods%20(4).png',
                'http://49.232.3.226:8090/upload/2022/06/goods%20(5).png',
            ],
            title: '其妙 · 芋泥酥雪媚娘蛋黄酥芋头酥早餐面包糕点吃货零食休闲食品全国小吃 · 芋泥蛋黄酥6枚',
            price: 888
        },
        "meta": {
            "msg": "成功",
            "status": 200
        }
    }
})
import Mock from 'mockjs'

// 获取商品列表
Mock.mock('/call/talk', 'get', {
    "code": '200',
    "data|20": [{
        // 商品Id
        "goodsId|+1": 1,
        //商品名称
        "title": "@ctitle(5)",
    

    }]
})

// 常用分类
Mock.mock('/call/aaa', 'get', {
    "code": '200',
    
     'data':[
        {
           url:"http://localhost:8080/img/%E5%8C%96%E5%A6%86%E6%B0%B4.5860db98.png",
           title:"化妆水"
        },
        {
            url:"http://localhost:8080/img/%E9%9D%A2%E8%86%9C.2dcda958.jpg",
            title:"面膜怪"
        },
        {
            url:'http://localhost:8080/img/%E7%9C%BC%E5%BD%B1.baafe87e.jpg',
            title:'眼影盘'
        },
        {
            url:'http://localhost:8080/img/%E6%AF%9B%E8%A1%A3.3db2a4dc.jpg',
            title:'新版毛衣'
        },
        {
            url:'http://localhost:8080/img/%E7%89%99%E8%86%8F.be96aa6d.jpg',
            title:'云南白药'
        },
        {
            url:'	http://localhost:8080/img/%E9%A3%9F%E7%89%A9.4ba9a128.jpg',
            title:'美味食物'
        },
        {
            url:'http://localhost:8080/img/%E9%A1%B9%E9%93%BE.5b3f7edc.jpg',
            title:'项链大全'
        },
        {
            url:'http://localhost:8080/img/%E9%9D%B4%E5%AD%90.1b36287d.jpg',
            title:'韩版靴子'
        }
     ]

   
})

// 新增关注
Mock.mock('/call/xin','get',{
    "code": '200',
    'data':[
        {
            src:"http://localhost:8080/img/%E9%A1%B9%E9%93%BE.5b3f7edc.jpg",
            name:'兰妹儿',
            gz:'开始关注你了',
            time:'19分钟前',
            btn:'互相关注'
        },
        {
            src:"http://localhost:8080/img/%E7%86%8A%E5%A4%A7%E5%A4%B4%E5%83%8F.2f5a8a9d.jpg",
            name:'熊大和熊二的幸福生活',
            gz:'开始关注你了',
            time:'4分钟前',
            btn:'互相关注'
        },
        {
            src:"http://localhost:8080/img/%E6%83%85%E4%BE%A3%E5%A4%B4%E5%83%8F.db9f4926.jpg",
            name:'情侣日常',
            gz:'开始关注你了',
            time:'1个小时前',
            btn:'互相关注'
        },
        {
            src:"http://localhost:8080/img/you.23827476.jpg",
            name:'美少女战士',
            gz:'开始关注你了',
            time:'12小时前',
            btn:'互相关注' 
        },{
            src:"http://localhost:8080/img/%E9%9D%B4%E5%AD%90.1b36287d.jpg",
            name:'潮鞋聚集地',
            gz:'开始关注你了',
            time:'52分钟前',
            btn:'互相关注'
        }
    ]
})

// 点赞收藏
Mock.mock('/call/zan', 'get', {
    "code": '200',
    "data": [
        {
            url:"http://localhost:8080/img/%E9%9D%A2%E8%86%9C.2dcda958.jpg",
            title:"兰妹儿",
            btn:'你的好友',
            zl:"赞了你的笔记",
            time:'52分钟前',
            src:'http://localhost:8080/img/%E9%9D%A2%E8%86%9C.2dcda958.jpg'


         },
         {
             url:"http://localhost:8080/img/%E9%A3%9F%E7%89%A9.4ba9a128.jpg",
             title:"仙女",
             btn:'你的好友',
            zl:"赞了你的笔记",
            time:'52分钟前',
             src:'http://localhost:8080/img/%E9%9D%B4%E5%AD%90.1b36287d.jpg'
         },
         {
            url:"http://localhost:8080/img/%E9%A1%B9%E9%93%BE.5b3f7edc.jpg",
            title:"面膜怪",
            btn:'你的好友',
            zl:"赞了你的笔记",
            time:'52分钟前',
            src:'http://localhost:8080/img/%E6%83%85%E4%BE%A3%E5%A4%B4%E5%83%8F.db9f4926.jpg'

        },
        
    

    ]
})

// 历史记录
Mock.mock('/shopping1/history', 'get', {
    "code": '200',
    "data|20": [{
        // 商品Id
        "goodsId|+1": 1,
        //商品名称
        "title": "@ctitle(2)",
    

    }]
})

// 客服一页
Mock.mock('/call/kf','get',{
    "code": '200',
    'data':[
        {     
            'id':1,   
            'ms':'618有什么活动,有哪些优惠。请列举出来',
            'pas1':'您好,618期间包含2种主要活动:1.618店铺满减活动2.种草能量活动'  
        },
        {    'id':2,       
           'ms':'618期间在哪儿领取无门槛9折券呢',
            'pas1':'您好,无门槛9折券有2种：首单券，新客券'
        },
        {
            'id':3,  
            'ms':'什么时候发货？',
            'pas1':'下单后24小时发货哦！请您耐心等待'
        },{
            'id':4,  
            'ms':'最晚什么时候送达',
            'pas1':'一般3-5天送达。偏远地区一周之内送达。高风险地区不发货。'
        },{
            'id':5,  
            'ms':'这个是正品吗？',
            'pas1':'保证正品。假一赔十'  
        }
        
    ]
})


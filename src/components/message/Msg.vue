<template>
     <div>
        <!-- 收到的评论和@ -->
        <div class="msg_banner">
            <span @click="msg_message"> <van-icon name="arrow-left" /></span>
            <span>收到的评论和@</span>
        </div>

        <!-- 主页面 -->
        <div class="msg_main">
            <div class="msg_main_img">
                <img src="../../assets/img/xiang.jpg" alt="">
            </div>
            <div class="msg_main_span">
                <span>甜甜的小瑜</span>  <br>     
                <span style="font-size: 13px; color:gray;">回复了你的评论&nbsp;&nbsp;06-08</span><br>
                <span>厚台踢踢我呀🐾</span><br>

                <span class="msg_span"> {{value}}</span><br>
                <input type="text"  placeholder="回复评论" v-model="value">
                <!-- <img src="../../assets/img/消息中心.png" alt="" width="15px" height="15px"></img> -->
                

               
               <button>
               <van-icon name="like-o" @click="flag= !flag" v-show="flag" />
               <van-icon color="red" name="like" v-show="!flag" class="van_two" @click="flag= !flag" />
               </button>
            </div>
            <div class="msg_main_imgg">
                    <img src="../../assets/img/you.jpg" alt="" width="50px" height="55px">
                
            </div>
        </div>
       
       <div class="msg_main">
            <div class="msg_main_img">
                <img src="../../assets/img/头像.jpg" alt="">
            </div>
            <div class="msg_main_span">
                <span>潮男聚集地</span>  <br>     
                <span style="font-size: 13px; color:gray;">回复了你的评论&nbsp;&nbsp;07-12</span><br>
                <span>＋我weixin: wsafgvfdsd</span><br>

               <span class="msg_span"> {{twoVal}}</span><br>
                <input type="text"  placeholder="回复评论" v-model=" twoVal">
            
               
               <button>
               <van-icon name="like-o" @click="wid= !wid" v-show="wid" />
               <van-icon color="red" name="like" v-show="!wid" class="van_two" @click="wid= !wid" />
               </button>
            </div>
            <div class="msg_main_imgg">
                    <img src="../../assets/img/情侣头像.jpg" alt="" width="50px" height="55px">
                
            </div>
        </div>

        <div class="msg_main">
            <div class="msg_main_img">
                <img src="../../assets/img/熊大头像.jpg" alt="">
            </div>
            <div class="msg_main_span">
                <span>熊大和熊二的幸福生活</span>  <br>     
                <span style="font-size: 13px; color:gray;">回复了你的评论&nbsp;&nbsp;06-08</span><br>
                <span>熊大拍了你一下👏</span><br>

                <span class="msg_span"> {{threeVal}}</span><br>
                <input type="text"  placeholder="回复评论" v-model="threeVal">
               
               <button>
               <van-icon name="like-o" @click="three= !three" v-show="three" />
               <van-icon color="red" name="like" v-show="!three" class="van_two" @click="three= !three" />
               </button>
            </div>
            <div class="msg_main_imgg">
                    <img src="../../assets/img/项链.jpg" alt="" width="50px" height="55px">
                
            </div>
        </div>
     </div>
</template>

<script>
export default {
 data(){
    return{
        flag:true,
        wid:true,
        three:true,
        value:'',
        twoVal:'',
        threeVal:''
    }
 },methods:{
   msg_message(){
    this.$router.push('/message')
   }

 }
}
</script>

<style>
.msg_banner{
    height: 50px;
     border-bottom:0.1px solid rgba(37, 37, 37,0.2);
    line-height:35px;
   
}

.msg_banner :nth-child(1){
    position:absolute;
    left:10px;
    top:5px;
    font-size:30px;    
}

.msg_banner :nth-child(2){
    position:absolute;
    left:130px;
    top:5px;
    font-size:20px;
}
.msg_main{
    height:130px;
     position:relative;
    border-bottom:0.1px solid rgba(37, 37, 37,0.2);
}
.msg_main_img img{
    width:50px;
    height: 50px;
    border-radius: 50%;
    position:absolute;
    left:15px;
    top:15px;
}
.msg_main_span{
    position: absolute;
    left:75px;
    top:15px;
}
.msg_main_span button{
    /* width: 100px; */
    height:30px;
    border-radius: 50px;
    background-color:rgb(246,246,246) ;
    border:rgb(246,246,246) ;
    font-size:14px;
}
.msg_main_imgg{
    position:absolute;
    left:310px;
    top:20px;
}
.msg_main_span input{
    width:120px;
   border-radius: 10px;
background-color:rgb(246,246,246) ;
border:0.1px solid rgb(246,246,246);

}
.msg_main_span .msg_span{
    color:blue;
}
.msg_span{

    margin-top:50px;
}
</style>
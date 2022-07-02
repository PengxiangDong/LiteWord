<template>
   <div>
     <div class="msg_banner">
            <span @click="msg_message"> <van-icon name="arrow-left" /></span>
            <span>收到的赞和收藏</span>
        </div>

        <div class="msg_div" v-for="item in  raList" :key="item.id">

          <div class="msg_connect">
            <div class="msg_connect_img">
                <img :src="item.url" alt="">
            </div>

        <div class="mssg_span">
            <span style="font-size: 16px;">{{item.title}}</span><br>
            <button>{{item.btn}}</button>
            <span style="font-size: 14px; color:gray;">{{item.zl}}&nbsp;&nbsp;&nbsp;{{item.time}}</span>
            <img :src="item.src" alt="">
        </div>
 </div>
        </div>






   </div>
</template>

<script>
export default {
    data(){
    return{
        raList: []
    }
 },
methods:{
   msg_message(){
    this.$router.push('/message')
   }

 },
 async created(){
     const {data:res} =await this.$http.get("/call/zan");
     this.raList=res.data
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
    left:120px;
    top:5px;
    font-size:20px;
}
.msg_connect{
    position: relative;
}
.msg_connect_img img{
    width:50px;
    height: 50px;
    border-radius: 50%;
    position:absolute;
    left:20px;
    top:20px;

}
.mssg_span{
   position:absolute;
    left:80px;
    top:20px;  

}
.mssg_span button{
    width:70px;
    height: 20px;
    border-radius: 30px;
    position: absolute;
    left:60px;
    top:0px;
    border: 1px solid rgba(37, 37, 37,0.8);
    background-color: white;
    color:rgba(37, 37, 37,0.8);
    font-size:5px;
    text-align-last:justify
   
}
.msg_div{
    height: 80px;
   border-bottom:0.1px solid rgba(37, 37, 37,0.2);
}
.mssg_span img{
    width:55px;
    height: 55px;
    position: absolute;
    border-radius: 10px;
    left:230px;
    top:-5px;
}

</style>
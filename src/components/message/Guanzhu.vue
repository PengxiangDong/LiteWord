<template>
   <div>
     <div class="msg_banner">
            <span @click="msg_message"> <van-icon name="arrow-left" /></span>
            <span >新增关注</span>
        </div>
        <div class="msg_div" v-for="item in guanzhuList" :key="item.id">

          <div class="msg_connect">
            <div class="msg_connect_img">
                <img :src="item.src" alt="">
            </div>

         <div class="msg_spann">
            <span>{{item.name}}</span><br>
            <span style="font-size: 15px; color:gray;">{{item.gz}}&nbsp;&nbsp;&nbsp;{{item.time}}</span>
            <button  @click="chang" :class="isShowhf?'guanzhu_btn':''">{{msgg}}</button>
            <button v-show="isShowhx">{{item.btn}}</button>
        </div>
 </div>
        </div>


   </div>
</template>

<script>
export default {
   
    data(){
        return{
            isShowhf:false,
            isShowhx:false,
            msgg:'回粉',
            msg2:'互相关注',
            guanzhuList:''
        }
    },
methods:{
   msg_message(){
    this.$router.push('/message')
   },
   chang(){
    this.isShowhf = !this.isShowhf;
    if(this.isShowhf){ 
        this.msgg="互相关注"
    }else {
        this.msgg = "回粉"
    }
       

   }
 

 },
 async created(){
    const {data:res} =await this.$http.get("/call/xin");
    this.guanzhuList=res.data
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
   
    
}

.msg_banner :nth-child(2){
    position:absolute;
    left:150px;
    top:5px;
    /* font-size:16px; */
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
.msg_spann{
   position:absolute;
    left:80px;
    top:20px;  
 
}
.msg_spann button{
    width:90px;
    height: 30px;
    border-radius: 30px;
    position: absolute;
    left:200px;
    top:5px;
    border: 1px solid rgb(238,43,83);
    background-color: white;
    color:rgb(211,47,81);
}
.msg_div{
    height: 80px;
   border-bottom:0.1px solid rgba(37, 37, 37,0.2);
}
.guanzhu_btn {
    border: 1px solid #ccc !important;
    color: #ccc !important;
}


</style>
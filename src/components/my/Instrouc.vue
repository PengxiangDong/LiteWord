<template>
<div class="num_1">
  <div class="p_1">
  <span  @click="quxiao_1" style="color: #808080;">取消</span>
  <span>编辑简介</span>
  <span style="color: #Da556a;" @click="showPopup">保存</span></div>
<!-- <van-popup v-model="show">保存成功</van-popup> -->
<van-field
  v-model="message"
  rows="2"
  autosize

  style="margin-top:50px"
  maxlength="50"
  placeholder="点击填写兴趣爱好、生活方式等个人简介"
  show-word-limit
/>
 
</div>

</template>

<script>
import { Toast } from 'vant';
export default {
components: {},
  methods: {
    quxiao_1(){
       this.$router.push("/introduce");
    },

    showPopup() {
      // this.show=true;
      Toast('保存成功')
      setTimeout(() => {
        this.$router.go(-1);
      }, 1000);

    },
    
  },
    data() {
    return {
      ralst:[],
      show: false,
      message:''
      
    }
  },
   async created(){
     const {data:res}=await this.$http.get("/call/jan")
   }


}
</script>

<style>
.num_1{
    width: 100%;
    
}

 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .p_1{
    display: flex;
    justify-content: space-around;
  }

 
</style>
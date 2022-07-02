<template>
  <div>
    <span class="span_1" @click="bbb"><</span>
    <h4>编辑资料</h4>
    <div class="p">
      <img src="@/assets/plus_boo.png" alt />
    </div>
    <div class="p_1">
      <!-- <img src="@/assets/照相机2(1).png" alt /> -->
     <!-- <img src="@/assets/five.jpg" alt=""> -->
    </div>
    <ul>
      <li class="li_1">
        <span class="span_2">名字</span>
        
          <span  @click="book" class="span_3" style="margin-left:180px;">小红薯<h2 style=" color: #bfbfbf;margin-top: -20px;margin-left:60px;">></h2></span>
          <span class="span_4" >></span>
       
      </li>
      <li class="li_1">
        <span class="span_2" >小红书号</span>
        <span class="span_3" style="margin-left:120px;">998498888</span>
        <span class="span_4">></span>
      </li>
      <li class="li_1">
        <span class="span_2">简介</span>
        <span @click="jian" class="span_3" style="margin-top:15px;color:#bfbfbf;">有趣的简介可以吸引粉丝</span>
        <span class="span_4">></span>
      </li>
      <li class="li_1">
        <span class="span_2">性别</span>
        <span class="span_3" @click="nv_1" style="margin-left:210px;margin-top:15px;">女</span>
        <span class="span_4">></span>
      </li>
      <li class="li_1">
        <span class="span_2">生日</span>
        <span  @click="birthday_1" class="span_3" style="margin-left:170px;margin-top:15px;color:#bfbfbf;">选择生日</span>
        <span class="span_4">></span>
      </li>
      <li class="li_1">
        <span class="span_2">地区</span>
        <span  @click="regin_1" class="span_3"  style="margin-left:170px;margin-top:15px;">中国&nbsp;太原</span>
        <span class="span_4">></span>
      </li>
      <li class="li_1">
        <span  class="span_2">职业</span>
        <span  @click="teacher_1" class="span_3"  style="margin-left:170px;margin-top:15px;color:#bfbfbf;">选择职业</span>
        <span class="span_4">></span>
      </li>
      <li class="li_1">
        <span class="span_2">学校</span>
        <span @click="school_1" class="span_3" style="margin-left:170px;margin-top:15px;color:#bfbfbf;">选择学校</span>
        
      </li>
    </ul>


    
  </div>
</template>

<script>
export default {
  
  components: {},
  methods: {
    bbb() {
      this.$router.push("/my");
    },
    book(){
      this.$router.push("/booklittle");
    },
    jian(){
    this.$router.push("/Instrouc");
    },
    nv_1(){
    this.$router.push("/Gender");
    },
    birthday_1(){
       this.$router.push("/Birthdoy");

    },
    regin_1(){
       this.$router.push("/Regin");
    },
    teacher_1(){
       this.$router.push("/Teacher");
    },
    school_1(){
      this.$router.push("/School");
    }
  
     
  }
};
</script>

<style>
.span{
  width: 70%;
  background-color: aqua;
  height: 100%;
  line-height: 40px;
  display: inline-block;
}
.span_1 {
  color: #494949;
  font-size: 30px;
}
h4 {
  color: #494949;
  margin-top: -25px;
  margin-left: 140px;
}
.p img {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  margin-left: 130px;
  margin-top: 15px;
}
.p_1 img {
  position: absolute;
  width: 25px;
  height: 25px;
  margin-top: -30px;
  margin-left: 190px;
}
ul {
  font-size: 15px;
  margin-top: 40px;
}
.span_2 {
  margin-right: 50px;
  line-height: 51px;
  color: #bfbfbf;
}
.span_3 {
  position: absolute;
  margin-left: 70px;
  margin-top: 20px;
}
.li_1 {
  height: 50px;
  border-bottom: 1px solid #b3b3b3;
  margin: 0 10px;
}
.span_4 {
  /* position: absolute; */
  color: #b3b3b3;
  font-size: 20px;
  margin-right: 20px;
  margin-left: 320px;
   line-height: 51px;
}

</style>
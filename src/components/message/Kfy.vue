<template>
  <div>
    <div class="mmsg_banner">
      <span @click="msg_message"> <van-icon name="arrow-left" /></span>
      <span>LITCHI SELECT的店</span>
      <button>进店</button>
    </div>

    <!-- 内容 -->
    <div class="mmsg_connect">
      <div class="mmsg_one">
        <img src="../../assets/img/靴子.jpg" alt="" />
        <div class="mmsg_span">
          <span style="  font-family:'SimHei';">这里是智能小助手,常见问题优点点击下方</span><br><br>
          <span
            style="color: skyblue; font-family:'SimHei'; 
            display: inline-block; margin-top: 3px;margin-left:10px;font-size: 15px;"
            v-for="item in kefuList"
            :key="item.id"
            @click="con(item.id)"
            >{{ item.ms }}</span
          ><br />
        </div>
      </div>

      <div v-for="(an, index) in answer" :key="index">
        <div class="mmsg_two" >       
          <div class="mmsg_two_span">{{ an.a }}</div>
          <img src="../../assets/img/you.jpg" alt="" />
        </div>

        <div class="mmsg_one">
          <img src="../../assets/img/靴子.jpg" alt="" />
          <div class="mmsg_span">
            <span>{{an.q}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 回复 -->

    
  

    <!-- 发送框 -->
<div class="mmsg_input">
        <input type="text" >
        <button>发送</button>
    </div>
 </div>

</template>

<script>
export default {
  data() {
    return {
      kefuList: [],
      answer: [
      ]
    };
  },

  methods: {
    msg_message() {
      this.$router.push("/message");
    },
    con(id) {
      this.kefuList.forEach((k) => {
        if (k.id === id) {
          this.answer.push({
            a: k.ms,
            q: k.pas1
          })
        }
      });
      console.log(this.answer);
    },
  },
  async created() {
    const { data: res } = await this.$http.get("/call/kf");
    console.log(res)
    this.kefuList = res.data;
    this.kefu = kefuList;
  },
};
</script>

<style>
.mmsg_banner {
  height: 50px;
  border-bottom: 0.1px solid rgba(37, 37, 37, 0.2);
  line-height: 50px;
  display:flex;
  justify-content: space-between;
}

.mmsg_banner :nth-child(1) {
  font-size: 30px;
}

.mmsg_banner :nth-child(2) {
  font-size: 20px;
}
.mmsg_banner button {
  width: 55px;
  height: 30px;
  border-radius: 30px;
  background-color: rgb(245, 36, 78);
  border: rgb(238, 43, 83);
  color: white;
  font-size: 15px;
  line-height: 30px;
  margin-top:10px;
}


.mmsg_connect {
    height: 550px;
    overflow: auto;
    background-color: rgb(246, 246, 246);
    display: flex;
    flex-direction: column;
}
.mmsg_one {
    width: 100%;
  height:auto;
    box-sizing: border-box;
  padding:20px;
  display: flex;
   font-family:'SimHei';

}
.mmsg_one img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.mmsg_span {
  height:auto;
  width: 200px;
  background-color: white;
  border-radius: 15px;
  margin-top:20px;
  margin-left:10px;
}

.mmsg_two {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
   box-sizing: border-box;
  padding:10px;
   font-family:'SimHei';
   
 
}

.mmsg_two_span {
  height: auto;
  width: 180px;
   background-color:#2582f4;
  color:white;
  border-radius: 30px;
  margin-right:10px;
  font-size:15px;
  line-height: 20px;
  text-align: center;

}
.mmsg_two img {
  width: 50px;
  height: 50px;
  border-radius: 50%;

}
.mmsg_kefuhui img {
  position: absolute;
  left: 310px;
  top: 320px;
}
.mmsg_input input {
  width: 280px;
  height: 40px;
  border-radius: 10px;
  border: 0.5px solid rgba(37, 37, 37, 0.2);
  position: absolute;
  left: 10px;
  top: 610px;
}
.mmsg_input button {
  width: 60px;
  height: 40px;
  position: absolute;
  left: 310px;
  top: 610px;
  background-color: white;
  border: 0.5px solid rgba(37, 37, 37, 0.2);
  border-radius: 5px;
}
</style>
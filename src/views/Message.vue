<!-- 
    coder: 吕沁儒
 -->
<template>
  <div>
    <!-- 头部 -->
    <div class="banner">
      <span class="banner_one">消息</span>
      <span class="banner_two" @click="show = !show">创建聊天</span>
    </div>

    <!-- 创建聊天下拉 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block" @click.stop>
          <div>
            &nbsp;&nbsp;<img
              src="../assets/img/加号.png"
              alt=""
            />&nbsp;&nbsp;发私信
          </div>
          <div>
            &nbsp;&nbsp;<img
              src="../assets/img/我的.png"
              alt=""
            />&nbsp;&nbsp;创建群聊
          </div>
        </div>
      </div>
    </van-overlay>

    <!-- 图标 -->
    <div class="conect">
      <div class="conect_img">
        <img src="../assets/img/点赞.png" alt="" @click="zanC" />
        <img src="../assets/img/关注.png" alt="" @click="guanzhuC" />
        <img src="../assets/img/评论.png" alt="" @click="targetC" />
      </div>
      <div class="conect_text">
        <span>赞和收藏</span>
        <span>新增关注</span>
        <span>评论和@</span>
      </div>

      <!-- 下方消息 -->
      <div class="connect_msg" @click="tad">
        <img src="../assets/img/靴子.jpg" alt="" />
        <span class="connect_msg_spanone">LITCHI SELECT</span>
        <span class="connect_msg_spantwo">[表情]</span>
        <span class="connect_msg_spanthree">星期二</span>
      </div>

      <div class="connect_msg">
        <img src="../assets/img/小红书.jpg" alt="" />
        <span class="connect_msg_spanone">小红书成长助手</span>
        <span class="connect_msg_spantwo"
          >你的桃花运怎样？戳我测测桃花运吧..</span
        >
        <span class="connect_msg_spanthree">刚刚</span>
      </div>

      <div class="connect_msg">
        <img src="../assets/img/头像.jpg" alt="" />
        <span class="connect_msg_spanone">潮男</span>
        <span class="connect_msg_spantwo">加我微信</span>
        <span class="connect_msg_spanthree">星期五</span>
      </div>
    </div>
    <FooterNavVue></FooterNavVue>
  </div>
</template>

<script>
import FooterNavVue from "@/components/public/FooterNav.vue";

export default {
  components: {
    FooterNavVue,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    targetC() {
      console.log(1);
      this.$router.push("/xiang");
    },
    guanzhuC() {
      this.$router.push("/guan");
    },
    zanC() {
      this.$router.push("/zan");
    },
    tad() {
      this.$router.push("/kfy");
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  height: 50px;

  line-height: 50px;
}
.banner_one {
  position: absolute;
  left: 160px;
  font-size: 21px;
  font-family: "SimHei";
}
.banner_two {
  position: absolute;
  left: 290px;
  font-size: 19px;
  font-family: "SimHei";
}
.wrapper img {
  width: 20px;
  height: 20px;
}
.conect {
  margin-top: 10px;
  height: 100px;
}
.conect img {
  width: 60px;
  height: 60px;
}
.conect_img {
  display: flex;
  justify-content: space-around;
}
.conect_text {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 17px;
  font-family: "SimHei";
}
.connect_msg {
  height: 60px;
  // background-color: antiquewhite;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  position: relative;
}
.connect_msg_spanone {
  position: absolute;
  left: 80px;
  font-size: 17px;
}
.connect_msg_spantwo {
  position: absolute;
  left: 80px;
  top: 30px;
  font-size: 15px;
  color: gray;
}
.connect_msg_spanthree {
  position: absolute;
  left: 310px;
  font-size: 14px;
  color: gray;
}
.connect_msg img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-left: 10px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 120px;
  height: 80px;
  background-color: #fff;
  line-height: 40px;
  border-radius: 5px;
  position: absolute;
  left: 240px;
  top: 50px;
}
</style>
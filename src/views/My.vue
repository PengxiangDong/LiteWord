<!-- 
    coder: 郝兰
 -->
<template>
  <div>
    <!-- <h1>我的</h1> -->
    <FooterNavVue></FooterNavVue>
    <!-- 头部 -->
    <div class="box">
      <!-- <img src="../assets/two.jpj" alt=""> -->
      <img src="../assets/plus_bto.png" alt style="height: 350px" />

      <div class="box1">
        <div class="box_1">
          <h4 id="h4">三</h4>
          <van-icon name="share" />
        </div>
        <!-- 头像部分 -->
        <div class="box_2">
           
          <img src="../assets/plus_boo.png" alt />
          <img src="../assets/加号(1).png" alt class="bbb" />
          <h3 id="h3">小红书</h3>
          <br/>
          <span>小红书号：998498062</span>
          <img src="../assets/二维码 (3)(1).png" alt class="ccc" />
        </div>
        <div class="box_3">
          向大家介绍一下自己
          <img src="../assets/bq.png" alt />
          
          <br />
          <br />
          <button>
            <img src="../assets/女生(1).png" alt/>
          </button>

          <span id="span" @click="a_1">+添加生日、职业标签</span>
        </div>
        <div class="box_4">
          <div class="left_1">
            <div class="item">
              <div class="num">&nbsp; &nbsp;&nbsp;5</div>
              <div class="title">&nbsp;&nbsp;关注&nbsp; &nbsp;</div>
            </div>
            <div class="item">
              <div class="num">&nbsp;&nbsp;6 &nbsp;&nbsp;</div>
              <div class="title">粉丝&nbsp;</div>
            </div>
            <div class="item">
              <div class="num">
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
              </div>
              <div class="title">&nbsp;&nbsp;获赞与收藏</div>
            </div>
          </div>
          <div class="right_1">
            <div @click="aa">编辑资料</div>
            <div class="tui_1">退出</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 点赞收藏 -->
    <van-tabs id="van-tabs" sticky>
      <van-tab title="收藏">
        <div class="zp">
          <div v-for="(item, index) in ob" :key="index">
            <img :src="item.workImage" alt="" />
            <div class="text_1">
              <span>{{ item.tatle }}</span
              ><br />
              <img :src="item.headPhoto" alt="" />
              <span
                style="margin-right: 40px; color: #c1c1c1; margin-top: -50px"
                >{{ item.username }}</span
              >
              <span>{{ item.likeWorkNumber }}</span>
              <van-icon
                style="margin-top: 200px"
                name="like-o"
                color="black"
                class="abc"
              />
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="赞过">
        <div class="zp">
          <div v-for="(item, index) in ob" :key="index">
            <img :src="item.workImage" alt="" />
            <div class="text_1">
              <span>{{ item.tatle }}</span
              ><br />
              <img :src="item.headPhoto" alt="" />
              <span
                style="margin-right: 40px; color: #c1c1c1; margin-top: -50px"
                >{{ item.username }}</span
              >
              <span id="p_1">{{ item.likeWorkNumber }}</span>
              <van-icon style="margin-top: 200px" name="like-o" color="black" />
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import FooterNavVue from "@/components/public/FooterNav.vue";
export default {
  data() {
    return {
      ob: [],
      // xhs: [],
    };
  },
  components: {
    FooterNavVue,
  },
  created() {
    this.cre();
  },
  methods: {
    aa() {
      this.$router.push("/introduce");
    },
    a_1() {
      this.$router.push("/introduce");
    },
    async cre() {
      const { data: res } = await this.$http.get("/call/shoucang");
      console.log(res);
      this.ob = res.data;
      console.log(this.ob);

    },
  },
};
</script>
<style lang="less"scoped>
.box {
  position: relative;
  color: white;
}
.box1 {
  position: absolute;
  top: 20px;
}
.box2 {
  position: absolute;
  top: 80 px;
}
.box img {
  width: 100%;
}
.box_1 {
  color: aliceblue;
  display: flex;
  justify-content: space-between;
}
.aaa {
  width: 15px;
  height: 15px;
  left: 50px;
}
.box_2 img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.box_2 > img.bbb {
  position: relative;
  left: -20px;
  top: 5px;
  width: 25px;
  height: 25px;
}

.box_2 span {
  position: relative;
  left: 90px;
  font-size: 7px;
  top: -110px;
}
.box_2 > .ccc {
  position: relative;
  width: 15px;
  height: 15px;
  left: 90px;
  top: -105px;
}
.box_3 {
  position: relative;
  color: white;
  font-size: 11px;
  top: -70px;
}
.box_3 img {
  width: 15px;
}
.box_4 {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  .left_1 {
    position: relative;
    display: flex;
    font-size: 13px;
    top: -30px;
  }
  .right_1 {
    position: relative;
    font-size: 12px;
    border-radius: 30%;
    top: -30px;
    // background-color: rgba(87, 77, 67, 0.3);
  }
}
.van-icon {
  margin-left: 330px;
}
#h4 {
  position: relative;
  bottom: 25px;
}
#h3 {
  position: relative;
  left: 90px;
  bottom: 80px;
}
.zp {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.zp img {
  width: 170px;
  height: 170px;
}
.text_1 {
  top: 50px;
  // background-color: aqua;
  width: 170px;
  height: 50px;
  font-size: 15px;
  line-height: 30px;
}
.text_1 img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.abc {
  margin: 135px;

  // ma-top: -50px;
  // margin-top: 50px;
}
</style>
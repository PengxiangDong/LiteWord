<template>
  <!-- 详情 -->
  <div id="app">
    <div>
      <!-- {{item.title}} -->
      <van-nav-bar title="" left-text="" @click-left="onClickLeft">
        <template #right>
          <van-icon
            name="share"
            size="18"
            @click="showShare = true"
            class="bar"
          />
          <van-share-sheet
            v-model="showShare"
            title="立即分享给好友"
            :options="options"
          />
        </template>
        <template #left>
          <van-icon name="arrow-left" size="18" class="bar" />
        </template>
        <template #title>
          <div class="img">
            <!-- <img src="../../assets/tx.jpg" alt=""> -->
            <!-- <span>123</span> -->
            <!-- {{this.findOne.userInfo.username}} -->
          </div>
          <van-button
            round
            type="info"
            size="small"
            block
            plain
            color="#e4717f"
            :text="gzz"
            @click="gz"
          ></van-button>
        </template>
      </van-nav-bar>
      <img class="imgtou" :src="findOne.userInfo.headPhoto" alt="" />
      <span class="spantou">{{ findOne.userInfo.username }}</span>
      <!-- 轮播图 -->
      <div>
        <van-swipe class="my-swipe" indicator-color="white">
          <van-swipe-item v-for="item in findtwo" :key="item.id">
            <img :src="item.images" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 标题内容区域 -->
      <div class="total">
        <h4>{{ this.findOne.title }}</h4>
        <!-- <h1>{{this.workImages.images}}</h1> -->
        <p>{{ this.findOne.depict }}</p>
        <br /><br />
        <span>{{ this.findOne.pubdate }}</span>
        <van-divider />
      </div>
      <!-- 评论 -->
      <div class="pl">
        <span>共{{ this.findOne.commentNumber }}条评论</span><br />
        <img src="../../assets/tx.jpg" alt="" />
        <input type="text" placeholder="说点什么吧,万一火了呢~~~" />
        <van-divider />
      </div>
      <div class="sxpl" v-for="item in findthree" :key="item.id">
        <img :src="item.userInfo.headPhoto" alt="" />
        <span>{{ item.userInfo.username }}</span>
        <p>{{ item.comment }}</p>
        <span class="spanday">{{ item.commentDate }}</span>
      </div>

      <br /><br /><br /><br />

      <!-- 底部 -->
      <div class="di">
        <div class="d">
          <input type="text" class="form_input" placeholder="说点什么吧...." />
          <van-icon name="edit" size="25px" />
        </div>
      </div>
      <div class="righticon">
        <van-icon size="30px" name="like" :class="abc" @click="fun" />

        <span class="didi"
          >&nbsp; {{ this.findOne.likeWorkNumber }} &nbsp;</span
        >
        <van-icon size="30px" name="star" :class="abc1" @click="fun1" />
        <span class="didi"
          >&nbsp; {{ this.findOne.collectNumber }} &nbsp;
        </span>
        <van-icon size="30px" name="chat-o" />
        <span class="didi">&nbsp; {{ this.findOne.commentNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
      //  点击点赞
      abc: "hui",
      dianji: true,
      //  点击收藏
      abc1: "hui",
      dianji: true,
      //   是否关注
      gzz: "关注",
      addgz: true,
      // 详情页存放
      findOne: [],
      findtwo: [],
      findthree: [],
      findfour: [],
      findfive: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
    fun() {
      // alert(12)
      //   this.abc = "animate__animated animate__rubberBand";
      if (this.dianji == true) {
        this.abc = "animate__animated animate__rubberBand red";
        this.dianji = false;
        // console.log(this.dianji);
        return;
      }
      if (this.dianji == false) {
        this.abc = "hui";
        this.dianji = true;
        return;
      }
    },
    fun1() {
      // alert(12)
      //   this.abc = "animate__animated animate__rubberBand";
      if (this.dianji == true) {
        this.abc1 = "animate__animated animate__rubberBand yellow";
        this.dianji = false;
        // console.log(this.dianji);
        return;
      }
      if (this.dianji == false) {
        this.abc1 = "hui";
        this.dianji = true;
        return;
      }
    },
    gz() {
      if (this.addgz == true) {
        this.gzz = "已关注";
        this.addgz = false;
        return;
      }
      if (this.addgz == false) {
        this.gzz = "关注";
        this.addgz = true;
        return;
      }
    },
    // 获取详情页数据
    async getfindone() {
      const { data: res } = await this.$http({
        method: "get",
        url: "http://172.16.107.58:8080/home/findOne",
        params: {
          workId: this.$route.query.workId,
        },
      });
      // console.log(res.data.workImages);
      this.findOne = res.data;
      console.log(this.findOne);
      this.findtwo = res.data.workImages;
      // console.log(this.findtwo);
      this.findthree = res.data.tabComments;
      // console.log(this.findthree);
      // console.log(this.findthree.length);
      for (let i = 0; i < this.findthree.length; i++) {
        this.findfour = this.findthree.userInfo;
        this.findfive = this.findfour;
      }
      // console.log(this.findfive);
      // this.findfour=res.data.tabComments.userInfo
      // console.log(res.data.tabComments[0].userInfo);
      // console.log(this.findfour);
    },
  },
  created() {
    this.getfindone();
  },
};
</script>

<style lang="less" scoped>
.red {
  color: red;
}
.hui {
  color: #6e6e6e;
}
.yellow {
  color: rgb(255, 162, 0);
}
#app {
  height: auto;
}
.bar {
  color: rgb(111, 111, 111);
}
.imgtou {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: aqua;
  margin-top: 10px;
  position: absolute;
  left: 60px;
  margin-top: -35px;
  z-index: 99999;
}
.spantou {
  display: inline-block;
  height: 46px;
  line-height: 46px;
  position: absolute;
  left: 90px;
  margin-top: -43px;
  z-index: 99999;
}
.img {
  width: 300px;
  height: 46px;
  //  line-height: 46px;、
  position: relative;
}
.van-button {
  width: 45px;
  height: 25px;
  position: absolute;
  right: 50px;
  top: 10px;
}

.my-swipe {
  width: 80%;
  height: 400px;
  // background-color: aqua;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.total {
  width: 90%;
  margin: 0 auto;
  p {
    margin: -15px auto;
  }
  span {
    color: #818181;
    font-size: 10px;
  }
}

.di {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0px;
  background-color: rgba(255, 255, 255, 0.995);
  .d {
    height: 300px;
    background-color: rgba(255, 255, 255, 0.995);
    margin-top: -10px;
  }
  .van-icon {
    position: absolute;
    top: -7px;
    left: 25px;
  }
  input {
    font-size: 12px;
    /* 设置输入框中字体的大小 */
    width: 100px;
    height: 30px;
    /* 设置输入框的高度 */

    border-radius: 40px;
    /* 设置输入框的圆角的大小 */

    border: 1px solid #c8cccf;
    /* 设置输入框边框的粗细和颜色 */

    color: #2c2c2c;
    /* 设置输入框中文字的颜色 */

    outline: 0;
    /* 将输入框点击的时候出现的边框去掉 */

    text-align: left;
    /* 设置输入框中文字的位置 */

    padding-left: 35px;

    display: block;
    /* 将输入框设置为块级元素 */

    margin-left: 20px;
    margin-top: -10px;
  }

  input::-webkit-input-placeholder {
    color: #2c2c2c;
    font-size: 16px;
  }
}
.righticon {
  position: fixed;
  bottom: 0px;
  margin-top: 120px;
  margin-left: 165px;
  padding: auto;
  display: flex;
  justify-content: space-around;
}
.didi {
  display: inline-block;
  line-height: 30px;
  height: 50px;
}
.pl {
  width: 90%;
  margin: 0 auto;
  span {
    color: #818181;
    font-size: 12px;
  }
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: aqua;
    margin-top: 10px;
  }
  input {
    font-size: 12px;
    /* 设置输入框中字体的大小 */
    width: 250px;
    height: 25px;
    /* 设置输入框的高度 */

    border-radius: 40px;
    /* 设置输入框的圆角的大小 */

    border: 1px solid #c8cccf;
    /* 设置输入框边框的粗细和颜色 */

    color: #2c2c2c;
    /* 设置输入框中文字的颜色 */

    outline: 0;
    /* 将输入框点击的时候出现的边框去掉 */

    text-align: left;
    /* 设置输入框中文字的位置 */

    padding-left: 10px;

    display: block;
    /* 将输入框设置为块级元素 */

    margin-left: 30px;
    margin-top: -30px;
  }

  input::-webkit-input-placeholder {
    color: #2c2c2c;
    font-size: 13px;
  }
}
.sxpl {
  position: relative;
  margin-top: 20px;
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: aqua;
    margin-left: 20px;
  }
  span {
    position: absolute;
    left: 55px;
    top: -3px;
    color: #818181;
    font-size: 12px;
  }
  .spanday {
    position: absolute;
    left: 250px;
    top: 5px;
    color: #818181;
    font-size: 12px;
  }
  p {
    position: absolute;
    left: 55px;
    top: -3px;
  }
}
.sxplched {
  position: relative;
  margin-top: 20px;
  margin-left: 40px;
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: aqua;
    margin-left: 20px;
  }
  span {
    position: absolute;
    left: 55px;
    top: -3px;
    color: #818181;
    font-size: 12px;
  }
  p {
    position: absolute;
    left: 55px;
    top: -3px;
  }
}
</style>
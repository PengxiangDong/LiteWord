<template>
<!-- 关注 -->
  <div id="app">
    <van-pull-refresh
      success-text="刷新成功"
      v-model="isLoading"
      @refresh="onRefreshlist()"
    >
      <br />
      <!-- 暂未关注样式 -->
      <div class="pay">
            <van-empty description="还没有关注的人呢" />
            </div>
      <!-- 已关注样式 -->

      <div class="havepay" v-for="(item, index) in attlist" :key="index">
        <!-- 顶部 -->
        <div class="top">
          <!-- 头像 -->
          <img :src="item.headPhoto" alt="" />
          <!-- <img src="../../assets/tx.jpg" alt="" /> -->
          <!-- 网名 -->
          <span>{{ item.username }}</span>
          <!-- 时间 -->
          <p>2天前</p>
          <!-- 分享按钮 -->
          <van-icon name="weapp-nav" @click="showShare = true" />
        </div>

        <!-- 轮播图 -->
        <div>
          <!-- animate__animated animate__bounce -->
          <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
              <img
                src="../../assets/关注图片/0a77f2d1e193add61a4e16a4c421cff.jpg"
                alt=""
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="../../assets/关注图片/554f9f17403504e320238e531d5cb0c.jpg"
                alt=""
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="../../assets/关注图片/d6f72f52f5624492bc3aa2fa5413127.jpg"
                alt=""
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="../../assets/关注图片/e39256ffd200812993830f4cc62daff.jpg"
                alt=""
              />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 下部分享点赞等 -->
        <div>
          <van-icon
            name="share"
            size="30px"
            @click="showShare = true"
            class="zhuan"
          />
          <van-share-sheet
            v-model="showShare"
            title="立即分享给好友"
            :options="options"
          />
          <div class="righticon">
            <van-icon size="30px" name="like-o" />
            <span>{{ item.likeWorkNumber }}</span>
            <van-icon size="30px" name="star-o" />
            <span>{{ item.collectNumber }}</span>
            <van-icon size="30px" name="chat-o" @click="showPopup" />

            <span>{{ item.commentNumber }}</span>
            <van-popup
              v-model="show"
              closeable
              close-icon-position="top-right"
              position="bottom"
              :style="{ height: '50%' }"
            >
              <br /><br />
              <van-skeleton title avatar :row="3" :loading="loading">
                  <van-skeleton title avatar :row="3" />
              </van-skeleton>
            </van-popup>
          </div>
        </div>
        <br />
        <hr />
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    
    data() {
        return {
             // 存放关注页数据
      attlist: [],
      // 分享
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
      show: false,
      // 骨架
       loading: true,
         //   刷新
      isLoading: false,
        }
    },
     created() {
    this.getdataatt();
  },

  methods:{
     // 获取关注数据
    async getdataatt() {
      const { data: res } = await this.$http.get("/home/attention");
      // console.log(res);
      this.attlist = res.data;
      // console.log(this.local[0].workImage);
    },
    // 关注刷新
    onRefreshlist() {
      // console.log(this.arrlist);
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
    // 评论弹出框
    showPopup() {
      this.show = true;
    },
  }
};
</script >

<style lang="less" scoped>
.havepay {
  height: auto;
  padding-bottom: 30px;
  .top {
    display: flex;
    position: relative;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin: 10px 30px;
    }

    span {
      margin: 20px -20px;
    }
    p {
      margin: 25px 35px;
      font-size: 2px;
      color: #878787;
    }
    .van-icon {
      margin-top: 25px;
      position: absolute;
      right: 25px;
    }
  }
  .my-swipe .van-swipe-item {
    height: 400px;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    img {
      width: 100%;
      height: 100;
    }
  }
  .zhuan {
    margin: 10px 20px;
  }
  .righticon {
    margin-top: -40px;
    margin-left: 170px;
    margin-right: 20px;
    display: flex;
    justify-content: space-around;
  }
  span {
    margin-top: 6px;
  }
  .table {
    height: 500px;
    margin-left: 25px;
    // line-height: 40px;
    .table1 {
      font-size: 18px;
    }
    span {
      font-size: 15px;
    }
    p {
      margin-top: 5px;
    }
  }
}
// 未关注样式
.pay {
  height: 600px;
}

</style>>

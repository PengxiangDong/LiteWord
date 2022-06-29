<template>
  <div>
    <div class="center">
      <van-tabs v-model="active" swipeable sticky>
        <!-- 关注内容 -->
        <van-tab title="关注">
          <van-pull-refresh
            success-text="刷新成功"
            v-model="isLoading"
            @refresh="onRefreshlist()"
          >
            <br />
            <!-- 暂未关注样式 -->
            <!-- <div class="pay"> -->
            <!-- 顶部 -->
            <!-- <van-empty description="还没有关注的人呢" /> -->
            <!-- </div> -->
            <!-- 已关注样式 -->
            <div class="havepay" v-for="(item, index) in attlist" :key="index">
              <!-- 顶部 -->
              <div class="top">
                <!-- 头像 -->
                <img :src="item.headPhoto" alt="" />
                <!-- <img src="../assets/tx.jpg" alt="" /> -->
                <!-- 网名 -->
                <span>{{item.username}}</span>
                <!-- 时间 -->
                <p>2天前</p>
                <!-- 分享按钮 -->
                <van-icon name="weapp-nav" @click="showShare = true" />
                <van-share-sheet
                  v-model="showShare"
                  title="立即分享给好友"
                  :options="options"
                />
              </div>
              <!-- 轮播图 -->
              <div>
                <van-swipe
                  class="my-swipe"
                  indicator-color="white"
                >
                  <van-swipe-item>
                    <img
                      src="../assets/关注图片/0a77f2d1e193add61a4e16a4c421cff.jpg"
                      alt=""
                    />
                  </van-swipe-item>
                  <van-swipe-item>
                    <img
                      src="../assets/关注图片/554f9f17403504e320238e531d5cb0c.jpg"
                      alt=""
                    />
                  </van-swipe-item>
                  <van-swipe-item>
                    <img
                      src="../assets/关注图片/d6f72f52f5624492bc3aa2fa5413127.jpg"
                      alt=""
                    />
                  </van-swipe-item>
                  <van-swipe-item>
                    <img
                      src="../assets/关注图片/e39256ffd200812993830f4cc62daff.jpg"
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
                  color="#878787"
                />
                <van-share-sheet
                  v-model="showShare"
                  title="立即分享给好友"
                  :options="options"
                />
                <div class="righticon">
                  <van-icon size="30px" name="like-o" />
                  <span>{{item.likeWorkNumber}}</span>
                  <van-icon size="30px" name="star-o" />
                  <span>{{item.collectNumber}}</span>
                  <van-icon size="30px" name="chat-o" />
                  <span>{{item.commentNumber}}</span>
                </div>
              </div>
             <br>
                <hr>
            </div>
            
          </van-pull-refresh>
        </van-tab>
        <!-- 发现内容 -->
        <van-tab title="发现">
          <van-pull-refresh
            success-text="刷新成功"
            v-model="isLoading"
            @refresh="onRefresh()"
          >
            <br />
            <div class="pic">
              <!-- div -->
              <div class="item1" v-for="(item, index) in arrlist" :key="index">
                <!-- 获取 api 取到的图片地址 -->
                <img :src="item.workImage" />
                <!-- <img src="../assets/123.jpg" alt=""> -->
                <div class="botton">
                  <div>
                    <!-- 标题区域 -->
                    <h5>{{ item.tatle }}</h5>
                  </div>
                  <div class="di">
                    <!-- 头像 -->
                    <div class="via">
                      <img :src="item.headPhoto" alt="" />
                      <!-- 网名 -->
                      <span>{{ item.username }}</span>
                    </div>
                    <div class="like-o">
                      <van-icon name="like-o" />
                      <span>{{ item.likeWorkNumber }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-pull-refresh>
        </van-tab>
        <!-- 本地内容 -->
        <van-tab title="本地">
          <van-pull-refresh
            success-text="刷新成功"
            v-model="isLoading"
            @refresh="onRefresh()"
          >
            <br />
            <div class="pic">
              <!-- div -->
              <div class="item1" v-for="(item, index) in arrlist" :key="index">
                <!-- 获取 api 取到的图片地址 -->
                <img :src="item.workImage" />
                <!-- <img src="../assets/123.jpg" alt=""> -->
                <div class="botton">
                  <div>
                    <!-- 标题区域 -->
                    <h5>{{ item.tatle }}</h5>
                  </div>
                  <div class="di">
                    <!-- 头像 -->
                    <div class="via">
                      <img :src="item.headPhoto" alt="" />
                      <!-- 网名 -->
                      <span>{{ item.username }}</span>
                    </div>
                    <div class="like-o">
                      <van-icon name="like-o" />
                      <span>{{ item.likeWorkNumber }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>

    <FooterNavVue></FooterNavVue>
  </div>
  
</template>

<script>
import FooterNavVue from "@/components/public/FooterNav.vue";
import { Toast } from "vant";
export default {
  components: {
    FooterNavVue,
  },

  data() {
    return {
      // 默认刷新中间页
      active: 0,
      // 存放首页数据
      arrlist: [],
      // 存放关注页数据
      attlist: [],
      // 存放刷新后删除的数据
      arrdel: [],
      isLoading: false,
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
    };
  },
  created() {
    this.getdata();
    this.getdataatt();
  },
  methods: {
    // 获取首页数据
    async getdata() {
      const { data: res } = await this.$http.get("/home/local");
      // console.log(res);
      this.arrlist = res.data;
      // console.log(this.arrlist[0].workImage);
    },
     // 获取关注数据
    async getdataatt() {
      const { data: res } = await this.$http.get("/home/attention");
      // console.log(res);
      this.attlist = res.data;
      console.log(this.attlist[0].workImage);
    },
    // 关注页刷新
    onRefreshlist() {
      // console.log(this.arrlist);
      setTimeout(() => {
        this.arrdel = this.arrlist.splice(0, 4);
        // console.log(this.arrdel);
        for (let i = 0; i < this.arrdel.length; i++) {
          this.arrlist.push(this.arrdel[i]);
        }

        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
    // 发现/本地下拉刷新数据
    onRefresh() {
      // console.log(this.arrlist);
      setTimeout(() => {
        this.arrdel = this.arrlist.splice(0, 4);
        // console.log(this.arrdel);
        for (let i = 0; i < this.arrdel.length; i++) {
          this.arrlist.push(this.arrdel[i]);
        }

        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.pic {
  display: flex;
  //
  flex-flow: column wrap;
  height: 613vh;
  .item1 {
    margin: 0 auto;
    /* 每行展示 2 个 */
    width: calc(100% / 2 - 15px);
    //  column-count: 2;//想要排成的列数
    border-radius: 2%;
    border: 1px solid rgba(204, 204, 204, 0.344);
    margin-bottom: 5px;
    padding: 2px 1px;
  }
  .item1 img {
    width: 100%;
  }
  .botton {
    margin: 5px 10px;
  }
  h5 {
    margin: 10px 0px;
  }
  .di {
    display: flex;
    justify-content: space-between;
    .via {
      position: relative;
      width: 100px;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        overflow: hidden;
      }
      span {
        margin: 5px;
        position: absolute;
        font-size: 2px;
      }
    }
  }
  .like-o {
    margin: 2px;
  }
}

.pay {
  height: 600px;
}
.havepay {
  height: auto;
  padding-bottom: 30px;
  .top {
    display: flex;
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
      padding-left: 120px;
    }
  }
  .my-swipe .van-swipe-item {
    height: 400px;
    color: rgb(0, 0, 0);
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
    p{
margin-top: 5px;
    }
  }

}

</style>>




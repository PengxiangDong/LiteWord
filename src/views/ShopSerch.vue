<!-- 
    coder: 董鹏翔
 -->
<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      shape="round"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>

    <!-- 历史记录 -->
    <div class="shop_banner">
      <span style="font-size: 18px">历史记录</span>
      <img src="../assets/img/删除.png" alt="" />
    </div>
    <div class="shop_content">
      <span v-for="(item, index) in getls" :key="index">
        {{ item }} <span v-for="(item, index) in getvl" :key="index">
        {{item}}
        </span>
      </span>
    </div>

    <!-- 猜你想搜 -->
    <div>
      <div class="shop_search">
        <span style="font-size: 18px; font-family: 'STLiti'">猜你想搜</span>
        <img src="../assets/img/换一换.png" alt="" />
        <span style="color: gray" @click="change">换一换</span>
      </div>
      <div class="shop_search_concent">
        <p v-for="item in itemss" :key="item.id">{{ item.title }}</p>
      </div>
    </div>
    <!-- <img src="../assets/img/食物.jpg" alt=""> -->
    <!-- 常用分类 -->
    <div class="shop_class">
      <span style="font-size: 18px; font-family: 'STLiti'">常用分类</span>

      <div class="shop_class_x">
        <div class="shop_xshop" v-for="item in getList" :key="item.id">
          <img :src="item.url" /><br />
          <!-- <img src="../assets/img/化妆水.png" alt=""> -->
          <span @click="trageds">{{ item.title }}</span>
        </div>
      </div>
    </div>
    <FooterNavVue></FooterNavVue>
  </div>
</template>

<script>
import { Toast } from "vant";
import FooterNavVue from "@/components/public/FooterNav.vue";
export default {
  data() {
    return {
      // 把数据放在这个数组里
      itemsList: [],
      // 将6个数据放在这个数组里
      itemss: [],
      // 用户输入的值
      value: "",
      // 常用分类的数组
      getList: [],
      // 历史记录
      getls: [],
      // value值
      getvl:[]
    };
  },
  components: {
    FooterNavVue,
  },
  methods: {
    onSearch() {
      // Toast(val);
      this.getls = this.value;
  
    },
    onCancel() {
      Toast("取消");
    },
    trageds() {
      this.$router.push("/kfy");
    },
    async change() {
      const { data: res } = await this.$http.get("/call/talk");
      console.log(res);
      this.itemsList = res.data;
      this.itemss = this.itemsList.slice(0, 6);
    },
    async getData() {
      // 常用分类
      const { data: res } = await this.$http.get("/call/aaa");
      this.getList = res.data;
      //  猜你想搜
      const { data: res2 } = await this.$http.get("/call/talk");
      this.itemsList = res2.data;
      // console.log(this.itemsList);
      this.itemss = this.itemsList.slice(0, 6);

      // 历史记录
      const { data: res3 } = await this.$http.get("/shopping/history?userId=1");
      this.getls = res3.data;
      console.log(res3);
      console.log(this.getls);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.shop_banner {
  display: flex;
  justify-content: space-between;
  font-family: "STKaiti";
}
.shop_banner img {
  width: 25px;
  height: 20px;
}
.shop_content {
  height: 100px;
  //  background-color: antiquewhite;
}
.shop_content span {
  line-height: 50px;
  text-align: center;
  margin-left: 5px;
}
.shop_search {
  display: flex;
  justify-content: space-between;
}
.shop_search img {
  width: 20px;
  height: 20px;
  margin-left: 230px;
}
.shop_class {
  margin-top: 15px;
}
.shop_search_concent {
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.shop_search_concent p {
  width: 150px;
  letter-spacing: normal;
  height: 10px;
  margin-left: 20px;
  font-size: 17px;
  font-family: "SimHei";
}
.shop_class_x {
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: "SimHei";
}
.shop_xshop {
  width: 80px;
  height: 90px;
}
.shop_xshop img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-left: 8px;
}
.shop_xshop span {
  font-size: 18px;
  text-align: center;
  margin-left: 8px;
  font-size: 17px;
}
</style>
<template>
  <div class="goods-box">
    <div @click="toDetails" class="item" v-for="g in goodsList" :key="g.id">
      <div class="img">
        <img :src="g.goodsImage" alt="" />
      </div>
      <div class="title">{{ g.title }}</div>
      <div class="price"><span class="unit">￥</span>{{ g.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async getGoods() {
      const { data: res } = await this.$http.get("/goods/finAll");
      this.goodsList = res.data;
    },
    toDetails() {
      this.$router.push({
        path: "/details",
        meta: {
          keepAlive: true, // 需要缓存
        },
      });
    },
  },
  created() {
    this.getGoods();
  },
  data() {
    return {
      goodsList: [],
    };
  },
  beforeDestroy() {
    // console.log("商品列表组件被销毁了");
  },
};
</script>

<style lang="less" scoped>
.goods-box {
  width: 100%;
  height: auto;
  margin-bottom: (165 / 10.8vw);
  box-sizing: border-box;
  padding: 0 (30/10.8vw);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: (10 / 10.8vw);
  place-items: center;
  background-color: #fafafa;

  .item {
    width: (500 / 10.8vw);
    // height: (852 / 10.8vw);
    height: auto;
    background-color: #fff;
    border-radius: (10/10.8vw);
    overflow: hidden;
    margin-bottom: (5/10.8vw);
    .img,
    img {
      width: (500 / 10.8vw);
      height: (500 / 10.8vw);
    }
    .title {
      height: (135/10.8vw);
      line-height: (135/10.8vw/2);
      width: 100%;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 这里是超出几行省略 */
      overflow: hidden;
      margin: 10px 0;
      box-sizing: border-box;
      padding: 0 (20 / 10.8vw);
    }
    .price {
      box-sizing: border-box;
      margin: 10px 0;
      padding: 0 (20 / 10.8vw);
      font-size: (60/10.8vw);
      .unit {
        font-size: (40/10.8vw);
      }
    }
  }
}
</style>
<template>
  <div class="details-container">
    <!-- 返回上一级 -->
    <div class="back-box" @click="$router.back()">
      <van-icon name="arrow-left" />
    </div>
    <!-- banner -->
    <van-swipe @change="onChange" class="banner">
      <van-swipe-item
        v-for="(g, index) in goods.images"
        :key="index"
        class="banner-img"
      >
        <img :src="g" alt="" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/ 4</div>
      </template>
    </van-swipe>
    <!-- info -->
    <div class="info">
      <div class="top">
        <div class="price"><span class="unit">￥</span>{{ goods.price }}</div>
        <div class="collect">
          <van-icon name="star-o" />
        </div>
      </div>
      <div class="bottom">
        <p>{{ goods.title }}</p>
      </div>
    </div>

    <!-- 选择商品属性 -->
    <van-sku
      v-model="isSkuShow"
      :sku="sku"
      :goods="goodsInfo"
      :goods-id="goodsId"
    />

    <!-- buy -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button
        @click="isSkuShow = true"
        type="danger"
        text="立即购买"
      />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsId: "001",
      current: 0,
      goods: [],
      // sku 相关---------
      isSkuShow: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: 0, // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: true, // 是否无规格商品
        hide_stock: false, // 是否隐藏剩余库存
      },
      goodsInfo: {
        picture: "",
      },
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    async getGoods() {
      const { data: res } = await this.$http.get("goods/open/");
      this.goods = res.data;
      this.goodsInfo.picture = res.data.images[0];
      this.sku.price = res.data.price;
      console.log(this.goods);
    },
  },
  created() {
    this.getGoods();
  },
};
</script>

<style lang="less" scoped>
.details-container {
  .back-box {
    width: (90/10.8vw);
    height: (90/10.8vw);
    line-height: (92/10.8vw);
    text-align: center;
    background-color: rgba(#000, 0.1);
    border-radius: 50%;
    position: fixed;
    left: (20/10.8vw);
    top: (20/10.8vw);
    z-index: 1000;

    .van-icon {
      font-size: (50/10.8vw);
      font-weight: 600;
      color: #999;
    }
  }
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
  .banner {
    width: 100%;
    height: (1113/10.8vw);
    background-color: #f5f5f5;
    .banner-img img {
      width: 100%;
      height: (1113/10.8vw);
    }
  }
  .info {
    width: (1028/10.8vw);
    height: auto;
    background-color: #fff;
    margin: (30/10.8vw) auto;
    box-sizing: border-box;
    padding: (20/10.8vw) (50/10.8vw);
    border-radius: (10/10.8vw);
    .top {
      width: 100%;
      height: (145/10.8vw);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price,
      .collect {
        font-size: (60/10.8vw);
        .unit {
          font-size: (30/10.8vw);
        }
      }
    }
    .bottom {
      font-size: (47/10.8vw);
      letter-spacing: 2px;
      line-height: (80/10.8vw);
    }
  }
}
</style>
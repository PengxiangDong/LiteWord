<template>
  <div class="banner-box">
    <van-swipe class="banner" :autoplay="2000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vant, { Lazyload } from "vant";
import "vant/lib/index.css";
import Vue from "vue";
Vue.use(Vant);
Vue.use(Lazyload);
export default {
  data() {
    return {
      images: [
        "http://49.232.3.226:8090/upload/2022/06/ban%20(1).webp",
        "http://49.232.3.226:8090/upload/2022/06/ban%20(2).webp",
        "http://49.232.3.226:8090/upload/2022/06/ban%20(3).webp",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.banner-box {
  margin-top: (120 / 10.8vw);
  box-sizing: border-box;
  padding: 10px (37 / 10.8vw);
  .banner {
    width: 100%;
    height: (341 / 10.8vw);
    border-radius: 5px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
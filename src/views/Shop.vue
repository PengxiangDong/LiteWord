<!-- 
    coder: 董鹏翔
 -->
<template>
  <div>
    <!-- 搜索组件 -->
    <SearchVue></SearchVue>

    <!-- 轮播图 -->
    <BannerVue></BannerVue>

    <!-- 商品列表 -->
    <GoodsListVue></GoodsListVue>

    <!-- 底部导航 -->
    <FooterNavVue></FooterNavVue>
  </div>
</template>

<script>
import FooterNavVue from "@/components/public/FooterNav.vue";
import SearchVue from "@/components/shop/Search.vue";
import BannerVue from "@/components/shop/Banner.vue";
import GoodsListVue from "@/components/shop/GoodsList.vue";
export default {
  components: {
    FooterNavVue,
    SearchVue,
    BannerVue,
    GoodsListVue,
  },
};
</script>

<style lang="less" scoped>
</style>
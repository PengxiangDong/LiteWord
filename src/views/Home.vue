<template>
  <div>
    <div class="center">
      <van-tabs v-model="active" swipeable sticky>
        <!-- 关注内容 -->
        <van-tab title="关注">
         <Attention></Attention>
        </van-tab>
        <!-- 发现内容 -->
        <van-tab title="发现">
        <Discover></Discover>
        </van-tab>
        <!-- 本地内容 -->
        <van-tab title="本地">
         <Locality></Locality>
        </van-tab>
      </van-tabs>
    </div>

    <FooterNavVue></FooterNavVue>
  </div>
</template>

<script>
import Attention from "@/components/home/Attention"
import Discover from "@/components/home/Discover"
import Locality from "@/components/home/Locality"
import FooterNavVue from "@/components/public/FooterNav.vue";

export default {
  components: {
    FooterNavVue,
    Attention,
    Discover,
    Locality
  },

  data() {
    return {
      // 默认刷新中间页
      active: 1,
    
      
    };
  },

 
  
};
</script>

<style lang="less" scoped>



</style>>




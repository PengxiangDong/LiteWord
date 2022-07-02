<template>
  <div class="footer-nav">
    <div
      :class="$route.path === '/home' ? 'active' : ''"
      @click="$router.push('/home')"
    >
      首页
    </div>

    <div
      :class="$route.path === '/shop' ? 'active' : ''"
      @click="$router.push('/shop')"
      class="item"
    >
      购物
    </div>
    <div @click="$router.push('/new')" class="item">
      <img src="../../assets/img/plus-btn.png" alt="" />
    </div>
    <div
      :class="$route.path === '/message' ? 'active' : ''"
      @click="$router.push('/message')"
      class="item"
    >
      消息
    </div>
    <div
      :class="$route.path === '/my' ? 'active' : ''"
      @click="$router.push('/my')"
      class="item"
    >

      我
    </div>
       
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="less" scoped>
.footer-nav {
  width: 100%;
  height: (165 / 10.8vw);
  background-color: #ffffff;
  border-top: 1px solid rgba(#000, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .item {
    font-size: (50/10.8vw);
    font-weight: 400;
  }
  img {
    width: (140 / 10.8vw);
    height: (100 / 10.8vw);
  }
  .active {
    font-weight: 800;
  }
}
</style>
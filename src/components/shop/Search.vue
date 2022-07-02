<template>
  <div class="search-box">
    <input type="text" class="search-input" placeholder="mark" />
    <div class="menu-icon">
      <van-icon name="cart-o" />
      <van-icon name="orders-o" />
      <van-icon name="more-o" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "请输搜索内容",
    };
  },
};
</script>

<style lang="less" scoped>
.search-box {
  width: 100%;
  height: (120 / 10.8vw);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 (37 / 10.8vw);
  background-color: #fff;
  border-bottom: 1px solid rgba(#000, 0.1);
  z-index: 999;
  border-radius: 0;
  .search-input {
    width: (706 / 10.8vw);
    height: (85 / 10.8vw);
    border-radius: 30px;
    background-color: #f6f6f6;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .menu-icon {
    width: (340 / 10.8vw);
    height: (120 / 10.8vw);
    display: flex;
    align-items: center;
    justify-content: space-around;

    .van-icon {
      font-size: (65 / 10.8vw);
      font-weight: 600;
    }
  }
}
</style>
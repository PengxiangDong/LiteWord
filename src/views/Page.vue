<template>
  <div>
    <img v-show="!isshow" src="../assets/img/log.png" alt="" />
    <van-loading v-show="isshow" class="one" size="30px">加载中...</van-loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isshow = true;
    }, 3000);
    setTimeout(() => {
      this.$router.push("/login");
    }, 5000);
  },
};
</script>

<style lang="less" scoped>
img {
  width: 70vw;
  height: 50vw;
  margin-left: 15vw;
  margin-top: 55.55vw;
}
.one {
  margin: 70vw 36vw;
}
</style>
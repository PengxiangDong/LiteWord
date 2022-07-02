<template>
  <div>
       <van-nav-bar
      title="编辑学校"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
     <van-cell center title="展示学校标签">

  <template #right-icon>
    <van-switch v-model="checked" size="24" />
  </template>
</van-cell>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    onClickLeft() {
      this.$router.push("/introduce");
    },
  },
   data() {
    return {
      chosenContactId: '1',
      list: [
        
      ],checked: true,
    };
  },

}
</script>

<style>

</style>
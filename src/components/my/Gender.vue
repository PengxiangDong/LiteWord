<template>
  <div class="num_2">
    <van-nav-bar
      title="编辑性别"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      
    />
     <van-cell center title="展示性别标签">

  <template #right-icon>
    <van-switch v-model="checked" size="24" />
  </template>
</van-cell>
<!-- 男女 -->
<van-contact-list
  v-model="chosenContactId"
  :list="list"
 
 
  v-if="this.checked"
/>
   
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
        {
          id: '1',
          name: '男',
          isDefault: true,
           tel: '21',
        },
        {
          id: '2',
          name: '女',
          tel: '21',
        },
      ],checked: true,
    };
  },

  
};
</script>

<style>
</style>
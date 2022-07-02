<template>
  <div>
 <van-nav-bar
      title="编辑生日"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"

    />
    <van-cell center title="展示生日标签">
  <template #right-icon>
    <van-switch v-model="checked" size="24" />
  </template>
</van-cell>
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
          name: '展示年龄',
          isDefault: true,
           tel: '21',
        },
        {
          id: '2',
          name: '展示星座',
          tel: '摩羯',
        },
      ],checked: true,
    };
  },

}
</script>

<style>

</style>
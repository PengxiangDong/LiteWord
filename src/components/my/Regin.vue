<template>
  <div>
      <van-nav-bar
      title="编辑地区"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      
    />
<van-field
 
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  @click="show = true"
/>
<van-popup v-model="show" round position="bottom">
  <van-cascader
   
    title="请选择所在地区"

    @close="show = false"
    
  />
</van-popup>


  </div>
</template>

<script>
export default {
  data() {
  return {
    show:false
  }
},
   components: {},
  methods: {
    onClickLeft() {
      this.$router.push("/introduce");
    },
  },


  
}
</script>

<style>

</style>
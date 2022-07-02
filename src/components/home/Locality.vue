<template>
<!-- 本地 -->
  <div id="app">
     <van-pull-refresh
            success-text="刷新成功"
            v-model="isLoading"
            @refresh="onRefresh()"
          >
            <br />
            <div class="pic">
              <!-- div -->
              <div class="item1" v-for="(item) in local" :key="item.id">
                <!-- 获取 api 取到的图片地址 -->
                <img :src="item.workImage"  @click="getdet(item.workId)"/>
                <!-- <img src="../../assets/123.jpg" alt=""> -->
                <div class="botton">
                  <div>
                    <!-- 标题区域 -->
                    <h5>{{ item.title}}</h5>
                  </div>
                  <div class="di">
                    <!-- 头像 -->
                    <div class="via">
                      <img :src="item.userInfo.headPhoto" alt="" />
                      <!-- 网名 -->
                      <span>{{item.userInfo.username}}</span>
                    </div>
                    <div class="like-o">
                      <van-icon name="like-o" />
                      <span>{{item.likeWorkNumber}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
data() {
    return {
         
      // 存放本地数据
      local: [],
    
      // 存放本地页刷新后删除的数据
      localdel: [],
    //   刷新
      isLoading: false,
    }
},
  created() {
    this.getdatalocal();
  },

  methods: {
   
   
    // 获取本地数据
    async getdatalocal() {
      const { data: res } = await this.$http.get("/home/findAll");
      // console.log(res);
      this.local = res.data;
      // console.log(this.attlist[0].workImage);
    },

   
    // 本地下拉刷新数据
    onRefresh() {
      // console.log(this.arrlist);
      setTimeout(() => {
        this.localdel = this.local.splice(0, 4);
        // console.log(this.arrdel);
        for (let i = 0; i < this.localdel.length; i++) {
          this.local.push(this.localdel[i]);
        }

        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
     getdet(id){
        this.$router.push("/home/findOne?workId="+id) 
    }

    
  },
}
</script>

<style lang="less" scoped>
.pic {
  display: flex;
  //
  flex-flow: column wrap;
  height: 510vh;
  .item1 {
    margin: 0 auto;
    /* 每行展示 2 个 */
    width: calc(100% / 2 - 15px);
    //  column-count: 2;//想要排成的列数
    border-radius: 2%;
    border: 1px solid rgba(204, 204, 204, 0.344);
    margin-bottom: 5px;
    padding: 2px 1px;
  }
  .item1 img {
    width: 100%;
  }
  .botton {
    margin: 5px 10px;
  }
  h5 {
    margin: 10px 0px;
  }
  .di {
    display: flex;
    justify-content: space-between;
    .via {
      position: relative;
      width: 100px;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        overflow: hidden;
      }
      span {
        margin: 5px;
        position: absolute;
        font-size: 2px;
      }
    }
  }
  .like-o {
    margin: 2px;
  }
}
</style>>

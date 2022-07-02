<!-- 
    coder: 石磊
 -->
<template>
  <div id="login">
    <!-- 帮助 -->
    <div class="help">
      <span>帮助</span>
    </div>
    <!-- 中间动态文字 -->
    <div class="characters">
      <span class="one" ref="one" v-show="ischaracters">一 起&nbsp;</span>
      <span class="two" ref="two">{{ two }}</span>
    </div>
    <!-- 背景图 -->
    <div class="background">
      <video
        v-show="isvideo"
        class="background_one"
        autoplay
        loop
        preload
        muted
        src="../assets/background_one.mp4"
      ></video>
      <video
        v-show="!isvideo"
        class="background_one"
        autoplay
        loop
        preload
        muted
        src="../assets/background_two.mp4"
      ></video>
    </div>
    <!-- 登录 -->
    <button class="but_login" @click="login">
      登&nbsp;&nbsp;&nbsp; &nbsp; 录
    </button>
    <!-- 注册 -->
    <button class="but_register" @click="registerme">
      注&nbsp;&nbsp;&nbsp; &nbsp; 册
    </button>
    <!-- 底部 -->
    <div class="radio_login">
      <van-radio-group v-model="radio" ref="radio_van">
        <van-radio name="1"
          >我已阅读并同意
          <span class="one"
            >《用户协议》《隐私政策》《儿童/青少年个人信息保护政策》《中国移动服务认证服务条款》</span
          >
        </van-radio>
      </van-radio-group>
    </div>
    <!-- 登录页面 -->
    <van-form v-show="islogin" class="loginform">
      <van-field
        class="loginform1"
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true }]"
      />
      <van-field
        class="loginform2"
        v-model="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="button"
          @click="loginfrom"
          >提交</van-button
        >
      </div>
    </van-form>
    <!-- 注册页面 -->
    <van-form v-show="isregister" class="registerform">
      <van-field
        v-model="register.username"
        label="用户名"
        placeholder="请输入用户名"
        class="register1"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="register.password"
        label="密码"
        placeholder="请输入密码"
        class="register2"
        :rules="[{ required: true }]"
      />

      <van-field
        v-model="register.phone"
        label="手机号"
        placeholder="请输入手机号"
        class="register3"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="register.sex"
        class="register4"
        label="性别"
        placeholder="请输入性别"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="register.email"
        label="邮箱"
        placeholder="请输入邮箱"
        class="register5"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="register.verify"
        label="验证码"
        placeholder="请输入验证码"
        class="register6"
        :rules="[{ required: true }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="button" @click="send"
          >发送验证码</van-button
        >
      </div>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="button"
          @click="registerform1"
          >提交</van-button
        >
      </div>
    </van-form>
    <!-- 没有同意协议弹框 -->
    <van-notify v-model="isnotify1" type="warning" background="red">
      <van-icon name="fail" style="margin-right: 4px" />
      <span>您未同意协议</span>
    </van-notify>
    <!-- 账号或密码错误 -->
    <van-notify v-model="isnotify2" type="warning" background="red">
      <van-icon name="fail" style="margin-right: 4px" />
      <span>账号或密码错误</span>
    </van-notify>
    <!-- 发送验证码 -->
    <van-notify v-model="issend" type="warning" background="blue">
      <van-icon name="fail" style="margin-right: 4px" />
      <span>发送成功,请登录邮箱查看</span>
    </van-notify>
    <van-notify v-model="shibai" type="warning" background="red">
      <van-icon name="fail" style="margin-right: 4px" />
      <span>您注册失败 请重新注册</span>
    </van-notify>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      // 控制视频的显示
      isvideo: true,
      // 存储文字的数组
      text: [
        "引 领 潮 流",
        "满 足 味 蕾",
        "点 亮 生 活",
        "看 世 界",
        "发 现 新 知 识",
        "欢 迎 来 到 小 红 书",
      ],
      // 控制数组的变化 下标
      index: 0,
      // 控制一起的文字显示与隐藏
      ischaracters: true,
      // 插值语法 加入文字
      two: "",
      // 控制注册的show
      isregister: false,
      // 注册账号密码存放处
      register: {
        username: "",
        password: "",
        phone: "",
        sex: "",
        email: "",
        verify: "",
        age: "20",
      },
      // 登录页面
      islogin: false,
      // 登录获取到的手机号  密码
      phone: "",
      password: "",
      // 单选框
      radio: "",
      // 控制弹出对话框
      isnotify1: false,
      isnotify2: false,
      issend: false,
      shibai: false,
    };
  },
  methods: {
    // 发送验证码
    send() {
      this.issend = true;

      setTimeout(() => {
        this.issend = false;
      }, 2000);

      this.$http({
        url: "user/verify",
        params: {
          email: this.register.email,
        },
        method: "GET",
      });
    },

    login() {
      this.islogin = !this.islogin;
      this.isvideo = !this.isvideo;
    },
    loginfrom() {
      // 判断我已同意是否勾选
      if (this.radio != 1) {
        this.isnotify1 = true;
        setTimeout(() => {
          this.isnotify1 = false;
        }, 2000);
        return;
      }

      this.$http({
        url: "/user/login",
        method: "GET",
        params: {
          phone: this.phone,
          password: this.password,
        },
      }).then((val) => {
        if (val.data.code == 200) {
          sessionStorage.setItem("id", val.data.data.id);
          this.$router.push("/home");
        } else {
          this.isnotify2 = true;
          setTimeout(() => {
            this.isnotify2 = false;
          }, 2000);
        }
      });

      // console.log("-----------");

      // this.$http
      //   .post("/login", {
      //     data: {
      //       phone: this.phone,
      //       password: this.password,
      //     },
      //   })
      //   .then((res) => {
      //     if (res.data.meta.status == 200) {
      //       this.$router.push("/home");
      //     } else {
      //       this.isnotify2 = true;
      //       setTimeout(() => {
      //         this.isnotify2 = false;
      //       }, 2000);
      //     }
      //   });
    },
    registerme() {
      this.isregister = !this.isregister;
      this.isvideo = !this.isvideo;
    },
    registerform1() {
      if (this.radio != 1) {
        this.isnotify1 = true;
        setTimeout(() => {
          this.isnotify1 = false;
        }, 2000);
        return;
      }
      // console.log(this.register);
      this.$http({
        url: "user/register",
        method: "POST",
        data: this.register,
      }).then((res) => {
        // console.log(res);
        if (res.data.code == 200) {
          sessionStorage.setItem("id", res.data.data.id);
          this.$router.push("/home");
        } else {
          this.shibai = true;
          setTimeout(() => {
            this.shibai = false;
          }, 2000);
        }
      });
    },
  },
  created() {
    // this.loginfrom();
  },
  mounted() {
    setInterval(() => {
      this.ischaracters = true;
      if (this.index > 5) {
        this.index = 0;
      }
      if (this.index == 5) {
        this.ischaracters = false;
      }

      this.two = this.text[this.index];
      this.index++;
    }, 2000);
  },
};
</script>

<style lang="less" scoped>
.background {
  width: 100%;
  height: 100%;
}
.background_one {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.help {
  position: absolute;
  top: (90/10.8vw);
  right: (30/10.8vw);
  font-size: 16px;
  color: #ccc;
}
.characters {
  position: absolute;
  top: (280/10.8vw);
  left: (280/10.8vw);
  font-weight: bold;
  .one {
    font-size: 25px;
    color: #fff;
  }
  .two {
    font-size: 25px;
    color: #fff;
    text-align: center;
  }
}
.but_login {
  position: absolute;
  top: (1000/10.8vw);
  width: (700/10.8vw);
  height: (100/10.8vw);
  left: (200/10.8vw);
  border-radius: 100px;
  outline: none;
  background: rgba(0, 0, 200, 0.1);
  color: #fff;
  font-weight: 50;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 18px;
}
.but_register {
  position: absolute;
  top: (1200/10.8vw);
  width: (700/10.8vw);
  height: (100/10.8vw);
  left: (200/10.8vw);
  border-radius: 100px;
  outline: none;
  background: rgba(0, 0, 20, 0.2);
  color: #fff;
  font-weight: 50;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 18px;
}
.radio_login {
  width: 67%;
  position: absolute;
  bottom: 9vw;
  left: 19vw;
  font-size: 10px;
  .one {
    color: #fff;
  }
}
.loginform {
  position: absolute;
  top: 80vw;
  left: 12vw;
  color: #fff;
}
.registerform {
  position: absolute;
  top: 50vw;
  left: 12vw;
}
.loginform1 {
  border-radius: 5px 5px 0 0;
  background-color: rgba(111, 138, 183, 0.5);
}
.loginform2 {
  border-radius: 0 0 5px 5px;
  background-color: rgba(144, 72, 95, 1);
}

.register1 {
  border-radius: 5px 5px 0 0;
}
.register6 {
  border-radius: 0 0 5px 5px;
}
.van-cell::after {
  border: none;
}
.register1,
.register2,
.register3 {
  background-color: rgba(195, 213, 78, 0.5);
}
.register4,
.register5,
.register6 {
  background-color: rgba(144, 72, 95, 1);
}
</style>
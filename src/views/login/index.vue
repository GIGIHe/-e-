<template>
  <div class="login-wrapper">
    <div>
      <Header></Header>
    </div>
    <div class="logo">
      <img src="../../../public/img/logo.png" alt="">
    </div>
    <div class="login-box">
      <input type="text" name="username" placeholder="身份证号" v-model="username">
      <input type="password" name="password" placeholder="密码" v-model="password">
      <input type="button" value="登录" @click="login">
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "1001",
      password: "123456"
    };
  },
  components: {
    Header
  },
  methods: {
    login() {
      this.$axios
        .post("/hhdj/user/userLogin.do", {
          id_card: this.username,
          password: this.password
        })
        .then(res => {
          if (res.code == 1) {
            //   localStorage.setItem = res.token
            this.$store.commit("CHANGE_USER", res.data);
            this.$store.commit("CHANGE_TOKEN", res.token);
            Toast({
              message: "登录成功",
              position: "top"
            });
            setTimeout(() => {
              this.$router.push("/mypart");
            }, 1000);
          }
        });
    }
  }
};
</script>

<style scoped lang = "scss">
.login-wrapper {
  background-color: #c50206;
  min-height: 666px;
  .logo {
    width: 4.06rem;
    height: 48.86px;
    margin: 43px auto 30px auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login-box {
    input {
      display: block;
      margin: 0 auto;
      background-color: #c50206;
      border: 1px solid #ff0;
      border-radius: 6px;
      width: 6rem;
      height: 39.66px;
      outline: none;
      color: #fff;
      text-indent: 1em;
      margin-bottom: 10px;
    }
    ::-webkit-input-placeholder {
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>
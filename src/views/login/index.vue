<template>
    <div class="login-wrapper">
        <div>
            <Header></Header>
        </div>
        <div class="logo">
            <img src="../../../public/img/logo.png" alt="">
        </div>
        <div class="login-box">
            <input type="text" name="username" placeholder="身份证号">
            <input type="password" name="password" placeholder="密码">
            <input type="button" value="登录">
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components:{
        Header
    }
};
</script>

<style scoped lang = "scss">
.login-wrapper {
  background-color: #c50206;
  height: 100%;
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
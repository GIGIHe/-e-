<template>
    <div>
        <Header></Header>
        <div class="userinfo-top mt">
            <img src="../../../public/mypartImg/头像@2x.png" alt="">
            <a href="#" class="a-cl">你还没有登录，请登录</a>
        </div>
        <div class="userinfo-list">
            <router-link to="/" class="a-cl">
                <i class="icon-l"><img src="../../../public/mypartImg/个人信息@2x.png" alt=""></i>
                <p class="userinfo">个人信息</p>
                <i class="ico-r"><img src="../../../public/mypartImg/形状-7-拷贝-5@2x.png" alt=""></i>
            </router-link>
            <router-link to="/" class="a-cl">
                <i class="icon-l"><img src="../../../public/mypartImg/量化积分icon@2x.png" alt=""></i>
                <p>个人量化积分</p>
                <i class="ico-r"><img src="../../../public/mypartImg/形状-7-拷贝-5@2x.png" alt=""></i>
            </router-link>
            <router-link to="/" class="a-cl">
                <i class="icon-l"><img src="../../../public/mypartImg/修改密码icon@2x.png" alt=""></i>
                <p>修改密码</p>
                <i class="ico-r"><img src="../../../public/mypartImg/形状-7-拷贝-5@2x.png" alt=""></i>
            </router-link>
            <router-link to="/" class="a-cl">
                <i class="icon-l"><img src="../../../public/mypartImg/党费png.png" alt=""></i>
                <p>党费缴纳</p>
                <i class="ico-r"><img src="../../../public/mypartImg/形状-7-拷贝-5@2x.png" alt=""></i>
            </router-link>
        </div>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Tabbar from "@/components/Tabbar";

export default {
  components: {
    Header,
    Tabbar
  },
  // created(){
  //   console.log("name:",this.$route.name);
  // }
};
</script>

<style scoped lang = "scss">
.userinfo-top {
  background-color: #c50206;
  width: 7.5rem;
  height: 187.5px;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
  padding-top: 70px;
  a{
    color: #fff;
  }
  img {
    width: 1.25rem;
    height: 62.5px;
    display: block;
    margin: 0 auto;
    padding-bottom: 10px;
  }
}
.userinfo-list {
  font-size: 20px;
  a {
    display: flex;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px solid #ddd;
    .icon-l {
      width: 0.64rem;
      height: 52px;
      margin-left: 5px;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .ico-r {
      width: 0.1534rem;
      height: 52px;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    p{
        width: 6rem;
        margin: 0 10px 0 10px;
    }
  }
}
</style>
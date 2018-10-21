<template>
    <div class="index-wrapper">
        <!-- 头部开始 -->
        <div class="header-wrap">
            <div class="img-box">
                <img src="../../../public/img/logo.png" />
            </div>
            <div class="login">
              <!-- userInfo初始化为null时 -->
                <!-- <router-link to="/Login" v-show="$store.state.userInfo">登录</router-link> -->
                <router-link to="/Login" v-show="!$store.state.userInfo.username">登录</router-link>
            </div>
        </div>
        <!-- 头部结束 -->
        <!-- 轮播图开始 -->
        <div class="swipe">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in swipeData" :key="index">
                   <router-link :to="{name:'newsDetail',params:{id:item.url}}">
                    <img :src="item.imgUrl">
                    <p class="img-text">{{item.title}}</p>
                    </router-link>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            
        </div>
        <!-- 轮播图结束 -->
        <!-- menulist start -->
        <div class="menulist">
            <div class="row">
                <router-link to="/neweyes">
                    <img src="../../../public/img/icon_01.png">
                    <p class="row-text">信工新闻眼</p>
                </router-link>

                <router-link to="/life">
                    <img src="../../../public/img/icon_03.png">
                    <p class="row-text">掌上组织生活</p>
                </router-link>
                <router-link :to="$store.state.userInfo.username ? '/interactive':'/login'">
                    <img src="../../../public/img/icon_05.png">
                    <p class="row-text">党员云互动</p>
                </router-link>
            </div>
            <div class="row">
                <router-link to="/oneclick">
                    <img src="../../../public/img/icon_04.png">
                    <p class="row-text">党建一点通</p>
                </router-link>
                <router-link to="/showidentity">
                    <img src="../../../public/img/icon_06.png">
                    <p class="row-text">党员亮身份</p>
                </router-link>
                <router-link to="/">
                    <img src="../../../public/img/icon_02.png">
                    <p class="row-text">党史上的今天</p>
                </router-link>
            </div>
        </div>
        <!-- menulist end -->
        <!-- banner start -->
        <div class="banner">
            <img src="../../../public/img/banner001.png" alt="">
        </div>
        <!-- banner end -->
        <!-- cell-banner start -->
        <div class="cell-banner">
            <div class="banner-l"></div>
            <div class="banner-r">
                <div class="banner-r-item">
                   <router-link to="/anytimestudy"></router-link>
                   <router-link to="/autoPhoto"></router-link>
                </div>
                <div class="banner-r-item">
                    <router-link to="/system"></router-link>
                    <router-link to="/activity"></router-link>
                </div>
            </div>
        </div>
        <!-- cell-banner end -->
        <!-- tabbar start -->
        <div class="tabbar">
        <Tabbar></Tabbar>
        </div>
        <!-- tabbar end -->
    </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import Tabbar from '@/components/Tabbar'
export default {
  components:{
    Tabbar
  },
  data() {
    return {
      swipeData: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  },
  methods: {
    //请求轮播图数据
    getSwipe() {
      this.$axios.get("/hhdj/carousel/carouselList.do").then(res => {
        this.swipeData = res.rows;
        console.log(this.swipeData);
      });
    },
  },
  created() {
    this.getSwipe();
  }
};
</script>

<style scoped lang = "scss">
.header-wrap {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 998;
  height: 44px;
  line-height: 44px;
  background-color: #c50206;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px;
  .img-box {
    display: block;
    height: 34px;
    line-height: 34px;
    width: 2.92rem;
    padding: 0 2px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login {
    font-size: 18px;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
}

/* 轮播图 */
.swipe {
  height: 200px;
  margin-top: 44px;
  position: relative;
  img {
    width: 100%;
    height: 187.5px;
  }
  .img-text {
    position: absolute;
    left: 0;
    bottom: 10px;
    right: 0;
    font-size: 14px;
    height: 20px;
    color: #fff;
    background-color: rgba($color: #000000, $alpha: 0.4);
  }
}
/* menulist */
.menulist {
  height: 197px;
  background: url("../../../public/img/bt_bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .row {
    display: flex;
    a {
      flex: 1;
      justify-content: space-around;
      text-align: center;
      text-decoration: none;
      color: #666;
      .row-text {
        font-size: 12px;
      }
      img {
        width: 1rem;
        height: 50px;
      }
    }
  }
}
/* banner */
.banner {
  width: 7.5rem;
  img {
    width: 100%;
    display: block;
  }
}
/* cell-banner */
.cell-banner {
  width: 7.5rem;
  height: 165px;
  background: url("../../../public/img/tese.png") no-repeat;
  background-size: 100%;
  display: flex;
  .banner-l{
      flex: 1;
  }
  .banner-r {
    flex:2;
    display: flex;
    flex-direction: column;
    .banner-r-item{
        display: flex;
        height: 87.5px;
        a{
            flex: 1;
        }
    }
  }
}
/* tabbar */
.tabbar{
height: 49px;
}
</style>
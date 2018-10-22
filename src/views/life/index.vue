<template>
    <div>
        <Header></Header>
        <div class="top-img mt">
            <img src="../../../public/img/timg.jpg" alt="">
        </div>
        <div class="menu">
            <div class="top">
                <router-link to="/study">
                    <img src="../../../public/img/icon1.png" alt="">
                    <span>政治学习</span>
                </router-link>
                <router-link to="/thoughts">

                    <img src="../../../public/img/icon2.png" alt="">
                    <span>思想汇报</span>

                </router-link>
                <router-link to="/conclusion">
                    <img src="../../../public/img/icon3.png" alt="">
                    <span>心得总结</span>
                </router-link>
            </div>
            <div class="bottom">
                <router-link to="/choice">
                    <img src="../../../public/img/icon4.png" alt="">
                    <span>民主评议</span>
                </router-link>
                <router-link to="/findpart">
                    <img src="../../../public/img/icon5.png" alt="">
                    <span>流动党员找组织</span>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  methods: {}
};
</script>

<style scoped lang = "scss">
.top-img {
  width: 7.5rem;
  height: 181.63px;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.menu {
  font-size: 14px;
  .top,
  .bottom {
    margin-top: 10px;
    display: flex;
    text-align: center;
    a {
      color: #555;
      img {
        width: 1.7rem;
        height: 85px;
        display: block;
        margin: 4px auto;
      }
    }
  }
  .top {
    justify-content: space-around;
  }
  .bottom {
    width: 66.6%;
    justify-content: space-around;
  }
}
</style>
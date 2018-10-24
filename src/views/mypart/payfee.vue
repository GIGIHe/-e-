<template>
    <div>
        <Header></Header>
        <div class="wraper">
            <h3 class="fz-18 mt">请选择支付方式</h3>
            <li @click="wechat" class="a-cl allinfo fz-16">
                <i class="icon-l iconfont icon-weixin"></i>
                <p>微信</p>
                <i class="ico-r"><img src="../../../public/mypartImg/形状-7-拷贝-5@2x.png" alt=""></i>
            </li>
            <li @click="alipay" class="a-cl allinfo fz-16">
                <i class="icon-l iconfont icon-zhifubao"></i>
                <p>支付宝</p>
                <i class="ico-r"><img src="../../../public/mypartImg/形状-7-拷贝-5@2x.png" alt=""></i>
            </li>
            <mt-popup v-model="popupVisible" modal="true" closeOnClickModal="true" popup-transition="popup-fade">
                <div class="tac" v-if="alishow"><p class="fz-16">支付宝</p><img src="../../../public/img/alipay.png" class="pay-img" ></div>
                <div  class="tac" v-if="weshow"><p class="fz-16">微信</p><img src="../../../public/img/0wechat.png" class="pay-img" ></div>
            </mt-popup>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      popupVisible: false,
      weshow: false,
      alishow: false
    };
  },
  methods: {
    wechat() {
      //微信显示的时候同时控制支付宝不显示
      this.weshow = true;
      this.alishow = false;
      this.popupVisible = !this.popupVisible;
    },
    alipay() {
      this.alishow = true;
      this.weshow = false;
      this.popupVisible = !this.popupVisible;
    }
  }
};
</script>

<style scoped lang = "scss">
h3 {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
}
.allinfo {
  display: flex;
  height: 54px;
  line-height: 54px;
  border-bottom: 1px solid #ddd;
  /deep/ .icon-weixin {
    color: #6cc143;
  }
  /deep/ .icon-zhifubao {
    color: #1296db;
  }
  .icon-l {
    width: 0.64rem;
    height: 52px;
    margin-left: 5px;
    font-size: 24px;
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
  p {
    width: 6rem;
    font-size: 18px;
    margin: 0 10px 0 10px;
  }
}
.pay-img {
  width: 5rem;
  height: 300px;
}
.tac{
    text-align: center;
}
</style>
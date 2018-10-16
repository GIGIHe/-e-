<template>
    <div class="bar-wraper">
        <router-link to="/" class="bar-item">
            <i class="icon1 icon"></i>
            <span class="active">首页</span>
        </router-link>
        <router-link to="/" class="bar-item">
            <i class="icon2 icon"></i>
            <span>通知早知道</span>
        </router-link>
        <router-link to="/" class="bar-item">
            <i class="icon3 icon"></i>
            <span>我的党建</span>
        </router-link>
    </div>

</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.bar-wraper {
  font-size: 12px;
  height: 49px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../../public/img/底部bg.png") no-repeat;
  .bar-item {
    flex: 1;
    text-align: center;
    color: #666;
    .icon {
      display: block;
      height: 27px;
      width: 0.42rem;
      margin: 0 auto;
    
    }
    .icon1 {
      background: url("../../../public/img/党_red.png") no-repeat;
       background-size: 100%;
    }
    .icon2 {
      background: url("../../../public/img/消息_grey.png") no-repeat;
       background-size: 100%;
    }
    .icon3 {
      background: url("../../../public/img/会员_grey.png") no-repeat;
       background-size: 100%;
    }
    .icon2:active{
        background:url("../../../public/img/消息_red.png");
         background-size: 100%;
    }
    .icon3:active{
        background:url("../../../public/img/会员_red.png");
         background-size: 100%;
    }
  }
  .bar-item:active {
    border-top: 2px solid #f00;
    color: #f00;
  }
  .active{
      color: #f00;
  }
}
</style>
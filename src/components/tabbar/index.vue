<template>
  <div class="bar-wraper">
    <router-link to="/" class="a-cl">
      <div class="item" :class="$route.name=='index'?'active':''">
        <i class="iconfont icon-party"></i>
        <span>首页</span>
      </div>
    </router-link>
    <router-link to="/notice" class="a-cl">
      <div class="item" :class="$route.name=='notice'?'active':''">
        <i class="iconfont icon-xiaoxi"></i>
        <span>通知早知道</span>
      </div>
    </router-link>
    <router-link to="/mypart" class="a-cl">
      <div class="item" :class="$route.name=='mypart'?'active':''">
        <i class="iconfont icon-touxiang"></i>
        <span>我的党建</span>
      </div>
    </router-link>

  </div>
</template>
<script>
export default {};
</script>
<style scoped lang = "scss">
.bar-wraper {
  box-sizing: border-box;
  height: 49px;
  border-bottom: 1px solid #ddd;
  display: flex;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../../public/img/底部bg.png") no-repeat;
  a {
    font-size: 14px;
    box-sizing: border-box;

    flex: 1;
    .item {
      display: flex;
      flex-direction: column;
      /deep/.iconfont {
        margin-top: 7px;
      }
    }
  }
}
.active {
  color: #ca282b;
  border-top: 1px solid #ca282b;
}
</style>
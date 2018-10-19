<template>
    <div>
        <Header></Header>
        <div class="banner mt">
            <img src="../../../public/img/jifen.png">
            <span class="score fz-14 cl-w">99</span>
        </div>
        <div class="scoreDetail">
            <i class="iconfont icon-jifen-active score-item score-format"></i>
            <span class="fz-20">积分明细</span>
            <i class="iconfont icon-arrow-right-copy-copy score-format "></i>
        </div>
        <div class="score-rules fz-14">
            <span>积分规则</span><i class="iconfont icon-wenhao rule-color fz-20"></i>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  }
};
</script>
<style>
.score-item {
  color: rgb(230, 121, 121);
  margin-left: 4px;
}
.score-format {
  font-size: 24px;
}
.rule-color{
    color: #c50206;
}
</style>

<style scoped lang = "scss">
.banner {
  width: 7.5rem;
  height: 144.78px;
  position: relative;
  img {
    width: 100%;
    height: 144.78px;
    margin-top: -1px;
  }
  .score {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.scoreDetail {
  width: 7.5rem;
  height: 54px;
  line-height: 54px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-bottom: 1px solid #ddd;
}
.score-rules{
height: 34px;
box-sizing: border-box;
padding: 0 10px;
line-height: 34px;
display: flex;
justify-content: space-between;
background: #eee;
}
</style>
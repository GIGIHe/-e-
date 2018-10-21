<template>
  <mt-header :title="title" :fixed="true" class="cl">
    <div @click="handle" slot="left">
      <mt-button icon="back"></mt-button>
    </div>
    <!-- <div @click="$router.push('/updateinfo')" slot="right" v-if="$route.name=='userinfo'">
      <span>编辑</span>
    </div>
    <div slot="right" v-show="$route.name=='updateinfo'" @click="handleSave">  -->
<!-- 将编辑和保存按钮控制在公共组件上的写法，需要emit触发事件进行操作，emit触发事件不一定都要传入具体的值，还可以通过emit触发事件 -->
      <!-- <span>保存</span>
    </div> -->
  </mt-header>
</template>
<script>
import { Header } from "mint-ui";
export default {
  methods: {
    handle() {
      this.$router.history.go(-1);
    },
    // handleSave(){
    //    this.$emit('success')
    // }
  },
  computed: {
    title() {
      return this.$route.meta.title;
    }
  }
};
</script>
    <style scoped="scoped" lang="scss">
.cl {
  background-color: #c50206;
  height: 44px;
  z-index: 999;
  /deep/ .mint-header-title {
    font-size: 16px;
  }
}
</style>
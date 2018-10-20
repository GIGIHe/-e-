<template>
  <mt-header :title="title" :fixed="true" class="cl">
    <div @click="handle" slot="left">
      <mt-button icon="back"></mt-button>
    </div>
    <div @click="$router.push('/updateinfo')" slot="right" v-if="$route.name=='userinfo'">
      <span>编辑</span>
    </div>
    <div @click="handleSave" slot="right" v-if="$route.name=='updateinfo'">
      <span>保存</span>
    </div>
  </mt-header>
</template>
<script>
import { Header } from "mint-ui";
export default {
  methods: {
    handle() {
      this.$router.history.go(-1);
    },
    handleSave(){
      this.$axios.post('/hhdj/user/modifyInfo.do').then(res=>{
        if(res.code == 1){
          // Toast('修改成功')
          this.$router.push('/userinfo')
        }
      }).catch(err=>{
        Toast(err)
      })
    }
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
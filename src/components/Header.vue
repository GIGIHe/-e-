<template>
<mt-header :title="title" :fixed="true" class="cl">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>
</template>
<script>
import { Header } from 'mint-ui';
export default {
    computed:{
        title(){
            return this.$route.meta.title
        }
    }
};
</script>
    <style scoped="scoped" lang="scss">
.cl{
    background-color: #c50206;
    height: 44px;
   /deep/ .mint-header-title{
        font-size: 16px;
    }
}
</style>
<template>
    <mt-header :title="title" :fixed="true" class="cl">
        <div @click="handle" slot="left">
            <mt-button icon="back"></mt-button>
        </div>
    </mt-header>
</template>
<script>
import { Header } from "mint-ui";
export default {
  methods: {
    handle() {
      this.$router.history.go(-1);
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
  /deep/ .mint-header-title {
    font-size: 16px;
  }
}
</style>
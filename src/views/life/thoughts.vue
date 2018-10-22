<template>
    <div>
        <Header></Header>
        <div class="content mt">
            <div class="status">
                <img src="../../../public/img/reviewing.png" alt="">
                <p class="fz-14 a-cl">正在审核</p>
            </div>
            <div class="btn cl-w fz-16" @click="$router.push('/life')">
                关闭
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getData() {
      let token = this.$store.token;
      let form = new FormData();
      form.append("user_id", token);
      this.$axios
        .get(`/hhdj/report/reportInfo.do?user_id=${token}`, form)
        .then(res => {});
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang = "scss">
.status{
    text-align: center;
    box-sizing: border-box;
    padding-top: 40px;
    padding-bottom:50px;
   img{
       width: 1.8rem
   }
}
.btn{
    background-color: #c50206;
    width: 1.8rem;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    border-radius: 4px;
    text-align: center;
}
</style>
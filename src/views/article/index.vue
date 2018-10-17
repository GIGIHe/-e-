<template>
  <div>
    <Header></Header>
    <div class="article-wraper mt">
      <h3 class="title">{{this.artcicleData.title}}</h3>
      <div class="log"><img :src="this.artcicleData.pic" alt=""></div>
      <div class="content" v-html="this.artcicleData.content"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      artcicleData: ""
    };
  },
  methods: {
    getData() {
      let id = this.$route.params.id;
      this.$axios.get(`/hhdj/news/newsContent.do?newsId=${id}`).then(res => {
        if (res.code == 1) {
          this.artcicleData = res.data;
        }
      });
    }
  },
  created() {
    this.getData();
    console.log(this.$route.params);
  }
};
</script>

<style lang = "scss">
.article-wraper {
  .title {
    font-size: 20px;
    font-weight: 700;
    color: #555;
    margin-bottom: 10px;
  }
  .content {
    font-size: 18px;
    h4,
    p{
     line-height: 2;
    }
  }
  .log {
    font-size: 12px;
    width: 7.5rem;
    img {
      display: block;
      width: 7.1rem;
      margin: 0 auto;
    }
  }
}
.ql-align-center{
  img{
    width: 7.5rem;
  }
}
</style>
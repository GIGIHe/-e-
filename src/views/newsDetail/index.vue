<template>
    <div class="news-t">
        <Header></Header>
        <h3 class="mt">{{newsData.title}}</h3>
        <div class="content" v-html="newsData.content"></div>
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
      newsData: ""
    };
  },
  methods: {
    getNewsData() {
      let id = this.$route.params.id;
      this.$axios.get(`/hhdj/news/newsContent.do?newsId=${id}`).then(res => {
        if (res.code == 1) {
          this.newsData = res.data;
        }
      });
    }
  },
  created() {
    this.getNewsData();
  }
};
</script>

<style lang="scss">
.news-t {
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
  }
  .content p {
    font-size: 12px;
    line-height: 2;
    margin-top: 10px;
  }
}
</style>
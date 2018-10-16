<template>
    <div>
        <Header></Header>
        <div class="article-wraper mt">
            <div class="title">{{this.artcicleData.title}}</div>
           
            <div class="content">{{this.artcicleData.content}}</div>
             <div class="log"><img :src="this.artcicleData.pic" alt=""></div>
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
  }
};
</script>

<style scoped lang = "scss">
.article-wraper{
.title{
font-size: 24px;
font-weight: 700;
color: #666;
}
.content{
    font-size: 16px;
}
.log{
    font-size: 12px;
    width: 7.5rem;
    img{
        display: block;
         width: 7.1rem;
         margin: 0 auto;
}
    }
   
}
</style>
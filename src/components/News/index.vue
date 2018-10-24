<template>
  <div class="news-t">
    <Header></Header>
    <div class="content-wrap">
      <h3 class="mt">{{newsData.title}}</h3>
      <div class="content" v-html="newsData.content"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  // 子组件接收父组件传来的值
  props: {
    data: {
      type: Object
    }
  },
  // 监听父组件的值，赋给子组件
  watch:{
data(val){
  return this.newsData = val
}
  },
  components: {
    Header
  },
  data() {
    return {
      newsData: {}
    };
  },
  methods: {
    // getNewsData() {
    //   let id = this.$route.params.id;
    //   this.$axios.get(`/hhdj/news/newsContent.do?newsId=${id}`).then(res => {
    //     if (res.code == 1) {
    //       this.newsData = res.data;
    //     }
    //   });
    // }
  },
  created() {
    // this.getNewsData();
    console.log("new:",this.newsData);
  }
};
</script>
<style>
img { 
      width: 7.5rem;
  }
  .content p 
  {
    font-size: 12px;
    line-height: 2;
    margin-top: 10px;
  }
   .content h4{
     font-size: 20px;
      line-height: 1.5;
   }
   .content h5{
     font-size: 12px;
   }
   
   .content-wrap{
padding:0 16px;
   }
  
</style>

<style lang="scss">
.news-t {
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    padding: 5px;
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
</style>
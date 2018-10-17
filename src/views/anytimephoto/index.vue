<template>
    <div>
        <Header></Header>
        <div class="mt list">
            <div class="img-list" v-for="(item,index) in photoData" :key="index">
                <router-link :to="{name:'newsDetail',params:{id:item.newsId}}" class="a-cl ">
                <img :src="item.pic" alt="">
                <p>{{item.title}}</p>
                 </router-link>
            </div>
       
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
      photoData: []
    };
  },
  methods: {
    getPhotoData() {
      this.$axios
        .get("/hhdj/news/newsList.do?page=1&rows=10&type=7")
        .then(res => {
          this.photoData = res.rows;
        });
    }
  },
  created() {
    this.getPhotoData();
  }
};
</script>

<style scoped lang="scss">
 .list{
  display: flex;
  width: 7.5rem;
  flex-wrap: wrap;
  font-size: 14px;
  .img-list {
    width: 3.11rem;
    margin: 10px 16px;
    img {
      width: 100%;
    }
  }
}
</style>
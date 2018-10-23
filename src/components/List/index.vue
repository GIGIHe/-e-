<template>
  <div>
    <Header></Header>
    <ul class=" m-t" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="5">
      <li v-for="(item,index) in listData" :key="index" class="list-item">
        <router-link :to="{name:'newsDetail',params:{id:item.newsId}}">
          <div class="img-box">
            <img :src="item.pic">
          </div>
          <div class="content">
            <h3 class="content-title">{{item.title}}</h3>
            <div class="bottom">
              <span class="time">{{item.currentTime}}</span>
              <span class="lookup">{{item.count}}</span>
            </div>
          </div>
        </router-link>
      </li>
      <mt-spinner type="snake" class="spiner" v-show="isShow"></mt-spinner>
      <p class="mb" v-show="!isShow">没有更多数据</p>
    </ul>
    <Tabbar v-if="$route.name=='notice'"></Tabbar>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Tabbar from "@/components/Tabbar";
export default {
  props: {
    data: {
      type: Array
    }
  },

  components: {
    Header,
    Tabbar
  },
  data() {
    return {
      listData: [],
      name: "",
      isShow: false,
      total: 1,
      pn: 1
    };
  },
  methods: {
    loadMore() {
      let type = this.$route.meta.type;
      this.isShow = true;
      this.$axios
        .get(`/hhdj/news/newsList.do?page=${this.pn}&rows=10&type=${type}`)
        .then(res => {
          if (res.code == 1) {
            // this.listData = res.rows;
            if (res.rows.length) {
              this.pn += 1;
              this.listData = this.listData.concat(res.rows);
              this.busy = true;
            } else {
              this.busy = true;
              this.isShow = false;
            }
          }
        });
    }
    // loading() {
    //   if (this.total == this.listData.length) {
    //     return (this.isShow = false);
    //   } else {
    //     return (this.isShow = true);
    //   }
    // }
  },
  watch: {
    data(val) {
      return (this.currentValue = val);
    }
  },
  created() {
    console.log("current:", this.currentValue);
    console.log("type:", this.$route.meta.type);
    // this.getData();
    //  console.log('query: ',this.$route.query);
  }
};
</script>

<style scoped lang="scss">
.list-item {
  a {
    color: #000;
    width: 7.5rem;
    height: 101px;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
  .img-box {
    width: 1.6rem;
    height: 80px;
    line-height: 80px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  a .content {
    width: 5.3rem;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-size: 16px;
      height: 48px;
      color: #666;
    }
  }
}
.m-t {
  margin-top: 50px;
  .spiner {
    display: block;
    width: 0.75rem;
    margin: 0 auto;
  }
  p {
    font-size: 12px;
    text-align: center;
    margin: 10px 0 50px;
  }
}
</style>
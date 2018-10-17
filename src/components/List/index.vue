<template>
    <div>
        <Header></Header>
        <ul class=" m-t">
            <router-link to="/">
                <li v-for="(item,index) in currentValue" :key="index" class="list-item">
                    <div class="img-box">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="content">
                        <h3 class="content-title">{{item.title}}</h3>
                        <div class="bottom">
                            <span class="time">{{item.currentTime}}</span>
                            <span class="lookup">{{item.count}}</span>
                        </div>
                    </div>
                </li>
            </router-link>
            <mt-spinner type="fading-circle" class="spiner" v-if="isShow"></mt-spinner>
            <p v-else>没有更多数据</p>
        </ul>
    </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  props: {
    data: {
      type: Array
    }
  },

  components: {
    Header
  },
  data() {
    return {
      currentValue: [],
      isShow: true
    };
  },
  methods: {},
  watch: {
    data(val) {
      return (this.currentValue = val);
    }
  },
  created() {
    console.log("current:", this.data);
  }
};
</script>

<style scoped lang="scss">
a .list-item {
  color: #000;
  width: 7.5rem;
  height: 101px;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
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
  .content {
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
  }
}
</style>
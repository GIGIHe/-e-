<template>
<div>
    <Header></Header>
    <List :data = "listData"></List>
    </div>
</template>

<script>
import Header from '@/components/Header'
import List from '@/components/List'
export default {
    components:{
Header,List
    },
  data() {
    return {
      listData: [],
      isShow:true
    };
  },
  methods: {
    getList() {
      this.$axios
        .get("/hhdj/news/newsList.do?page=1&rows=10&type=0")
        .then(res => {
            if(res.code==1)
          this.listData = res.rows;
          isShow:false
        });
    },
  },
  created() {
    this.getList();
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
    .img-box{
        width: 1.6rem;
        height: 80px;
        line-height: 80px;
        img{
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    .content{
        width: 5.3rem;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3{
            font-size: 16px;
            height: 48px;
            color: #666;
        }
    }
}
.m-t{
    margin-top: 50px;
    .spiner{
        display: block;
        width: 0.75rem;
        margin: 0 auto;
    }
    p{
        font-size: 12px;
        text-align: center;
    }
}
</style>
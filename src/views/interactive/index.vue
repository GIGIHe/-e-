<template>
  <div>
    <Header></Header>
    <div class="forum-wrap mt">
      <div class="forum-list" v-for="(item,index) in forumData" :key="index">
        <div class="details">
          <div class="userMsg fz-16">
            <img :src="item.header" alt="">
            <div class="user-time a-cl">
              <div class="username fz-18">{{item.username}}</div>
              <div class="time fz-12">
                <span>
                  <i class="iconfont icon-jishiqi"></i>
                  <span>{{item.currentTime}}</span>
                </span>
                <span>
                  <i class="iconfont icon-xiaolaba"></i>
                  <span>{{item.type}}</span>
                </span>
              </div>
            </div>
          </div>
          <div class="btn-wrap fz-12">
            党员互动
          </div>
        </div>
        <div class="content fz-16 a-cl">
          {{item.content}}
        </div>
        <div class="reply fz-14">
          <i class="iconfont icon-huifusixinpinglunxiaoxiliaotianxianxingmianxing f-cl"></i>
          回复:{{item.commentCount}}</div>
      </div>
    </div>
    <i class="iconfont icon-jiahao addComment cl-w"></i>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  data() {
    return {
      forumData: []
    };
  },
  components: {
    Header
  },
  methods: {
    getData() {
      this.$axios
        .get("/hhdj/forum/forumList.do?page=1&rows=10&type=0&cates=0")
        .then(res => {
          if (res.code == 1) {
            this.forumData = res.rows;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang = "scss">
.forum-wrap {
  background-color: #eee;
}
.forum-list {
  display: flex;
  flex-direction: column;
  width: 7.5rem;
  box-sizing: border-box;
  padding: 10px 5px;
  background-color: #fff;
  margin-bottom: 10px;
  .details {
    width: 100%;
    display: flex;
    height: 46px;
    justify-content: space-between;
  }
  .userMsg {
    display: flex;
    width: 5.4rem;
    img {
      width: 33.3px;
      height: 33.3px;
      display: block;
      margin: 6px 6px 0 0px;
    }
  }
}
.btn-wrap {
  border: 1px solid #f00;
  height: 30px;
  width: 1.2rem;
  line-height: 30px;
  border-radius: 14px;
  text-align: center;
  color: #f00;
}
.reply {
  display: flex;
  justify-content: flex-end;
}
.username {
  margin-bottom: 4px;
  font-weight: 500;
}
.content {
  margin-top: 10px;
}
.icon-jishiqi,
.icon-xiaolaba {
  font-size: 12px;
}
.f-cl {
  color: #555;
}
.addComment {
  position: fixed;
  bottom: 120px;
  right: 26px;
  font-size: 30px;
  background-color: #f00;
  width: 1.2rem;
  height: 1.2rem;
  text-align: center;
  line-height: 1.2rem;
  border-radius: 50%;
}
</style>
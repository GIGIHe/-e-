<template>
  <div>
    <Header></Header>
    <div class="comment mt">
      <!-- 根据id，得到原贴 -->
      <div class="forum-list">
        <div class="details">
          <div class="userMsg fz-16">
            <img :src=" commentData.header" alt="">
            <div class="user-time a-cl">
              <div class="username fz-18">{{ commentData.username}}</div>
              <div class="time fz-12">
                <span>
                  <i class="iconfont icon-jishiqi"></i>
                  <span>{{ commentData.currentTime}}</span>
                </span>
                <span>
                  <i class="iconfont icon-xiaolaba"></i>
                  <span>{{ commentData.type}}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="content fz-16 a-cl">
          {{ commentData.content}}
        </div>
      </div>
      <!-- 得到回复列表 -->
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="5">
        <div class="forum-list" v-for="(item ,index) in newData" :key="index">
          <div class="details">
            <div class="userMsg fz-16">
              <img :src=" item.header" alt="">
              <div class="user-time a-cl">
                <div class="username fz-18">{{ item.username}}</div>
                <div class="time fz-12">
                  <span>
                    <i class="iconfont icon-jishiqi"></i>
                    <span>{{ item.timeFormat}}</span>
                  </span>
                  <span>
                    <i class="iconfont icon-xiaolaba"></i>
                    <span>{{ item.type}}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="content fz-16 a-cl">
            {{ item.comment}}
          </div>
        </div>
        <!-- <mt-spinner type="snake" class="spiner" v-show="isFinished"></mt-spinner> -->
        <p class="fz-14 mb" v-show="isFinished">没有更多评论</p>
      </div>
    </div>
    <div class="add">
      <input type="text" placeholder="评论内容" v-model="content" class="i-text">
      <input type="submit" value="评论" class="i-submit cl-w" @click="addComment">
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      commentData: "",
      content: "",
      newData: [],
      isFinished: true,
      busy: true
    };
  },
  methods: {
    getData() {
      //通过遍历数组找到对应id的数据
      let id = this.$route.params.forumId;
      //   console.log("细节", id);
      console.log("enen ", this.commentList);
      this.commentList.forEach(item => {
        if (item.forumId == id) {
          console.log("haoaho");
          this.commentData = item;
          console.log("commentdata: ", this.commentData);
        }
      });
    },
    loadMore() {
      let id = this.$route.params.forumId;
      this.$axios
        .get(`/hhdj/forum/forumCommentList.do?page=1&rows=10&forum_id=${id}`)
        .then(res => {
          if (res.rows.length) {
            this.pn += 1;
            this.newData = this.newData.concat(res.rows);
          } else {
            this.busy = true;
            this.isFinished = false;
          }
        });
    },
    addComment() {
      let id = this.$route.params.forumId;
      let form = new FormData();
      form.append("forum_id", id);
      form.append("comment", this.content);
      this.$axios.post("/hhdj/forum/addComment.do", form).then(res => {
        if (res.code == 1) {
          // this.getCommentList()
          this.loadMore = [res.data, ...this.loadMore];
        }
        else{
          Toast('评论内容不能为空')
        }
      });
    }
  },
  computed: {
    ...mapState(["commentList"])
  },
  created() {
    this.loadMore();
    this.getData();
  }
};
</script>

<style scoped lang = "scss">
.add {
  width: 7.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  .i-text {
    flex: 5;
    display: block;
    height: 30px;
    border: 1px solid #f00;
    border-radius: 4px;
    outline: none;
    margin-left: 4px;
    text-indent: 1em;
  }
  .i-submit {
    flex: 1;
    margin-left: 4px;
    margin-right: 4px;
    background-color: #f00;
    outline: none;
    border: 1px solid transparent;
    border-radius: 4px;
    height: 32px;
    display: block;
    text-shadow: 1px 1px 1px #fff;
  }
}
.comment {
  min-height: 100vh;
  padding-top: 15px;
  background-color: #eee;
  margin-bottom: 35px;
}
.forum-list {
  display: flex;
  flex-direction: column;
  width: 7.5rem;
  box-sizing: border-box;
  padding: 10px 5px;
  background-color: #fff;
  margin-bottom: 10px;
  position: relative;
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
.username {
  margin-bottom: 4px;
}
.user-time {
  margin-left: 10px;
}
.content {
  margin-top: 10px;
}
</style>
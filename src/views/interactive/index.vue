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
        <div class="reply fz-14" @click="hanldeReply(item.forumId)">
          <i class="iconfont icon-huifusixinpinglunxiaoxiliaotianxianxingmianxing f-cl"></i>
          回复:{{item.commentCount}}</div>
      </div>
    </div>
    <i class="iconfont icon-jiahao addComment cl-w" @click="addComment"></i>
    <div class="comment" v-show="isShow">
      <div class="top"></div>
      <form @submit.prevent  class="form-area">
        <textarea name="" id="" cols="30" rows="10" class="text" v-model="content"></textarea>
        <input type="submit" value="发布" class="s-btn cl-w" @click="handleAdd">
        <input type="button" value="取消" @click="handleCancel" class="c-btn">
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      forumData: [],
      content: "",
      isShow: false
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
            this.$store.commit('CHANGE_COMMENT',res.rows)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    addComment() {
      this.isShow = true;
    },
    handleAdd() {
      let form = new FormData();
      form.append("content", this.content);
      form.append("type", 1);
      this.$axios.post("/hhdj/forum/saveForum.do", form).then(res => {
        if (res.code == 1) {
          console.log(res.msg);
          this.isShow = false;
          this.getData()
        } else {
          Toast("帖子内容不能为空");
        }
      });
    },
    handleCancel() {
      this.isShow = false;
    },
    hanldeReply(id){
      console.log(id);
     this.$router.push({name: 'detail', params: {forumId:id}})
      //  this.$router.push({ name: 'detail', params:{forumId:id}})
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
.comment {
  /* width: 7.5rem; */
  height: 100%;
  border: 1px solid #f00;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  animation: run .5s 0s 1;
  @keyframes run {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  .top {
    flex: 4;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 666;
  }
  .form-area {
    background-color: #eee;
    flex: 1;
    z-index: 666;
    padding: 10px;
    box-sizing: border-box;
    .text {
      width: 100%;
    }
    .s-btn {
      background-color: #f00;
    }

    .s-btn,
    .c-btn {
      outline: none;
      border: none;
      width: 1.1rem;
      height: 28px;
      margin-left: 4px;
    }
  }
}
</style>
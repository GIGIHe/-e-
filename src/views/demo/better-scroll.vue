<template>
    <div class="wraper">
        <div class="header"></div>
        <div class="content fz-16" ref="list">
            <ul>
                <li v-for="(item,index) in arr " :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="footer">
            <input type="text" v-model="msg" class="input-txt">
            <button class="sub-btn" @click="send">send</button>
            <button class="sub-btn" @click="$router.push('/')">send</button>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      msg: "",
      arr: [
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc"
      ],
      bs: null
    };
  },
  methods: {
    send() {
      this.arr.push(this.msg);
      this.msg = "";
      this.$nextTick(() => {
        let list = this.$refs.list;
        let lh = list.scrollHeight - list.offsetHeight;
        this.bs.refresh();
        this.bs.scrollTo(0, -lh, 300);
        console.log(this.bs);
      });
    },
    initScroll() {
      //dom初始化之后进行
      this.$nextTick(() => {
        let list = this.$refs.list;
        this.bs = new BScroll(list, { mouseWheel: true, scrollbar: true });
      });
    }
  },
  mounted() {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    document.getElementById("app").style.overflow = "auto";
    this.initScroll();
  },
  //解决影响其他页面的操作
  beforeDestory() {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    document.getElementById("app").style.overflow = "auto";
  },
    created() {
  console.log(this.bs);
    //   this.$nextTick(() => {
    //     this.initScroll();
    //   });
    }
};
</script>
<style>
html {
  height: 100%;
  overflow: hidden;
}
body {
  height: 100%;
  overflow: hidden;
}
#app {
  height: 100%;
  overflow: hidden;
}
</style>

<style scoped>
.wraper {
  height: 100%;
  width: 7.5rem;
  display: flex;
  flex-direction: column;
}
.header {
  height: 40px;
  width: 7.5rem;
  background-color: #f00;
}
.content {
  flex: 1;
  overflow: hidden;
  background-color: #abd;
}
.footer {
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
  display: flex;
}
.input-txt {
  flex: 1;
  height: 40px;
  outline: none;
  /* border: none; */
  -webkit-appearance: none;
}
.sub-btn {
  height: 44px;
  width: 60px;
  outline: none;
  background-color: #def;
  /* border: none; */
}
</style>
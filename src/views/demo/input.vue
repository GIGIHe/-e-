<template>
  <div class="wrapper-demo">
    <div class="head fz-20 cl-w">WELCOME</div>
    <div class="main-content fz-16 cl-w" ref="main">
      <ul>
        <li v-for="(item,index) in arr" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="foot">
      <input type="text" class="in-text" v-model="text" @keyup.enter="submit">
      <button class="btn" @click="submit">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i"
      ],
      text: ""
    };
  },
  methods: {
    submit() {
      this.arr.push(this.text);
      this.text = "";
      // 在nextTick中获取dom元素
      this.$nextTick(() => {
        let con = this.$refs.main; //获取dom元素
        con.scrollTop = con.scrollHeight;//元素scroll的距离等于自身的距离
        console.log(con.clientHeight);
        console.log(con.scrollTop);
        console.log(con.scrollHeight);
      });
    }
  }
};
</script>

<style>
html {
  height: 100%;
  overflow: hidden;
}
#app {
  height: 100%;
  overflow: hidden;
}
body {
  height: 100%;
  overflow: hidden;
}
</style>

<style scoped lang = "scss">
.wrapper-demo {
  width: 7.5rem;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .head {
    width: 7.5rem;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #f00;
  }
  .main-content {
    flex: 1;
    width: 7.5rem;
    background-color: salmon;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    li {
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      box-sizing: border-box;
      list-style-type: none;
    }
  }
  .foot {
    display: flex;
    height: 40px;
  }
  .in-text {
    line-height: 40px;
    -webkit-appearance: none;
    flex: 3;
    outline: none;
  }
  .btn {
    -webkit-appearance: none;
    flex: 1;
    outline: none;
    background-color: rgb(209, 161, 161);
    border: none;
  }
}
</style>
<template>
    <div>
        <Header></Header>
        <div class="comment-wrap mt">
            <h3 class="fz-18">评议须知</h3>
            <div class="fz-16 content" v-html="this.content"></div>
        </div>
        <div class="select">
            <select class="select-item cl-w">
                <option value="index" v-for="(item,index) in branchData" :key="index">{{item.branch}}</option>
            </select>
            <div class="next fz-16 cl-w" @click="handleNext()">下一步</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      vitalData: "",
      content: "",
      branchData: []
    };
  },
  methods: {
    //   获取评议须知
    getData() {
      this.$axios.get("/hhdj/nationComment/getComment.do").then(res => {
        this.vitalData = res;
        this.content = res.content;
      });
    },
    //获取所有的分支
    findAll() {
      this.$axios.get("/hhdj/branch/findAll.do").then(res => {
        if (res.code == 1) {
          this.branchData = res.rows;
        }
      });
    },
    handleNext(value){
        console.log(value);
    }
  },
  created() {
    this.getData();
    this.findAll();
  }
};
</script>

<style scoped lang = "scss">
.comment-wrap {
  padding-top: 10px;
  h3 {
    text-align: center;
  }
  .content {
    padding: 6px;
    color: #666;
  }
}
.select {
  width: 7.5rem;
  height: 100px;
  margin-top: 100px;
  text-align: center;
  display: flex;
  .select-item {
    flex: 4;
    margin-left: 4px;
  }
  .select-item,
  .next {
    background-color: #c50206;
    margin-right: 4px;
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
  }
  .next {
    flex: 1;
  }
}
</style>
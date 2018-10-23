<template>
    <div>
        <Header></Header>
        <div class="comment-wrap mt">
            <h3 class="fz-18">评议须知</h3>
            <div class="fz-16 content" v-html="this.content"></div>
        </div>
        <div class="select">
          <!-- 绑定当前分支的id -->
            <select class="select-item cl-w" v-model="branchData.id">
              <option value="0" selected = "selected" class="current">请选择分支</option>
                <option :value="item.id" v-for="(item) in branchData" :key="item.id" class="option-item">{{item.branch}}</option>
            </select>
            <div class="next fz-16 cl-w" @click="handleNext()">下一步</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      vitalData: "",//须知的全部内容，包括titledesc
      content: "",//须知内容
      branchData: []//分支数据
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
    handleNext(){
      // 获取当前分支的id
      let id = this.branchData.id;
        console.log('branch-id ',this.branchData.id);
        //跳到对应的id
        this.$router.push(`/partyNumber/${id}`)
        // this.$router.push({path:'/partyNumber',query:{select_branch:id}})

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
.current{
  background-color: purple;
}
.option-item{
  background-color: #fff;
  color: #666;
  border: 1px solid goldenrod
}
</style>
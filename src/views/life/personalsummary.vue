<template>
    <div>
        <Header></Header>
        <label for="update" class="upload-wrap ">
            <input type="file" class="upload" style='display:none' id="update" @change="handle">
            <img src="" alt="" id="showimg">
            <i class="iconfont icon-iconfont707 "></i>
        </label>
        <div class="save fz-20 cl-w" @click="submit">
            提交审核
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgsrc: ""
    };
  },
  methods: {
    handle(e) {
      var file = e.target.files[0];
      //file是个二进制
      let reader = new FileReader();
      let preview = document.querySelector("#showimg"); //定位到预览位置
      reader.onloadend = () => {
        // console.log(reader); //把图片转为base64码加载显示
        preview.src = reader.result;
        let imgsrc = reader.result.split(",")[1];
        // console.log(typeof imgsrc);
        let form = new FormData();
        form.append("myFile", imgsrc);
        console.log("file", file);
        // console.log("form",form);
        this.$axios.post("/hhdj/image/uploadBase64.do", form).then(res => {
          this.imgsrc = res.url;
          console.log("imgsrc:", this.imgsrc);
        });
      };

      reader.readAsDataURL(file);
    },
    submit() {
      let form = new FormData();
      form.append("pic_list", this.imgsrc);
      form.append("user_id", this.$store.state.token);
      this.$axios
        .post("/hhdj/nationComment/submitSummary.do", form)
        .then(res => {
          console.log(res.msg);
        });
    }
  }
};
</script>

<style scoped lang = "scss">
.upload-wrap {
  display: block;
  width: 2.1rem;
  height: 105px;
  line-height: 105px;
  text-align: center;
  font-size: 40px;
  border: 1px solid #eeeeee;
  margin-top: 60px;
  margin-left: 10px;
  /deep/ .icon-iconfont707 {
    font-size: 40px;
    text-align: center;
  }
}
.save {
  background-color: #c50206;
  height: 40px;
  line-height: 40px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 40px;
  text-align: center;
}
</style>
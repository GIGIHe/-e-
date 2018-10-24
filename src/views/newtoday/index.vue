<template>
    <div>
        <Header></Header>
        <div class="content mt">
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script>
import getUrl from "../../utils/getdata";
// var request = require("request");
// var cheerio = require("cheerio");
// var iconv = require("iconv-lite");
import cheerio from 'cheerio'

export default {
  data() {
    return {
      newData:{},
      content:''
    };
  },
  methods: {
    getData() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      month = month < 10 ? "0" + month : "" + month;
      day = day < 10 ? "0" + day : "" + day;
      var url = getUrl(month, day);
      // var result = iconv.decode(body, "GB2312");
      this.$axios.get(`/hhdj/proxy/proxy.do?url=${url}`).then(res => {
          var $ = cheerio.load(res);
          console.log("res: ",res);
          // console.log($.html())
          $("h1").remove();
        //  this.content = $(".p1_02").html;错误的写法
         this.content = $(".p1_02").html();
          console.log(this.content);
        
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang = 'scss' >
.content{
    width: 7.5rem;
    padding: 10px;
    box-sizing: border-box;
/deep/ h2{
    font-size: 20px;
    font-weight: 600;
}
/deep/ p{
      font-size: 16px;
      margin: 10px 0;
      line-height: 2;
}
}

</style>
<template>
  <div>
    <!-- 触发的事件 -->
    <!-- <Header @success ="change_userinfo"></Header> -->
    <Header></Header>
    <span class="edit fz-16 cl-w" v-show="!isEditing" @click="handleShow">编辑</span>
    <span class="save fz-16 cl-w" v-show="isEditing" @click="handleSave">保存</span>
    <ul class="list-wrap mt">
      <li class="list-item ">
        <span class="item-l">头像</span>
        <label for="img" class="item-r">
          <input type="file" style="display:none" id="img" @change="handle" :disabled="!isEditing">
          <img :src="userInfo.header" id="showimg">
        </label>
      </li>
      <li class="list-item">
        <span class="item-l">姓名</span>
        <!-- <span class="item-r" v-if="!isEditing()">{{userInfo.username}}</span> -->
        <input type="text" :disabled="!isEditing" v-model="userInfo.username">
      </li>
      <li class="list-item ">
        <span class="item-l">身份证</span>
        <span class="item-r">{{userInfo.idCard}}</span>
      </li>
      <li class="list-item">
        <span class="item-l">家庭住址</span>
        <span class="item-r" v-if="!isEditing">{{userInfo.hometown}}</span>
        <input type="text" v-else v-model="userInfo.hometown">
      </li>
      <li class="list-item">
        <span class="item-l">工作地址</span>
        <span class="item-r" v-if="!isEditing">{{userInfo.address}}</span>
        <input type="text" v-else v-model="userInfo.address">
      </li>
      <li class="list-item ">
        <span class="item-l">民族</span>
        <span class="item-r" v-if="!isEditing">{{userInfo.nation}}</span>
        <input type="text" v-else v-model="userInfo.nation">
      </li>
      <li class="list-item ">
        <span class="item-l">微信号</span>
        <span class="item-r" v-if="!isEditing">{{userInfo.wxNum}}</span>
        <input type="text" v-else v-model="userInfo.wxNum">
      </li>
      <li class="list-item ">
        <span class="item-l">QQ号</span>
        <span class="item-r">
          <span class="msg" v-if="!isEditing">{{userInfo.qqNum}}</span>
          <input type="text" v-else v-model="userInfo.qqNum">
        </span>
      </li>
      <li class="list-item ">
        <span class="item-l">性别</span>
        <span v-if="!isEditing">{{userInfo.sex==0?'女':'男'}}</span>
        <span class="item-r" v-else>
          <input type="radio" name="sex" value="1" v-model="userInfo.sex">男
          <input type="radio" name="sex" value="0" v-model="userInfo.sex">女
        </span>
      </li>
      <li class="list-item ">
        <span class="item-l">最高学历</span>
        <span class="item-r" v-if="!isEditing">{{userInfo.education}}</span>
        <input type="text" v-else v-model="userInfo.education">
      </li>
      <li class="list-item ">
        <span class="item-l">职称</span>
        <span class="item-r" v-if="!isEditing">{{userInfo.jobRank}}</span>
        <input type="text" v-else v-model="userInfo.jobRank">
      </li>
      <li class="list-item ">
        <span class="item-l">薪资水平</span>
        <span class="item-r" v-if="!isEditing">{{userInfo.salary}}</span>
        <input type="text" v-else v-model="userInfo.salary">
      </li>
      <li class="list-item ">
        <span class="item-l">入党时间</span>
        <span class="item-r" v-if="!isEditing">{{userInfo.joinPartyTime}}</span>
        <input type="date" v-else v-model="userInfo.joinPartyTime">
      </li>
      <li class="list-item ">
        <span class="item-l">党费最后缴纳时间</span>
        <span class="item-r" v-if="!isEditing">{{userInfo.lastPayTime}}</span>
        <input type="date" v-else v-model="userInfo.lastPayTime">
      </li>
      <li class="list-item ">
        <span class="item-l">当前身份</span>
        <span class="item-r" v-if="!isEditing">{{userInfo.partyStatus==1?'预备党员':userInfo.partyStatus==2?'党员':'积极分子'}}</span>
        <!-- <span class="item-r" v-if="!isEditing">{{partyStatus}}</span> -->
        <!-- <input type="text" v-else v-model="userInfo.partyStatus"> -->
        <select name="" id="" v-else v-model="userInfo.partyStatus">
          <option value="1">预备党员</option>
          <option value="2">党员</option>
          <option value="3">积极分子</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import upload from "@/components/uploading";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    upload
  },
  data() {
    return {
      headerUrl: "",
      isEditing: false
    };
  },
  methods: {
    handleSave() {
      //geshi
      // console.log(this.userInfo.header);
      let form = new FormData();
      let headerUrl = this.headerUrl ?this.headerUrl:this.userInfo.header;
      form.append("username", this.userInfo.username);
      form.append("header", headerUrl);
      form.append("hometown", this.userInfo.hometown);
      form.append("address", this.userInfo.address);
      form.append("nation", this.userInfo.nation);
      form.append("wxNum", this.userInfo.wxNum);
      form.append("qqNum", this.userInfo.qqNum);
      form.append("sex", this.userInfo.sex);
      form.append("education", this.userInfo.education);
      form.append("jobRank", this.userInfo.jobRank);
      form.append("joinPartyTime", this.userInfo.joinPartyTime);
      form.append("salary", this.userInfo.salary);
      form.append("lastPayTime", this.userInfo.lastPayTime);
      //  console.log('header00',this.userInfo.header);
      this.$axios
        .post("/hhdj/user/modifyInfo.do", form)
        .then(res => {
          if (res.code == 1) {
            // Toast('修改成功')
            this.$axios
              .get(
                "/hhdj/user/userInfo.do"
                // {
                //   heades:{
                //     token:this.$store.token
                //   }
                // }
              )
              .then(res => {
                //更新store中userInfo数据
                this.$store.commit("CHANGE_USER", res.data);
              });
            this.isEditing = false;
          }
        })
        .catch(err => {});
    },
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
          this.headerUrl = res.url;
          console.log("headerurl:", this.headerUrl);
        });
      };

      reader.readAsDataURL(file);
    },
    handleShow() {
      this.isEditing = true;
    }
  },

  // !isEditing() {
  //   if (this.$route.name == "updateinfo") {
  //     return (this.isShow = false);
  //   } else {
  //     return (this.isShow = true);
  //   }
  // },
  // updateImg() {
  //   this.$router.push("/uploading");
  // }

  //   created(){
  // this.!isEditing()
  //   },
  computed: {
    ...mapState(["userInfo"]),
    // 通过路由判断是否处于编辑状态
    // !isEditing() {
    //   if (this.$route.name == "updateinfo") {
    //     return (this.isShow = false);
    //   } else {
    //     return (this.isShow = true);
    //   }
    // },
    partyStatus() {
      switch (this.userInfo.partyStatus) {
        case "1":
          return "预备党员";
        case "2":
          return "党员";
        case "3":
          return "积极分子";
        default:
          break;
      }
    }
  }
};
</script>

<style scoped lang = "scss">
.list-wrap {
  font-size: 16px;
  width: 7.5rem;
  .list-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0 9px 0 5px;
    height: 50px;
    margin-bottom: 10px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    .item-r {
      width: 2.2rem;
      height: 48px;
      text-align: right;
      img {
        width: 0.9836rem;
        height: 40px;
        margin-top: 4px;
      }
    }
    input {
      max-width: 2.2rem;
      border: none;
      text-align: right;
      box-sizing: border-box;
      padding-right: 4px;
      outline: none;
      background-color: #fff;
    }
    /* .item-l {
    } */
  }
}
/* .d-n {
  display: none;
}
.d-in {
  display: inline-block;
  position: absolute;
  width: 100%;
  right: -5px;
  top: 16px;
  z-index: -333;
}
.ra-in {
  display: inline-block;
  position: absolute;
  width: 100%;
  right: 37px;
  top: 16px;
  z-index: -333;
} */
.edit,
.save {
  position: fixed;
  right: 13px;
  top: 11px;
  z-index: 999;
}
</style>
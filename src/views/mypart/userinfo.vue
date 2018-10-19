<template>
    <div>
        <Header></Header>
        <ul class="list-wrap mt">
            <li class="list-item ">
                <span class="item-l">头像</span>
                <span class="item-r"><img :src="userInfo.header" alt=""></span>
            </li>
            <li class="list-item">
                <span class="item-l">姓名</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.username}}</span>
                <input type="text" v-else v-model="userInfo.username">
            </li>
            <li class="list-item ">
                <span class="item-l">身份证</span>
                <span class="item-r">{{userInfo.idCard}}</span>
            </li>
            <li class="list-item">
                <span class="item-l">家庭住址</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.hometown}}</span>
                <input type="text" v-else v-model="userInfo.hometown">
            </li>
            <li class="list-item">
                <span class="item-l">工作地址</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.address}}</span>
                <input type="text" v-else v-model="userInfo.address">
            </li>
            <li class="list-item ">
                <span class="item-l">民族</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.nation}}</span>
                <input type="text" v-else v-model="userInfo.nation">
            </li>
            <li class="list-item ">
                <span class="item-l">微信号</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.wxNum}}</span>
                <input type="text" v-else v-model="userInfo.wxNum">
            </li>
            <li class="list-item ">
                <span class="item-l">QQ号</span>
                <span class="item-r">
                    <span class="msg" v-if="isEditing()">{{userInfo.qqNum}}</span>
                    <input type="text" v-else v-model="userInfo.qqNum">
                </span>
            </li>
            <li class="list-item ">
                <span class="item-l">性别</span>
                <span class="item-r">
                    <input type="radio" name="sex">{{userInfo.sex}} </span>
                <!-- <input type="radio" name="sex"> -->
            </li>
            <li class="list-item ">
                <span class="item-l">最高学历</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.education}}</span>
                <input type="text" v-else v-model="userInfo.education">
            </li>
            <li class="list-item ">
                <span class="item-l">职称</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.partyStatus}}</span>
                <input type="text" v-else v-model="userInfo.partyStatus">
            </li>
            <li class="list-item ">
                <span class="item-l">薪资水平</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.salary}}</span>
                <input type="text" v-else v-model="userInfo.salary">
            </li>
            <li class="list-item ">
                <span class="item-l">入党时间</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.joinPartyTime}}</span>
                <input type="text" v-else v-model="userInfo.joinPartyTime">
            </li>
            <li class="list-item ">
                <span class="item-l">党费最后缴纳时间</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.lastPayTime}}</span>
                <input type="text" v-else v-model="userInfo.lastPayTime">
            </li>
            <li class="list-item ">
                <span class="item-l">当前身份</span>
                <span class="item-r" v-if="isEditing()">{{userInfo.partyStatus}}</span>
                <input type="text" v-else v-model="userInfo.partyStatus">
            </li>
        </ul>
    </div>
</template>

<script>
import Header from "@/components/Header";
import { mapState } from "vuex";
export default {
  components: {
    Header
  },
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    isEditing() {
      if (this.$route.name == "updateinfo") {
        return (this.isShow = false);
      } else {
        return (this.isShow = true);
      }
    }
  },
  //   created(){
  // this.isEditing()
  //   },
  computed: {
    ...mapState(["userInfo"])
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
      height: 48px;
      img {
        width: 0.9836rem;
        height: 40px;
        margin-top: 4px;
      }
    }
    input {
      max-width: 1.8rem;
      border: none;
      text-align: right;
      box-sizing: border-box;
      padding-right: 4px;
      outline: none;
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
</style>
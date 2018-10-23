<template>
  <div>
    <Header></Header>
    <div class="userinfo-top mt">
      <!-- userInfo是一个对象即使为空也不为假 -->
      <img src="../../../public/mypartImg/头像@2x.png" alt="" v-if="!this.$store.state.userInfo.header">
      <img :src="this.$store.state.userInfo.header" alt="" v-else>
      <!-- <img :src="userInfo ? '../../../public/mypartImg/头像@2x.png' : 'userInfo.header'" > -->
      <router-link to="/login" class="a-cl" v-if="!this.$store.state.userInfo.branchId">你还没有登录，请登录</router-link>
      <p v-else class="cl-w">{{$store.state.userInfo.username}}</p>
    </div>
    <div class="userinfo-list">
      <div @click="handleInfo" class="a-cl allinfo">
        <i class="icon-l"><img src="../../../public/mypartImg/个人信息@2x.png" alt=""></i>
        <p class="userinfo">个人信息</p>
        <i class="ico-r"><img src="../../../public/mypartImg/形状-7-拷贝-5@2x.png" alt=""></i>
      </div>
      <div @click="handleClick" class="a-cl allinfo" data-link="/score">
        <i class="icon-l"><img src="../../../public/mypartImg/量化积分icon@2x.png" alt=""></i>
        <p>个人量化积分</p>
        <i class="ico-r"><img src="../../../public/mypartImg/形状-7-拷贝-5@2x.png" alt=""></i>
      </div>
      <div @click="handleClick" class="a-cl allinfo" data-link="/upword">
        <i class="icon-l"><img src="../../../public/mypartImg/修改密码icon@2x.png" alt=""></i>
        <p>修改密码</p>
        <i class="ico-r"><img src="../../../public/mypartImg/形状-7-拷贝-5@2x.png" alt=""></i>
      </div>
      <div @click="handleClick" class="a-cl allinfo" data-link="/payfee">
        <i class="icon-l"><img src="../../../public/mypartImg/党费png.png" alt=""></i>
        <p>党费缴纳</p>
        <i class="ico-r"><img src="../../../public/mypartImg/形状-7-拷贝-5@2x.png" alt=""></i>
      </div>
    </div>
    <div class="logout" @click="handleLogout">退出登录</div>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Tabbar from "@/components/Tabbar";
import { Toast } from "mint-ui";
// import { mapState } from "vuex";
export default {
  components: {
    Header,
    Tabbar
  },

  // data(){
  //   return{
  //     userData:""
  //   }
  // },
  // computed: {
  //   ...mapState(["userInfo"])
  // },
  methods: {
    handleLogout() {
      // const user = {};
      if (!this.$store.state.userInfo.header) {
        Toast("用户未登录，请登录");
        setTimeout(() => {
          this.$router.push("/login");
        }, 1500);
      } else {
        
            Toast("退出登录，请重新登录");
            setTimeout(() => {
              this.$router.push("/login");
            }, 1000);
            this.$store.commit("CHANGE_USER", {});
        
        
      }
    },
    handleInfo() {
      if (!this.$store.state.userInfo.branchId) {
        this.$router.push("/login");
      } else {
        this.$router.push("/userinfo");
      }
    },
    handleClick($event) {
      console.log("test: ", $event);
      console.log("test1: ", $event.currentTarget.__proto__);

      if (this.$store.state.userInfo.username) {
        //  currentTarget 事件对象本身
        const path = $event.currentTarget.dataset.link; //获取事件对象中的路由
        this.$router.push(path);
      } else {
        this.$router.push("/login");
      }
    }
  },
  created() {

  }
 
};
</script>

<style scoped lang = "scss">
.userinfo-top {
  background-color: #c50206;
  width: 7.5rem;
  height: 187.5px;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
  padding-top: 70px;
  a {
    color: #fff;
  }
  img {
    width: 1.25rem;
    height: 62.5px;
    display: block;
    margin: 0 auto;
    padding-bottom: 10px;
    border-radius: 50%;
  }
}
.userinfo-list {
  font-size: 20px;
  .allinfo {
    display: flex;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px solid #ddd;
    .icon-l {
      width: 0.64rem;
      height: 52px;
      margin-left: 5px;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .ico-r {
      width: 0.1534rem;
      height: 52px;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    p {
      width: 6rem;
      margin: 0 10px 0 10px;
    }
  }
}
.logout {
  font-size: 18px;
  width: 7.5rem;
  height: 40px;
  line-height: 40px;
  margin: 30px auto;
  text-align: center;
  background-color: rgb(223, 44, 44);
  border-radius: 4px;
  color: #fff;
  outline: none;
}
</style>
<template>
    <div>
        <Header></Header>
        <ul class="branch-list mt fz-18">
            <li class="list-item" v-for="(item,index) in numberList" :key="index" @click="getPersonMsg(item.id)">
                <div class="user-info">
                    <img :src="item.header" class="img-box">
                    <span class="username">{{item.username}}</span>
                </div>
                <div class="region">{{item.branchName}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data() {
    return{
      numberList: []
    };
  },
  methods: {
    //获取此分支下的所有参选党员
    getData() {
      //带着id，token去请求对应分支数据
      let id = this.$route.params.id;
      console.log(id);
      let token = this.$store.state.token;
      this.$axios
        .get(
          `/hhdj/nationComment/userList.do?select_branch=${id}&user_id=${token}&page=1&rows=20`
        )
        .then(res => {
          this.numberList = res.rows;
        });
    },
    //获取个人信息
    getPersonMsg(id){
        let token = this.$store.state.token;
        this.$axios.get(`/hhdj/nationComment/isComment.do?user_id=${token}&other_user_id=${id}&id=0&comment_id=0`).then(res=>{
            Toast(res.msg)
        })
    }

  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang = "scss">
.branch-list{
    width: 7.5rem;
    .list-item{
        display: flex;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ddd;
    }
    .user-info{
        flex: 2;
        display: flex;
        .img-box{
            width: 0.64rem;
            height:32px;
            display: block;
            margin: 7px 4px;
            border-radius: 50%;
        }
    }
    .region{
        flex: 5;
    }
}
</style>
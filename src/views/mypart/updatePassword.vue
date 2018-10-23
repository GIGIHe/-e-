<template>
    <div>
        <Header></Header>
        <div class="fz-20 mt">
            <li class="item">
                <p>旧密码:</p><input type="password" v-model="oldpassword"></li>
            <li class="item">
                <p>新密码:</p> <input type="password" v-model="newpassword"></li>
            <li class="item">
                <p>确认密码:</p> <input type="password"></li>
            <li class="item">
                <p class="submit cl-w" @click="save">确定</p>
            </li>
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      rangeValue: "",
      oldpassword: "",
      newpassword: ""
    };
  },
  methods: {
    save() {
      this.$axios
        .get(
          `/hhdj/user/updatePwd.do?newPwd=${this.newpassword}&oldPwd=${
            this.oldpassword
          }`
        )
        .then(res => {
          if (res.code == 1) {
            Toast(res.msg);
            setTimeout(() => {
                this.$router.push('/mypart')
            }, 1000);
          }
        });
    }
  }
};
</script>

<style scoped lang = "scss">
.item {
  height: 60px;
  padding: 10px;
  input {
    height: 30px;
    width: 6rem;
    margin: 10px auto 0;
    outline: none;
  }
  .submit {
    width: 6rem;
    height: 40px;
    line-height: 40px;
    margin-top: 30px;
    text-align: center;
    background-color: rgba(255, 0, 0, 0.63);
    border-radius: 4px;
  }
}
</style>
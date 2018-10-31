<template>
    <div>
        <label for="select"  class="wraper">
        <select id = "select">
            <option :value="index" v-for="(item,index) in arr" :key="index">{{item}}</option>
        </select>
        </label>
    </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
          "",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc",
        "abc"
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.arr.pop();
    });
  }
};
</script>

<style scoped>
.wraper{
    width: 200px;
    height: 50px;
}
#select {
   width: 200px;
    height: 50px;
}
</style>
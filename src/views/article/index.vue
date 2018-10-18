<template>
  <div>
    <News :data = "artcicleData"></News>
  </div>
</template>

<script>
import News from "@/components/News";
export default {
  components: {
    News
  },
  data() {
    return {
      artcicleData: {}
    };
  },
  methods: {
    getData() {
      let id = this.$route.params.id;
      this.$axios.get(`/hhdj/news/newsContent.do?newsId=${id}`).then(res => {
        if (res.code == 1) {
          this.artcicleData = res.data;
        }
      });
    }
  },
  created() {
    this.getData();
    console.log(this.$route.params);
  }
};
</script>

<style lang = "scss">

</style>
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $axios from './utils/index'
import MintUI from "mint-ui"//引入
import "mint-ui/lib/style.css"
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.prototype.$axios = $axios;
Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

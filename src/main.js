// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// import $axios from './utils/index'
import { $axios } from "./utils/index";
import Header from '../src/components/Header'//引入公共组件
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import infiniteScroll from 'vue-infinite-scroll'//无限加载
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.prototype.$axios = $axios;
Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(VueAwesomeSwiper);
Vue.use(infiniteScroll)
Vue.component('Header',Header)//全局注册组件，写成对象的格式，不能简写
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});

import Vue from "vue";
import Router from "vue-router";
const components = {
  layout: () => import("@/views/layout/index"),
  Login: () => import("@/views/login/index"),
  Article: () => import("@/views/article/index"),
  Newseye: () => import("@/views/newseye/index"),
  Life: () => import("@/views/life/index"),
  Oneclick: () => import("@/views/oneclick/index"),
  AutoPhoto: () => import("@/views/anytimephoto/index"),
  NewsDetail: () => import("@/views/newsDetail/index"),
  Notice: () => import("@/views/notice/index"),
  Mypart: () => import("@/views/mypart/index"),
  Showidentity: () => import("@/views/showidentity/index"),
  Anytimestudy: () => import("@/views/anytimestudy/index")
};
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      meta: {
        title: "首页"
      },
      component: components.layout
    },
    {
      path: "/login",
      meta: {
        title: "登录"
      },
      component: components.Login
    },
    {
      path: "/article/:id",
      name: "article",
      meta: {
        title: "详情"
      },
      component: components.Article
    },
    {
      path: "/newseye",
      name: "newseye",
      meta: {
        title: "信工新闻眼"
      },
      component: components.Newseye
    },
    {
      path: "/life",
      name: "life",
      meta: {
        title: "掌上组织生活"
      },
      component: components.Life
    },
    {
      path: "/oneclick",
      name: "oneclick",
      meta: {
        title: "党建一点通"
      },
      component: components.Oneclick
    },
    {
      path: "/autoPhoto",
      name: "autoPhoto",
      meta: {
        title: "随时拍"
      },
      component: components.AutoPhoto
    },
    {
      path: "/newsDetail/:id",
      name: "newsDetail",
      meta: {
        title: "新消息"
      },
      component: components.NewsDetail
    },
    {
      path: "/notice",
      name: "notice",
      meta: {
        title: "通知早知道"
      },
      component: components.Notice
    },
    {
      path: "/mypart",
      name: "mypart",
      meta: {
        title: "我的党建"
      },
      component: components.Mypart
    },
    {
      path: "/showidentity",
      name: "showidentity",
      meta: {
        title: "党员亮身份"
      },
      component: components.Showidentity
    },
    {
      path: "/anytimestudy",
      name: "anytimestudy",
      meta: {
        title: "随时随地学"
      },
      component: components.Anytimestudy
    }
  ]
});
router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;

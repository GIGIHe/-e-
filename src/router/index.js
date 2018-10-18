import Vue from "vue";
import Router from "vue-router";
const components = {
  layout: () => import("@/views/layout/index"),
  Login: () => import("@/views/login/index"),
  NewsDetail: () => import("@/views/article/index"),
  // Newseye: () => import("@/views/newseye/index"),
  Life: () => import("@/views/life/index"),
  // Oneclick: () => import("@/views/oneclick/index"),
  AutoPhoto: () => import("@/views/anytimephoto/index"),
  List: () => import("@/components/List/index"),
  Notice: () => import("@/views/notice/index"),
  Mypart: () => import("@/views/mypart/index"),
  FindPart: () => import("@/views/findPart/index")
  // Anytimestudy: () => import("@/views/anytimestudy/index")
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
      path: "/newsDetail/:id",
      name: "newsDetail",
      meta: {
        title: "详情"
      },
      component: components.NewsDetail
    },
    {
      path: "/neweyes",
      name: "list",
      meta: {
        title: "信工新闻眼",
        type: 8
      },
      component: components.List
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
        title: "党建一点通",
        type: 3
      },
      component: components.List
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
      path: "/notice",
      name: "notice",
      meta: {
        title: "通知早知道",
        type: 6
      },
      component: components.List
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
        title: "党员亮身份",
        type: 5
      },
      component: components.List
    },
    {
      path: "/anytimestudy",
      name: "anytimestudy",
      meta: {
        title: "随时随地学",
        type: 0
      },
      component: components.List
    },
    {
      path: "/system",
      name: "制度建设",
      meta: {
        title: "随时随地学",
        type: 4
      },
      component: components.List
    },
    {
      path: "/activity",
      name: "activity",
      meta: {
        title: "特色活动",
        type: 1
      },
      component: components.List
    },
    {
      path: "/study",
      name: "study",
      meta: {
        title: "政治学习",
        type: 7
      },
      component: components.List
    },
    {
      path: "/findpart",
      name: "findpart",
      meta: {
        title: "流动党员找组织",
        type: 7
      },
      component: components.FindPart
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

import Vue from "vue";
import Router from "vue-router";
const components = {
  layout: () => import("@/views/layout/index"),
  Login: () => import("@/views/login/index"),
  NewsDetail: () => import("@/views/article/index"),
  // Newseye: () => import("@/views/newseye/index"),
  Life: () => import("@/views/life/index"),
  Thoughts: () => import("@/views/life/thoughts"),
  Choice: () => import("@/views/life/lifeChoice"),
  Summary: () => import("@/views/life/personalsummary"),
  Discuss: () => import("@/views/life/dicuss"),
  PartyNumber: () => import("@/views/life/partyNumber"),
  // Oneclick: () => import("@/views/oneclick/index"),
  AutoPhoto: () => import("@/views/anytimephoto/index"),
  List: () => import("@/components/List/index"),
  Notice: () => import("@/views/notice/index"),
  InterActive: () => import("@/views/interactive/index"),
  Detail: () => import("@/views/interactive/detail"),
  Mypart: () => import("@/views/mypart/index"),
  Upword: () => import("@/views/mypart/updatePassword"),
  Payfee: () => import("@/views/mypart/Payfee"),
  Userinfo: () => import("@/views/mypart/userinfo"),
  Score: () => import("@/views/mypart/score"),
  FindPart: () => import("@/views/findPart/index"),
  Newtoday: () => import("@/views/newtoday/index")
  // Anytimestudy: () => import("@/views/anytimestudy/index")
};
Vue.use(Router);

const router = new Router({
  // mode: "history",需要后台支持
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
      path: "/newtoday",
      name: "newtoday",
      meta: {
        title: "党史上的今天"
      },
      component: components.Newtoday
    },
    {
      path: "/thoughts",
      name: "thoughts",
      meta: {
        title: "思想汇报"
      },
      component: components.Thoughts
    },
    {
      path: "/conclusion",
      name: "conclusion",
      meta: {
        title: "心得总结"
      },
      component: components.Thoughts
    },
    {
      path: "/summary",
      name: "summary",
      meta: {
        title: "个人总结"
      },
      component: components.Summary
    },
    {
      path: "/choice",
      name: "choice",
      meta: {
        title: "掌上生活总结"
      },
      component: components.Choice
    },
    {
      path: "/discuss",
      name: "discuss",
      meta: {
        title: "民主评议"
      },
      component: components.Discuss
    },
    {
      path: "/partyNumber/:id",
      name: "partyNumber",
      meta: {
        title: "参选党员"
      },
      component: components.PartyNumber
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
      path: "/interactive",
      name: "interactive",
      meta: {
        title: "党员云互动"
      },
      component: components.InterActive
    },
    {
      path: "/detail/:id",
      name: "detail",
      meta: {
        title: "评论详情"
      },
      component: components.Detail
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
      path: "/upword",
      name: "upword",
      meta: {
        title: "修改密码"
      },
      component: components.Upword
    },
    {
      path: "/payfee",
      name: "payfee",
      meta: {
        title: "党费支付"
      },
      component: components.Payfee
    },
    {
      path: "/userinfo",
      name: "userinfo",
      meta: {
        title: "个人信息"
      },
      component: components.Userinfo
    },
    {
      path: "/updateinfo",
      name: "updateinfo",
      meta: {
        title: "修改个人信息"
      },
      component: components.Userinfo
    },
    {
      path: "/score",
      name: "score",
      meta: {
        title: "个人量化积分"
      },
      component: components.Score
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
    },
    {
      path: "/uploading",
      name: "uploading",
      meta: {
        title: "上传图片"
      },
      component: components.uploading
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

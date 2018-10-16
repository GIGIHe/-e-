import Vue from "vue";
import Router from "vue-router";
const components = {
  Index: () => import("@/views/index/index"),
  Login: () => import("@/views/login/index"),
  Article:()=>import("@/views/article/index")
};
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      meta: {
        title: "首页"
      },
      component: components.Index
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
      name:"article",
      meta: {
        title: "详情"
      },
      component: components.Article
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

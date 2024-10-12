import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// NProgress.configure({ showSpinner: false });

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/index.vue"),
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@/views/home/index.vue"),
          meta: {
            title: "首页",
            keepAlive: false,
          },
        },
        {
          path: "about",
          name: "about",
          component: () => import("@/views/about/index.vue"),
          meta: {
            title: "关于",
            keepAlive: true,
          },
        },
        {
          path: "post",
          name: "post",
          component: () => import("@/views/post/layout.vue"),
          redirect: "/post/option-1",
          children: [
            {
              path: "option-1",
              name: "option-1",
              component: () => import("@/views/post/option1/index.vue"),
              meta: {
                title: "嵌套菜单1",
                keepAlive: true,
              },
            },
            {
              path: "option-2",
              name: "option-2",
              component: () => import("@/views/post/option2/index.vue"),
              meta: {
                title: "嵌套菜单2",
                keepAlive: true,
              },
            },
            {
              path: "option-3",
              name: "option-3",
              component: () => import("@/views/post/option3/index.vue"),
              meta: {
                title: "嵌套菜单3",
                keepAlive: true,
              },
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index.vue"),
      meta: {
        title: "登录",
      },
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "notFound",
    //   component: () => import("@/views/notFound/notFound.vue"),
    // }
  ],
});

router.beforeEach((_to, _from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to) => {
  NProgress.done();
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE;
});

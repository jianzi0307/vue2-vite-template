import { default as Vue } from "vue";

import { default as VueRouter } from "vue-router";

Vue.use(VueRouter);

const { VITE_BASE_URL } = import.meta.env;

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import("../views/demo/index.vue"),
    children: [
      {
        path: "/demo/timer",
        name: "Demo.Timer",
        component: () => import("../views/demo/Timer.vue"),
      },
      {
        path: "storage",
        name: "Demo.Storage",
        component: () => import("../views/demo/Storage.vue"),
      },
      {
        path: "net",
        name: "Demo.Net",
        component: () => import("../views/demo/Net.vue"),
      },
      {
        path: "element",
        name: "Demo.Element",
        component: () => import("../views/demo/Element.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: VITE_BASE_URL,
  routes: routes,
});

export default router;

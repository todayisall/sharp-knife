import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import BaseLayout from "@/components/layouts/BaseLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: BaseLayout,
    children: [
      {
        path: "/json/format",
        name: "jsonFormat",
        meta: {
          keepAlive: true,
        },
        component: () => import("@/views/json/Format.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/exception/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    redirect: "/404",
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export async function setupRouter(app: App) {
  app.use(router);
  await router.isReady();
}

import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { routes as carRoutes } from "@/modules/car";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: { name: "car" },
  },
  ...carRoutes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { routes as carRoutes } from "@/modules/car";
import { routes as errorRoutes } from "@/modules/error";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: { name: "car" },
  },
  ...carRoutes,
  ...errorRoutes,
  {
    path: "*",
    redirect: { name: "error" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

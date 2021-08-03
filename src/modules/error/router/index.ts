export default [
  {
    path: "/error",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/Error.vue"),
  },
];

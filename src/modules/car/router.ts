export default [
  {
    path: "/car",
    name: "car",
    component: () => import(/* webpackChunkName: "car" */ "./views/Car.vue"),
    redirect: { name: "car.search" },
    children: [
      {
        path: "search",
        name: "car.search",
        component: () => import(/* webpackChunkName: "search" */ "./views/Search.vue"),
      },
    ],
  },
];

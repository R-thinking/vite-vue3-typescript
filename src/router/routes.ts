import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/TestView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/* const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router; */

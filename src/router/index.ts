import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:title/:day",
    name: "detail",
    component: () => import("../views/DetailView.vue"),
  },
  {
    path: "/search-result",
    name: "searchResult",
    component: () => import("../views/SearchResultView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/case/:caseId",
    name: "CaseView",
    props: true,
    component: () =>
      import(/* webpackChunkName: "CaseView" */ "../views/CaseView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => {
    return {top: 0}
  }
});

export default router;

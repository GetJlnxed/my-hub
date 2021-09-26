import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Board from "@/views/Board";
import Sky from "@/views/Sky";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    /* redirect: { name: "nBoard" }, */
  },
  {
    path: "/board",
    name: "Board",
    component: Board,
  },
  {
    path: "/sky",
    name: "Sky",
    component: Sky,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;

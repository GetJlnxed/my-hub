import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Board from "@/views/Board";
import nBoard from "@/views/nBoard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: "nBoard" },
  },
  {
    path: "/board",
    name: "Board",
    component: Board,
  },
  {
    path: "/nboard",
    name: "nBoard",
    component: nBoard,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;

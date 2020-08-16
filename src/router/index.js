import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/os",
    name: "OS",
    component: () => import("../views/OS.vue")
  },
  {
    path: "/cpu",
    name: "CPU",
    component: () => import("../views/CPU.vue")
  },
  {
    path: "/gpu",
    name: "GPU",
    component: () => import("../views/GPU.vue")
  },
  {
    path: "/ram",
    name: "RAM",
    component: () => import("../views/RAM.vue")
  },
  {
    path: "/storage",
    name: "Storage",
    component: () => import("../views/Storage.vue")
  }
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

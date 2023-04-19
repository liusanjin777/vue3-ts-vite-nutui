import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const constantFiles = import.meta.globEager('./constantModules/*.ts')

let constantModules: Array<RouteRecordRaw> = []
Object.keys(constantFiles).forEach((key: string) => {
  let module =  constantFiles[key].default
  constantModules.push(...module)
})


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/HomeView.vue"),
  },
  ...constantModules
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

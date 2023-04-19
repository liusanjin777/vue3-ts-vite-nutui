import { RouteRecordRaw } from "vue-router"

const UserManagerRouter: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("../../views/login/login.vue"),
  }
]

export default UserManagerRouter
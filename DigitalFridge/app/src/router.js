import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Upload from "@/pages/Upload.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
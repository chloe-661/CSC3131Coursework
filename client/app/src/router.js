import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Upload from "@/pages/Upload.vue";
import Board from "@/pages/Board.vue";
import Boards from "@/pages/Boards.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/boards",
    name: "Boards",
    component: Boards,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/myboard:boardName",
    name: "MyBoard",
    component: Board,
    meta: {
      requiresAuth: true
    },
    props: {
      default: true,
      boardName: "",
    }
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

//This checks that the user is logged in when they access some pages
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
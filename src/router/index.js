import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ShopView from "@/views/ShopView";
import ContactView from "@/views/ContactView";
import NotFoundView from "@/views/NotFoundView";
import LoginView from "@/views/auth/LoginView";
import RegisterView from "@/views/auth/RegisterView";


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/shop",
    name: "Shop",
    component: ShopView,
  },
  {
    path: "/contactez-nous",
    name: "Contact",
    component: ContactView,
    alias: "/contact"
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

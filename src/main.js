import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import cors from "cors";
import axios from "axios";

import "./assets/logica.js";

// ROUTER

axios.interceptors.request.use(
  (config) => {
    // Si por alguna razón config.headers no existe, lo inicializamos
    if (!config.headers) {
      config.headers = {};
    }
    // Aquí puedes modificar los headers según necesites
    config.headers["Content-Type"] =
      config.headers["Content-Type"] || "application/json";
    return config;
  },
  (error) => Promise.reject(error),
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/mainPage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/loginForm.vue"),
    },
  ],
});

const app = createApp(App);

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   }),
// );
app.use(router);
app.mount("#app");

export default router;

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Kontakt from "./views/Kontakt.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Kontakt",
      name: "home",
      component: Kontakt
    }
  ]
});

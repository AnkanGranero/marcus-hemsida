import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Kontakt from "./views/Kontakt.vue";
import Typologi from "./views/Typologi.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Kontakt",
      name: "Kontakt",
      component: Kontakt
    },
    {
      path: "/Typologi",
      name: "Typologi",
      component: Typologi
    }
  ]
});

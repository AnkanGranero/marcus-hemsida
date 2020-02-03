import Vue from "vue";
import Router from "vue-router";
import Hem from "./views/Hem.vue";
import Kontakt from "./views/Kontakt.vue";
import Typologi from "./views/Typologi.vue";
import Coaching from "./views/Coaching.vue";
import Om from "./views/Om.vue"


Vue.use(Router);

export default new Router({
  
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Hem",
      component: Hem
    },
       {
      path: "/Om",
      name: "Om",
      component: Om
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
    },
    { path: "/Coaching",
    name: "Coaching",
    component: Coaching
  },
  
  ],
    scrollBehavior () {
  return { x: 0, y: 0 }
    }
});

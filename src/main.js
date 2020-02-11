import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMq from "vue-mq";
import Meta from "vue-meta"

Vue.config.productionTip = false;

Vue.use(Meta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta", 

  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity
  }
})

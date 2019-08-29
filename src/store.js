import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  
    images: [
        { name: "kontakt",
         url: "./images/kontakt.png"},
        { name: "coaching",
         url: "./images/coaching.jpg"},
         { name: "typologi",
         url: "./images/typologi.jpg"}


      ]
  },
  mutations: {},
  actions: {},
  getters: {
    images: state => {
      return state.images
    }
  }
});

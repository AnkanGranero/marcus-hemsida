import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  
    images: [
        { name: "Kontakt",
         url: "./images/Kontakt.png"},
        { name: "Coaching",
         url: "./images/Coaching.jpg"},
         { name: "Typologi",
         url: "./images/Typologi.jpg"}


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

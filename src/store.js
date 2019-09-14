import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  
    pages: [
       { name: "Home",
         image: "./images/Home.jpg",
         path: "/"
        },
        { name: "Kontakt",
         image: "./images/Kontakt.png",
         path: "/Kontakt"
        },
        { name: "Coaching",
         image: "./images/Coaching.jpg",
         path: "/Coaching"
        },
         { name: "Typologi",
         image: "./images/Typologi.jpg",
         path: "/Typologi"
        }
      ],
  },
  mutations: {},
  actions: {},
  getters: {
    pages: state => {
      return state.pages
    }
  }
});

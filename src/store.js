import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  
    pages: [
       { name: "Home",
         image: "./images/Home.jpg",
         imageMobile: "./images/Home-mobile-dark.jpg",
         path: "/"
        },
        { name: "Kontakt",
         image: "./images/Kontakt.png",
         imageMobile: "./images/Kontakt-mobile-dark.jpg",
         path: "/Kontakt"
        },
        { name: "Coaching",
         imageDesktop: "./images/Coaching-mobile.jpg",
         imageMobile: "./images/Coaching-mobile-dark.jpg",
         path: "/Coaching"
        },
         { name: "Typologi",
         image: "./images/Typologi.jpg",
          imageMobile: "./images/Typologi-mobile.jpg",
         path: "/Typologi"
        }
      ],
      logos: [
        {name: "von-eckermann",
        black: "logos/von-eckermann-black.png",
        white: "logos/von-eckermann-white.png"
      },
        {name: "hamburger",
        black: "logos/hamburger-black.png",
        white: "logos/hamburger-white.png"

        }
      ]
  },
  mutations: {},
  actions: {},
  getters: {
    pages: state => {
      return state.pages
    },
    logos: state => {
      return state.logos
    }
  }
});

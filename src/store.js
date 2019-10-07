import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  
    pages: [
       { name: "Home",
         image: "./images/Home.jpg",
         imageMobile: "./images/Home-mobile-bw.gif",
         path: "/",
         boxCount:1
        },
          { name: "About",
         image: "./images/Kontakt.png",
         imageMobile: "./images/Kontakt-mobile-bw.gif",
         imageBackground: "./images/Home-kvadrat-light.gif",
         path: "/About",
         boxCount: 3
        },
        { name: "Kontakt",
         image: "./images/Kontakt.png",
         imageMobile: "./images/Kontakt-mobile-bw.gif",
         imageBackground: "./images/Home-kvadrat-light.gif",
         path: "/Kontakt",
         boxCount: 1
        },
        { name: "Coaching",
         imageDesktop: "./images/Coaching-mobile.jpg",
         imageMobile: "./images/Coaching-mobile-dark.jpg",
         path: "/Coaching",
         boxCount: 2
        },
         { name: "Typologi",
         image: "./images/Typologi.jpg",
          imageMobile: "./images/Typologi-mobile.jpg",
         path: "/Typologi",
         boxCount: 5
        }
      ],
      logos: [
        {name: "von-eckermann",
        black: "logos/von-eckermann-black.png",
        white: "logos/von-eckermann-white.png",
        alt: "Marcus Von Eckermann Logo"
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

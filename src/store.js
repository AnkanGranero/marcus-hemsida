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
        },
        { name: "Kontakt",
         image: "./images/Kontakt.png",
         imageMobile: "./images/Kontakt-mobile-bw.gif",
         imageBackground: "./images/Home-kvadrat-light.gif",
         path: "/Kontakt",
         boxCount: 1
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
      ],
      socialMediaIcons: [
        { name:"facebook" ,
          url: "logos/facebook.gif",
        href: "www.facebook.com"},
        { name:"instagram" ,
          url: "logos/instagram.gif",
        href: "www.instagram.com"},
        { name:"youtube" ,
          url: "logos/youtube.gif",
        href: "www.youtube.com"},
        { name:"mail" ,
          url: "logos/mail.gif",
        href: "www.mail.com"}
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
    },
    socialMediaIcons: state => {
      return state.socialMediaIcons
    }
  }
});

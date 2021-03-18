import Vue from "vue";
import Vuex from "vuex";
import { createClient } from "./components/contentful.js";

createClient();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      contentfulPages: [],
  
    pages: [
       { name: "Hem",
         path: "/",
         typologipodden: "./typologipodden.jpeg"
        },
          { name: "Om",
         path: "/Om",
        },
        { name: "Coaching",
         path: "/Coaching",
        },
         { name: "Typologi",
         path: "/Typologi",
        },
        { name: "Kontakt",
         path: "/Kontakt",
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
          url: "logos/fb.gif",
        href: "https://www.facebook.com/voneckermanncoaching/"},
        { name:"instagram" ,
         href: "https://www.instagram.com/voneckermanncoaching/",
          url: "logos/instagram.gif"
        },
        { name: "pod",
          href: "https://voneckermann.podbean.com/",
          url: "logos/podbean.gif"
        },

        { name:"mail" ,
          url: "logos/mail.gif",
        href: "mailto:kontakt@voneckermann.com"}
      ],
      arrow: "logos/arrow.png",
      backgroundImages: [
        { url: "./images/chris.jpg"}
      ],
  
  },
  mutations: {
    mutatePages(state, payload) {
      state.contentfulPages = payload
     
      
    }
    
  },
  actions: {
      
  }
  ,
  getters: {
    pages: state => {
      return state.pages
    },
    contentfulPages: state => {
      return state.contentfulPages
    },
    logos: state => {
      return state.logos
    },
    socialMediaIcons: state => {
      return state.socialMediaIcons
    },
    backgroundImages: state => {
      return state.backgroundImages
    },
    arrow: state => {
      return state.arrow
    }
 
  },

});

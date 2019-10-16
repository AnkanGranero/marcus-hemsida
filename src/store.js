import Vue from "vue";
import Vuex from "vuex";
import { createClient } from "./components/contentful.js";

const client = createClient();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      contentfulPages: [],
  
    pages: [
       { name: "Home",
         image: "./images/Home.jpg",
         imageMobile: "./images/Home-mobile-dark.jpg",
         path: "/",
         boxCount:1
        },
          { name: "About",
         image: "./images/Kontakt.png",
         imageMobile: "./images/Kontakt.jpg",
         imageBackground: "./images/Home-kvadrat-light.gif",
         path: "/About",
         boxCount: 3
        },
        { name: "Coaching",
         imageDesktop: "./images/Coaching.jpg",
         imageMobile: "./images/Coaching.jpg",
         path: "/Coaching",
         boxCount: 2
        },
         { name: "Typologi",
         image: "./images/Typologi.jpg",
          imageMobile: "./images/Typologi.jpg",
         path: "/Typologi",
         boxCount: 5
        },
        { name: "Kontakt",
         image: "./images/Kontakt-desktop.jpg",
         imageMobile: "./images/Kontakt.jpg",
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
          url: "logos/fb.gif",
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
  mutations: {
    mutatePages(state, payload) {
      state.contentfulPages = payload
      console.log("payload",payload);
      
    }
    
  },
  actions: {
      async populateStore(contex) {
            try {
      let entries = await client.getEntries({
        content_type: "hemsida",
        include: 3
      });
      contex.commit("mutatePages",entries.items[0].fields.pages )
      console.log("hej");
      
      console.log("entries", entries.items[0].fields.pages.map(p => p.fields));

      
      
    } catch (err) {
      console.log(err);
    }
  }

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
    }
  },

});

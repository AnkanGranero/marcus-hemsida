<template>
  <div id="app">
    <Header-component class="desktop-header"></Header-component>
    <router-view :pageInfo="pageInfo" />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import { createClient } from "./components/contentful.js";

const client = createClient();

export default {
  name: "App",
  data() {
    return {
      pages: [],
    };
  },
  components: { HeaderComponent },
  metaInfo() {
    return {
      title: "voneckermann",
      meta: [
        {
          vmid: "description",
          name: "description",
          content:
            "Jag heter Marcus von Eckermann och är coach och expert på personlighetstyper",
        },
      ],
    };
  },
  methods: {
    async fetchPages() {
      try {
        let entries = await client.getEntries({
          content_type: "hemsida",
          include: 3,
        });
        this.pages = entries.items[0].fields.pages;
      } catch (err) {}
    },
  },
  computed: {
    thisPage() {
      return this.pages.filter((p) => p.fields.title === this.$route.name);
    },

    pageInfo() {
      let answer = {
        bodyText: [],
        overview: [],
        mobileImage: "",
        desktopImage: "",
        backgroundImage: "",
        link: {},
        references: [],
      };
      let page = this.thisPage ? this.thisPage[0] : "";
      if (page) {
        answer.bodyText = page.fields.bodyText ? page.fields.bodyText : null;
        answer.overview = page.fields.overview ? page.fields.overview : null;
        answer.references = page.fields.references
          ? page.fields.references
          : null;

        if (page.fields.mobileImage) {
          //försök få bort denna dubbel-if
          answer.mobileImage = page.fields.mobileImage.fields.file.url;
        }
        if (page.fields.desktopImage) {
          //försök få bort denna dubbel-if
          answer.desktopImage = page.fields.desktopImage.fields.file.url;
        }
        if (page.fields.backgroundImage) {
          //försök få bort denna dubbel-if
          answer.backgroundImage = page.fields.backgroundImage.fields.file.url;
        }

        if (page.fields.link) {
          answer.link = page.fields.link.fields;
        }
      }
      return answer;
    },
  },
  mounted() {
    this.fetchPages();
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

@font-face {
  font-family: "monradGrotesk";
  src: url("../public/fonts/Monrad Grotesk-Light.otf");
}

#app {
  overflow: hidden;
  line-height: 30px;
  font-family: "monradGrotesk";
}

h1 {
  font-size: 5em;
  font-weight: 300;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  @media only screen and (min-width: $laptop) {
    font-size: 4em;
  }
}
h2 {
  font-weight: 400;
  text-align: center;
  margin: 5% 0 7% 0;
  font-size: 35px;
  line-height: 55px;
  @media only screen and (min-width: $mobile) {
    font-size: 3em;
  }
  @media only screen and (min-width: $laptop) {
    font-size: 4em;
  }
}
h3 {
  /*   font-family: $headerFont;
 */
  font-size: 25px;
  text-align: center;
  font-weight: 400;
}

.von-eckermann {
  height: 80px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li {
  list-style: none;
  font-weight: 300;
  font-size: 16px;
}
ul {
  margin: 0;
}

a {
  text-decoration: none;
  color: black;
  font-weight: 300;
  cursor: pointer;
}

p {
  font-weight: 100;
  font-size: $small;
  line-height: 27px;
  @media only screen and (min-width: $mobile) {
    font-size: 16px;
  }
  @media only screen and (min-width: $laptop) {
    font-size: 20px;
  }
}

ul {
  /* white-space: nowrap; */
  font-size: 20px;
}
</style>

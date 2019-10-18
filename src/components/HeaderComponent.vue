<template>
  <div class="header-wrapper">
    <!-- <div v-if="sideNavIsVisible" class="overlay" @click="toggleSideNav"></div> -->
    <div class="top-container">
      <div class="header-top">
        <img class="logo" :src="eckermannLogo" alt />
        <div class="links">
          <router-link v-for="page in pages" :key="page.name" :to="page.path">{{page.name}}</router-link>
        </div>
        <img class="hamburger" :src="hamburgerLogo" @click="toggleOverlay" />
      </div>
      <div class="socialMediaIcons">
        <a v-for="(icon, index) in icons" v-bind:key="index" :href="icon.href">
          <img :src="icon.url" :alt="icon.name" class="icon" />
        </a>
      </div>
    </div>

    <!--     <div class="sidenav" :class="{active : sideNavIsVisible}">
      

    </div>-->
    <mobile-overlay
      v-on:clicked="toggleOverlay"
      :overlayIsVisible="overlayIsVisible"
      :eckermannLogo="eckermannLogo"
    />
  </div>
</template>

<script>
import MobileOverlay from "./mobileOverlay";

export default {
  name: "HeaderComponent",
  components: { MobileOverlay },

  data() {
    return {
      overlayIsVisible: false,
      windowWidth: 0,
      windowHeight: 0,
      overlayIsVisible: false
    };
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },

    thisPage() {
      return this.$store.getters.pages.filter(
        i => i.name === this.currentRouteName
      );
    },
    //alla getters från store kanske borde ersättas eller kanske vara en array som sätts av contentful
    pages() {
      return this.$store.getters.pages;
    },
    logos() {
      return this.$store.getters.logos;
    },
    icons() {
      return this.$store.getters.socialMediaIcons;
    },

    hamburgerLogo() {
      return this.logos.filter(l => l.name === "hamburger").map(l => l.white);
    },
    eckermannLogo() {
      const color = this.windowWidth > 1024 ? "black" : "white";
      return this.logos
        .filter(l => l.name === "von-eckermann")
        .map(l => l[color]);
    }
  },
  methods: {
    toggleOverlay() {
      this.overlayIsVisible = !this.overlayIsVisible;
    },
    handleResize() {
      this.windowWidth = screen.width;
      this.windowHeight = screen.height;
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";

.top-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
}

.header-wrapper {
  position: relative;
  z-index: 3;
  /*   overflow: hidden; */
}
.page-image {
  width: 100%;
}

.hamburger {
  height: 120%;
  @media only screen and (min-width: $pad) {
    display: none;
  }
}
.icon {
  height: 100%;

  height: 29px;
  margin: 10px;
  margin-bottom: 5px;
}
.socialMediaIcons {
  height: 40px;
}

/* .overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 0;
} */

.header-top {
  height: 10vw;
  max-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  font-size: 19px;
  /*   background: rgba(0, 0, 0, 0.4); */

  width: -webkit-fill-available;
  border-bottom: 1px solid white;

  @media only screen and (min-width: $pad) {
    position: static;
    background: $background;
    box-shadow: 1px 2px 4px rgba(240, 240, 240, 0.3);
  }

  & a {
    font-weight: 200;
    font-size: 1.3em;
    color: #2c3e50;
    text-decoration: none;
  }
}

.logo {
  height: 150%;
}

.links {
  display: none;
  @media only screen and (min-width: $pad) {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-right: 5%;
  }
}
</style>
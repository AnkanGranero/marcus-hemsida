<template>
  <div class="header-wrapper">
    <div v-if="sideNavIsVisible" class="overlay" @click="toggleSideNav"></div>

    <div class="header-top">
      <img class="von-eckermann" :src="vonEckermannLogo" alt />
      <div class="links">
        <router-link v-for="page in pages" :key="page.name" :to="page.path">{{page.name}}</router-link>
      </div>
      <img class="hamburger" :src="hamburgerLogo" @click="toggleSideNav" />
    </div>

    <div class="sidenav" :class="{active : sideNavIsVisible}">
      <ul class="sidenav-list" @click.native="toggleSideNav">
        <li v-for="page in pages" :key="page.name">
          <router-link :to="page.path">{{page.name}}</router-link>
        </li>
      </ul>

      <!--       <img class="page-image" :src="thisPage[0].image" alt /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      sideNavIsVisible: false,
      windowWidth: 0,
      windowHeight: 0
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

    pages() {
      return this.$store.getters.pages;
    },
    logos() {
      return this.$store.getters.logos;
    },

    hamburgerLogo() {
      return this.logos.filter(l => l.name === "hamburger").map(l => l.white);
    },
    vonEckermannLogo() {
      const color = this.windowWidth > 1024 ? "black" : "white";
      return this.logos
        .filter(l => l.name === "von-eckermann")
        .map(l => l[color]);
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNavIsVisible = !this.sideNavIsVisible;
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

.header-wrapper {
  position: relative;
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
.sidenav {
  position: absolute;
  background: $background;
  right: 0;
  width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  transition: 0.2s ease-out;
  top: 86px;
  opacity: 0.95;
  overflow: hidden & ul {
    padding: 0;
    margin: 0;
    z-index: 2;
  }

  & li {
    padding: 20px 0 40px 0;
    margin-left: 0;
    border-bottom: 1px solid #ddcfcf;
    font-size: $medium;
  }
  & a {
    margin: 0 40px;
    position: absolute;
  }
}
.active {
  transform: width;
  width: 70%;
  /*   width: auto; */
}

.sidenav-list {
  position: relative;
  margin: 0;
  padding: 0;
}

.overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 0;
}

.header-top {
  height: 10vw;
  max-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  font-size: 19px;
  background: transparent;
  position: absolute;
  width: -webkit-fill-available;

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

.von-eckermann {
  height: 130%;
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
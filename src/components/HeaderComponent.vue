<template>
  <div class="header-wrapper">
    <div v-if="sideNavIsVisible" class="overlay" @click="toggleSideNav"></div>

    <div class="header-top">
      <img class="von-eckermann" src="/logos/von-eckermann-white.png" alt />
      <div class="links">
        <router-link v-for="page in pages" :key="page.name" :to="page.path">{{page.name}}</router-link>
      </div>
      <img class="hamburger" src="/logos/hamburger-white.png" @click="toggleSideNav" />
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
      sideNavIsVisible: false
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
      console.log("screen width", screen.width);
      return this.$store.getters.logos;
    },
    hamburgerLogo() {
      console.log("logor", this.logos);
      /*  this.logos.filter(logo => logo.name === "hamburger"); */
    },
    vonEckermannLogo() {
      /* this.logo.filter(logo => logo.name === "von-eckermann"); */
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNavIsVisible = !this.sideNavIsVisible;
    }
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
  height: 5vh;
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
  }

  & a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
}

.von-eckermann {
  height: 150%;
}

.links {
  display: none;
  @media only screen and (min-width: $pad) {
    display: flex;
    justify-content: space-between;
    width: -webkit-fill-available;
  }
}
</style>
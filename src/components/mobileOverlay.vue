<template>
  <div class="mobileOverlay" :class="{active:overlayIsVisible }" @click="$emit('clicked')">
    <ul class="sidenav-list">
      <li v-for="page in pages" :key="page.name">
        <router-link :to="page.path">{{page.name}}</router-link>
      </li>
    </ul>
    <img :src="eckermanLogo.white" :alt="eckermanLogo.alt" class="von-eckermann" />
  </div>
</template>

<script>
export default {
  name: "MobileOverlay",

  props: ["overlayIsVisible"],
  computed: {
    pages() {
      return this.$store.getters.pages;
    },
    eckermanLogo() {
      return this.$store.getters.logos.filter(
        l => l.name === "von-eckermann"
      )[0];
    }
  }
};
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
.mobileOverlay {
  background: $grey;
  position: fixed;
  right: 0;
  width: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  transition: 0.3s ease-out;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  z-index: 6;

  overflow: hidden;
}

.active {
  transform: width;
  height: 100%;
  width: 100%;
}
.sidenav-list {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 70px;
  a {
    color: white;
    position: relative;
    font-size: $large;
  }
}
.von-eckermann {
  align-self: center;
  padding-bottom: 5%;
}
</style>
<template>
  <div class="hem">
    <Hero
      :propName="name"
      :mobileImage="pageInfo.mobileImage"
      :desktopImage="pageInfo.desktopImage"
    ></Hero>
    <BodyComponent :propName="name" :pageInfo="pageInfo"></BodyComponent>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import BodyComponent from "../components/BodyComponent";
import Hero from "@/components/Hero.vue";

export default {
  name: "Hem",
  data() {
    return {
      name: "Hem"
    };
  },
  components: {
    BodyComponent,
    Footer,
    Hero
  },
  props: {
    pageInfo: Object
  }
};
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
.welcome {
  background: $dark;
}
</style>

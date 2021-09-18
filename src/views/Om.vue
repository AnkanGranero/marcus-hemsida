<template>
  <div class="Om">
    <Hero
      :propName="name"
      :mobileImage="pageInfo.mobileImage"
      :desktopImage="pageInfo.desktopImage"
    />
    <BodyComponent :propName="name" :pageInfo="pageInfo"></BodyComponent>
    <div class="formContainer">
      <Mail />
    </div>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import BodyComponent from "../components/BodyComponent";
import Mail from "@/components/Mail.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Om",
  data() {
    return { name: "Om" };
  },
  components: {
    Hero,
    BodyComponent,
    Mail,
    Footer,
  },
  props: {
    pageInfo: Object,
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
</style>
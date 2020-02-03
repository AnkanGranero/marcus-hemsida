<template>
  <div class="hem">
    <Hero
      :propName="name"
      :mobileImage="pageInfo.mobileImage"
      :desktopImage="pageInfo.desktopImage"
    ></Hero>
    <PageBodyTest :propName="name" :pageInfo="pageInfo"></PageBodyTest>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import PageBodyTest from "../components/PageBodyTest";
import Hero from "@/components/Hero.vue";

export default {
  name: "Hem",
  data() {
    return {
      name: "Hem"
    };
  },
  components: {
    PageBodyTest,
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

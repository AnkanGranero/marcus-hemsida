<template>
  <div class="kontakt">
    <Hero
      :propName="name"
      :mobileImage="pageInfo.mobileImage"
      :desktopImage="pageInfo.desktopImage"
    />
    <div class="formContainer">
      <FormComp />
    </div>
    <Footer />
  </div>
</template>

<script>
import PageBodyTest from "../components/PageBodyTest";
import FormComp from "@/components/FormComp.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Kontakt",
  data() {
    return { name: "Kontakt" };
  },
  components: {
    PageBodyTest,
    FormComp,
    Hero,
    Footer
  },
  props: {
    pageInfo: Object
  }
};
</script>

<style lang="scss" >
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
.formContainer {
  background: $dark;
}
.logo {
  margin-top: 0;
}
</style>
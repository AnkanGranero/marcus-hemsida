<template>
  <div class="kontakt">
    <Hero :propName="name" :image="pageInfo.image" />
    <div class="formContainer">
      <FormComp />
    </div>
    <Footer />
  </div>
</template>

<script>
import PageBody from "@/components/PageBody.vue";
import FormComp from "@/components/FormComp.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Kontakt",
  data() {
    return { name: "Kontakt" };
  },
  components: {
    PageBody,
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
  padding-top: 10%;
}
.logo {
  margin-top: 0;
}
</style>
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
    <Footer :fade="false" />
  </div>
</template>

<script>
import BodyComponent from "../components/BodyComponent";
import FormComp from "@/components/FormComp.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Kontakt",
  data() {
    return { name: "Kontakt" };
  },
  components: {
    BodyComponent,
    FormComp,
    Hero,
    Footer,
  },
  props: {
    pageInfo: Object,
  },
  metaInfo() {
    return {
      title: "Marcus Eckermann",
      meta: [
        {
          vmid: "description",
          name: "Marcus Eckermanns hemsida",
          content: "Marcus von Eckermann kontakt",
        },
      ],
    };
  },
};
</script>

<style lang="scss" >
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
.formContainer {
  background: $dark;
  padding-top: 5%;
}
.logo {
  margin-top: 0;
}
</style>
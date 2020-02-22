<template>
  <div class="Typologi">
    <Hero
      :propName="name"
      :mobileImage="pageInfo.mobileImage"
      :desktopImage="pageInfo.desktopImage"
    />
    <BodyComponent :propName="name" :pageInfo="pageInfo"></BodyComponent>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import BodyComponent from "../components/BodyComponent";
import Footer from "@/components/Footer.vue";

export default {
  name: "Typologi",
  data() {
    return { name: "Typologi" };
  },
  components: {
    Hero,
    BodyComponent,
    Footer
  },
  computed: {
    pageInfoTest() {
      return this.pageInfo;
    }
  },

  props: {
    pageInfo: Object
  }
};
</script>
<template>
  <div class="Typologi">
    <Hero
      :propName="name"
      :mobileImage="pageInfo.mobileImage"
      :desktopImage="pageInfo.desktopImage"
    />
    <PageBodyTest :propName="name" :pageInfo="pageInfo" :backgroundImage="pageInfo.backgroundImage"></PageBodyTest>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import PageBodyTest from "../components/PageBodyTest";
import Footer from "@/components/Footer.vue";

export default {
  name: "Typologi",
  data() {
    return { name: "Typologi" };
  },
  components: {
    Hero,
    PageBodyTest,
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
<template>
  <div class="Typologi">
    <Hero
      :propName="name"
      :mobileImage="pageInfo.mobileImage"
      :desktopImage="pageInfo.desktopImage"
    />
    <PageBody :propName="name" :pageInfo="pageInfo" :backgroundImage="pageInfo.backgroundImage"></PageBody>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import PageBody from "../components/PageBody.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Typologi",
  data() {
    return { name: "Typologi" };
  },
  components: {
    Hero,
    PageBody,
    Footer
  },
  computed: {
    pageInfoTest() {
      console.log(this.pageInfo);

      return this.pageInfo;
    }
  },

  props: {
    pageInfo: Object
  }
};
</script>
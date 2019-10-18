<template>
  <div class="Typologi">
    <Hero :propName="name" :image="pageInfo.image" />
    <PageBody :propName="name" :pageInfo="pageInfo"></PageBody>
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
  props: {
    pageInfo: Object
  }
};
</script>
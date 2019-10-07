<template>
  <div class="home">
    <Hero :propName="name"></Hero>
    <Footer />
  </div>
</template>

<script>
import PageBody from "@/components/PageBody.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "home",
  data() {
    return {
      name: "Home"
    };
  },
  components: {
    PageBody,
    Footer,
    Hero
  }
};
</script>

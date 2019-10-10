<template>
  <div class="home">
    <Hero :propName="name"></Hero>
    <PageBody :propName="name">
      <template v-slot:box-1>
        <h2>Lorem ipsum</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <!--     </p>
          <p>-->
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </template>
    </PageBody>
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
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
.welcome {
  background: $dark;
}
</style>

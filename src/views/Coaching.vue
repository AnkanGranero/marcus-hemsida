<template>
  <div class="Coaching">
    <Hero
      :propName="name"
      :mobileImage="pageInfo.mobileImage"
      :desktopImage="pageInfo.desktopImage"
    />
    <PageBody :propName="name" :pageInfo="pageInfo"></PageBody>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import PageBody from "@/components/PageBody.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Coaching",
  data() {
    return { name: "Coaching" };
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
<style lang="scss">
.wrapper {
  display: flex;
}
</style>
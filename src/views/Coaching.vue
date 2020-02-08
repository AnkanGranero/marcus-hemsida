<template>
  <div class="Coaching">
    <Hero
      :propName="name"
      :mobileImage="pageInfo.mobileImage"
      :desktopImage="pageInfo.desktopImage"
    />
    <BodyComponent :propName="name" :pageInfo="pageInfo"></BodyComponent>
    <div class="formContainer">
      <Mail />
    </div>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import BodyComponent from "../components/BodyComponent";
import Mail from "@/components/Mail.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Coaching",
  data() {
    return { name: "Coaching" };
  },
  components: {
    Hero,
    BodyComponent,
    Mail,
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
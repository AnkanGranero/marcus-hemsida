<template>
  <div class="Om">
    <Hero :propName="name" :image="pageInfo.image" />
    <PageBody :propName="name" :boxCount="4">
      <template v-slot:box-1></template>
      <template v-slot:box-2></template>
    </PageBody>
    <div class="formContainer">
      <FormComp />
    </div>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import PageBody from "@/components/PageBody.vue";
import FormComp from "@/components/FormComp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Om",
  data() {
    return { name: "Om" };
  },
  components: {
    Hero,
    PageBody,
    FormComp,
    Footer
  },
  props: {
    pageInfo: Array
  }
  /*   computed: {
    image() {
      let answer;
      if (this.pageInfo[0]) {
        answer = this.pageInfo[0].fields.images[0].fields.file.url;
      }
      return answer;
    }
  } */
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
</style>
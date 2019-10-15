<template>
  <div class="page-wrapper">
    <div class="box-top">
      <h1 class="header">{{propName}}</h1>
      <img class="page-image-desktop" :src="renderedPage[0].image" alt />
      <img class="page-image-mobile" :src="renderedPage[0].imageMobile" alt />
    </div>
  </div>
</template>

    <script>
export default {
  name: "Hero",
  props: {
    propName: String
  },
  data() {
    return {
      name: "Hero"
    };
  },
  computed: {
    renderedPage() {
      return this.$store.getters.pages.filter(p => p.name === this.propName);
    }
  }
};
</script>
   <style lang="scss" >
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
.box-top {
  justify-content: center;
  align-items: center;
  background: $dark;
  display: flex;

  @media only screen and (min-width: $pad) {
    width: 100%;
    position: relative;
    top: 16vh;
  }
}

.page-image-desktop {
  display: none;
  @media only screen and (min-width: $pad) {
    display: unset;
  }
}
.page-image-mobile {
  width: 100%;
  @media only screen and (min-width: $pad) {
    display: none;
  }
}
.header {
  font-size: 60px;
  @media only screen and (min-width: $mobile) {
    position: absolute;
    font-size: 6em;
  }

  @media only screen and (min-width: $pad) {
    display: none;
  }
}
h1 {
  text-align: center;
  margin-top: 5%;
  line-height: 57px;
  color: white;
  animation-name: fadeIn;
  animation-duration: 2.5s;
}
</style>
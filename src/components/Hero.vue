<template>
  <div class="page-wrapper">
    <div class="box-top">
      <h1 class="header">{{ propName }}</h1>
      <img class="page-image-desktop" :src="desktopImageCropped" alt />
      <img class="page-image-mobile" :src="mobileImage" alt />
    </div>
  </div>
</template>

    <script>
//desktop-image 1024 x 671
export default {
  name: "Hero",
  props: {
    propName: String,
    mobileImage: String,
    desktopImage: String,
  },
  data() {
    return {
      name: "Hero",
    };
  },
  computed: {
    renderedPage() {
      return this.$store.getters.pages.filter((p) => p.name === this.propName);
    },
    desktopImageCropped() {
      return this.desktopImage + "?fit=crop&w=1920&h=757";
    },
  },
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

  @media only screen and (min-width: $laptop) {
    width: 100%;
    position: relative;
    overflow: hidden;
    min-height: 636px;
  }
}
.page-wrapper {
  min-height: 430px;
  background: $dark;
}

.page-image-desktop {
  display: none;
  @media only screen and (min-width: $laptop) {
    display: unset;
    width: 100%;
    align-self: flex-start;
  }
}
.page-image-mobile {
  width: 100%;
  @media only screen and (min-width: $laptop) {
    display: none;
  }
}
.header {
  font-size: 60px;
  position: absolute;

  @media only screen and (min-width: $mobile) {
    font-size: 5em;
  }
  @media only screen and (min-width: $laptop) {
    font-size: 7em;
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
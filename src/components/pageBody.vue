<template>
  <div class="page-wrapper">
    <div class="box-top">
      <h1 class="header">{{propName}}</h1>
      <img class="page-image-desktop" :src="renderedPage[0].imageDesktop" alt />
      <img class="page-image-mobile" :src="renderedPage[0].imageMobile" alt />
    </div>

    <div class="body-wrapper">
      <div class="box box-1">
        <slot name="box-1"></slot>
      </div>

      <div class="box box-2">
        <slot name="box-2" class="test"></slot>
      </div>

      <div class="box box-3">
        <slot name="box-3"></slot>
      </div>

      <div class="box box-4">
        <slot name="box-4"></slot>
      </div>

      <div class="box box-5">
        <slot name="box-5"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageBody",
  data() {
    return {
      boxes: []
    };
  },
  props: {
    propName: String,
    boxCount: Number
  },
  computed: {
    renderedPage() {
      return this.$store.getters.pages.filter(p => p.name === this.propName);
    }
  },
  methods: {
    /*     boxes(index) {
      console.log("props", this.boxCount);
      return "box-" + index;
    } */
  }
};
</script>


<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.box-top {
  justify-content: center;
  align-items: center;

  display: flex;
  /*   border-bottom: 1px solid white; */
  @media only screen and (min-width: $pad) {
    width: 100%;
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
}

.box {
  /*  border-top: 1px solid white; */
  background: rgb(97, 86, 86);
  background: #615672;
  padding: 5% 17%;
  color: white;
  p {
    color: antiquewhite;
  }
}

.header {
  position: absolute;
  @media only screen and (min-width: $pad) {
    display: none;
  }
}

.box-1 {
  @media only screen and (min-width: $pad) {
    position: absolute;
    animation-name: slide;
    animation-duration: 1s;
    top: 20%;
    background: rgba(248, 248, 248, 0.8);
    color: black;
    padding: 10%;
  }
}

.box-2 {
}
@keyframes slide {
  0% {
    top: -5%;
  }

  100% {
    top: 20%;
  }
}

h1 {
  text-align: center;
  margin-top: 5%;
  line-height: 57px;
  color: white;
}

.body-wrapper {
  display: flex;
  /* position: absolute; */
  flex-direction: column;
  top: -11%;

  ul {
    padding: unset;
    line-height: 55px;
  }
}
</style>

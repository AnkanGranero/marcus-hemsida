<template>
  <div class="page-wrapper">
    <div class="top-wrapper">
      <h1 class="header">{{propName}}</h1>
      <img class="page-image" :src="renderedPage[0].image" alt />

      <div class="top-box">
        <slot name="top-box"></slot>
      </div>
    </div>
    <div class="body-wrapper">
      <div class="middle-box">
        <slot name="body-text"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageBody",
  props: {
    propName: String
  },
  computed: {
    renderedPage() {
      console.log(
        "object",
        this.$store.getters.pages.filter(p => p.name === this.propName)
      );
      return this.$store.getters.pages.filter(p => p.name === this.propName);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.top-wrapper {
  @media only screen and (min-width: $pad) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
}

.header {
  position: absolute;
  @media only screen and (min-width: $pad) {
    display: none;
  }
}

.top-box {
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
}

.body-wrapper {
  max-width: 100%;

  display: flex;
  /* position: absolute; */
  flex-direction: column;
  top: -11%;

  padding: 17%;

  ul {
    padding: unset;
    line-height: 55px;
  }
}
</style>

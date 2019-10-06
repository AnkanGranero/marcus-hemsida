<template>
  <div class="page-wrapper">
    <div class="box-top">
      <h1 class="header">{{propName}}</h1>
      <img class="page-image-desktop" :src="renderedPage[0].imageDesktop" alt />
      <img class="page-image-mobile" :src="renderedPage[0].imageMobile" alt />
    </div>
    <div class="body-wrapper">
      <div v-for="(box, index) in boxesInUse" v-bind:key="index" class="box" :class="box.name">
        <slot :name="box.name"></slot>
      </div>
      <div class="box" :class="lastBox[0].name">
        <slot :name="lastBox[0].name" />
        <img :src="eckermannLogo.white" alt class="logo" />
      </div>
    </div>
  </div>
</template>
<script>
import JQuery from "jquery";
let $ = JQuery;
export default {
  name: "PageBody",
  data() {
    return {
      boxes: [
        { name: "box-1" },
        { name: "box-2" },
        { name: "box-3" },
        { name: "box-4" },
        { name: "box-5" }
      ],
      boxesInUse: [],
      lastBox: []
    };
  },
  props: {
    propName: String
  },
  computed: {
    renderedPage() {
      return this.$store.getters.pages.filter(p => p.name === this.propName);
    },
    numberOfBoxes() {
      return this.renderedPage[0].boxCount;
    },

    /*   lastBox() {
      return this.boxes[numberOfBoxes - 1];
    } */
    eckermannLogo() {
      return this.$store.getters.logos.filter(
        l => l.name === "von-eckermann"
      )[0];
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.populateBoxes();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    populateBoxes() {
      let boxes = [];
      console.log("numberOfboxes", this.numberOfBoxes);

      let b = this.numberOfBoxes - 1;
      for (let i = 0; i <= b; i++) {
        boxes.push(this.boxes[i]);
      }
      this.lastBox.push(boxes.splice(b, 1)[0]);
      console.log("lastbox", this.lastBox);

      this.boxesInUse = boxes;
      console.log(this.boxesInUse);
    },
    handleScroll() {
      /* this.scrollPos = window.scrollY; */
      /*     var el = document.querySelectorAll(".box"); */
      $(".box")
        .find("*")
        .each(function(i) {
          var bottomOfObject = $(this).position().top + $(this).outerHeight();
          var bottomOfWindow = $(window).scrollTop() + $(window).height();
          if (bottomOfWindow > bottomOfObject) {
            $(this).animate({ opacity: 1, top: 0 }, 1000);
          }
          /*   if (bottomOfWindow < bottomOfObject) {
            $(this).animate({ opacity: 0 }, 1000);
          } */
        });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
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
  display: flex;
  flex-direction: column;
  background: rgb(97, 86, 86);
  background: $dark;
  color: white;
  padding: 3% 17%;
  p {
    margin: 0;
  } /* 
  h2 {
    opacity: 0;
  }
  ul {
    opacity: 0;
  }
  img {
    opacity: 0;
  } */
}
.box * {
  opacity: 0;
  position: relative;
  top: 30px;
}

.box-1 {
  background: $dark;
  padding: 5% 17%;
  color: white;
  p {
    color: antiquewhite;
    color: white;
  }
}

.box-2 {
  p {
    color: white;
  }
}
.box-3 {
  background: $dark;
  padding: 5% 17%;
  color: white;
  p {
    color: antiquewhite;
  }
}

.box-4 {
  background: $light;
  p {
    color: white;
  }
}

.background-image {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: -2;
}

.logo {
  height: 80px;
  align-self: center;
  margin-top: 15%;
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
  animation-name: fadeIn;
  animation-duration: 2.5s;
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

@keyframes fadeIn {
  0% {
    margin-top: 9%;
    opacity: 0;
  }
  100% {
    margin-top: 5%;
    opacity: 1;
  }
}
</style>

<template>
  <div class="page-wrapper">
    <div class="body-wrapper">
      <div v-for="(box, index) in boxesInUse" v-bind:key="index" class="box" :class="box.name">
        <slot :name="box.name"></slot>
      </div>
      <div class="box" :class="lastBox[0].name">
        <slot :name="lastBox[0].name" />
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
    eckermannLogo() {
      return this.$store.getters.logos.filter(
        l => l.name === "von-eckermann"
      )[0];
    },
    contentfulPages() {
      return this.$store.getters.contentfulPages();
      console.log("hej");
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);

    this.populateBoxes();
  },
  mounted() {
    setTimeout(this.handleScroll, 500);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    populateBoxes() {
      let boxes = [];

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
      $(".box")
        .find("*")
        .each(function(i) {
          var bottomOfObject = $(this).position().top + $(this).outerHeight();
          console.log("bottomOfObjects", bottomOfObject);
          var bottomOfWindow = $(window).scrollTop() + $(window).height();
          console.log("bottomOfwindow", bottomOfWindow);

          if (bottomOfWindow > bottomOfObject * 0.8) {
            $(this).animate({ opacity: 1, top: 0 }, 2500);
          }
        });
    }
  }
};
</script>


<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
.box-top {
  justify-content: center;
  align-items: center;

  display: flex;
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
  }
  @media only screen and (min-width: $pad) {
    padding: 3% 22%;
  }
}
.box * {
  opacity: 0;
  position: relative;
  top: 15px;

  h2 {
    font-size: 40px;
    line-height: 44px;
  }
}
.box p,
li {
  font-size: $small;
  line-height: 27px;
  @media only screen and (min-width: $mobile) {
    font-size: 16px;
    line-height: 27px;
  }
}
li {
  margin: 10px;
}

.box-1 {
  background: $dark;

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

  color: white;
  p {
    color: antiquewhite;
    color: white;
  }
}

.box-4 {
  background: $dark;
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

.header {
  position: absolute;
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

.body-wrapper {
  display: flex;
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

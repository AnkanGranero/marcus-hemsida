<template>
  <div class="page-wrapper">
    <div class="body-wrapper">
      <div v-for="(textBox, index) in pageText" v-bind:key="index" class="box">
        <h2 v-text="textBox.header" />

        <div v-for="(text, index) in textBox.bodyText.content" :key="index" class="box">
          <p v-text="removeQuotes(text.content[0].value)"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import JQuery from "jquery";

let $ = JQuery;
export default {
  name: "PageBody",

  props: {
    propName: String,
    pageInfo: Object
  },
  computed: {
    renderedPage() {
      return this.$store.getters.pages.filter(p => p.name === this.propName);
    },
    eckermannLogo() {
      return this.$store.getters.logos.filter(
        l => l.name === "von-eckermann"
      )[0];
    },
    pageText() {
      return this.pageInfo.textBoxes;
    },

    contentfulRenderedPage() {
      return this.$store.getters.contentfulPages
        .filter(p => p.fields.title === this.propName)
        .map(item => item.fields);
    },
    mobileImage() {
      let mobileImage = this.contentfulRenderedPage.map(item => item.images[0]);
      let mobileImage2 = this.contentfulRenderedPage;
      console.log("images", mobileImage2[0]);

      /*  this.contentfulRenderedPage.map(item => item.images)[0] */

      /* .filter(item => item.fields.title.endsWith("mobile")) */

      return this.contentfulRenderedPage.images;
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    setTimeout(this.handleScroll, 500);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    removeQuotes(str) {
      return str.replace(/\u00A0/g, " ");
    },
    handleScroll() {
      $(".box")
        .find("*")
        .each(function(i) {
          var bottomOfObject = $(this).position().top + $(this).outerHeight();
          var bottomOfWindow = $(window).scrollTop() + $(window).height();

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

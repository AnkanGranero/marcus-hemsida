<template>
  <div class="page-wrapper">
    <div class="body-wrapper">
      <sticky-elevator
        :class="elevatorIsShowing"
        class="elevator"
        @click.native="scrollToTop"
      />
      <div class="box">
        <div v-for="(textBox, index) in pageText" v-bind:key="index">
          <h2
            v-if="textBox.fields.header"
            v-text="textBox.fields.header"
            class="zz-top"
          />

          <div class="bodyText" :class="onlyText(textBox)">
            <div class="innerText">
              <p
                v-for="(text, index) in textBox.fields.bodyText.content"
                :key="index"
                class="InnerBox zz-top"
                v-text="removeQuotes(text.content[0].value)"
              ></p>
            </div>
            <div class="innerText" v-if="textBox.fields.list">
              <ul class="innerList">
                <li
                  v-for="(text, index) in textBox.fields.list.content"
                  :key="index"
                  v-text="removeQuotes(text.content[0].value)"
                ></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="overview-container overViewButton" v-if="pageInfo.overview">
          <div
            class="overView-wrapper"
            v-for="(content, index) in pageInfo.overview"
            :key="index"
          >
            <router-link
              class="overViewHeader"
              tag="h2"
              :to="content.fields.header"
              >{{ content.fields.header }}</router-link
            >

            <p
              v-for="(text, index) in content.fields.bodyText.content"
              :key="index"
              class="InnerBox zz-top"
              v-text="removeQuotes(text.content[0].value)"
            ></p>
          </div>
        </div>
        <!--   <div class="textAndList-wrapper" v-if="pageInfo.textAndList">
          <div class="textAndList" v-for="(content, index) in pageInfo.textAndList" :key="index">
            <h3>{{ content.fields.header }}</h3>
            <li
              v-for="(list, index) in content.fields.list.content "
              :key="index"
              v-text="removeQuotes(list.content[0].value)"
            ></li>
        </div>-->
        <div>
          <h2 v-if="pageInfo.references" class="reference-header">
            Referenser
          </h2>
          <div v-for="(reference, index) in pageInfo.references" :key="index">
            <div class="references bodyText" :class="onlyText(reference)">
              <div class="innerText">
                <p
                  v-for="(text, index) in reference.fields.bodyText.content"
                  :key="index"
                  class="InnerBox zz-top"
                  v-text="removeQuotes(text.content[0].value)"
                ></p>
              </div>
            </div>
          </div>
        </div>

        <div class="link" v-if="pageInfo.link.link">
          <p v-text="pageInfo.link.text"></p>
          <a :href="pageInfo.link.link" target="_blank">
            <img :src="linkImg" :alt="pageInfo.link.name" />
          </a>
        </div>
      </div>
      <div class="background-overlay"></div>
    </div>
  </div>
</template>
<script>
import JQuery from "jquery";
import StickyElevator from "./StickyElevator";

let $ = JQuery;
export default {
  name: "BodyComponent",
  components: {
    StickyElevator,
  },
  data() {
    return {
      windowTop: 0,
    };
  },

  props: {
    propName: String,
    pageInfo: Object,
    backgroundImage: String,
  },

  computed: {
    renderedPage() {
      return this.$store.getters.pages.filter((p) => p.name === this.propName);
    },
    eckermannLogo() {
      return this.$store.getters.logos.filter(
        (l) => l.name === "von-eckermann"
      )[0];
    },
    pageText() {
      return this.pageInfo.bodyText;
    },
    linkImg() {
      return this.pageInfo.link
        ? this.pageInfo.link.picture.fields.file.url
        : "";
    },
    elevatorIsShowing() {
      return {
        active: this.windowTop > 850,
      };
    },

    contentfulRenderedPage() {
      return this.$store.getters.contentfulPages
        .filter((p) => p.fields.title === this.propName)
        .map((item) => item.fields);
    },
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
    onlyText(textBox) {
      return { onlyText: !textBox.fields.list };
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    removeQuotes(str) {
      return str.replace(/\u00A0/g, " ");
    },
    getImage(str) {
      if (str.image) {
        return str.image.fields.file.url;
      }
    },

    changeOpacity(value, className) {
      $(className).css({ opacity: value });
    },
    handleScroll() {
      this.windowTop = window.scrollY;
      var bottomOfWindow = $(window).scrollTop() + $(window).height();
      $(".box")
        .find("*")
        .each(function () {
          var bottomOfObject = $(this).position().top + $(this).outerHeight();

          if (bottomOfWindow > bottomOfObject * 0.8) {
            $(this).css({ opacity: 1, top: 0 });
          }
        });

      let totalHeight = document.body.clientHeight;

      switch (true) {
        case bottomOfWindow < 970:
          this.changeOpacity(0, ".background-overlay");
          $(".box").css({ "background-color": "rgb(61, 55, 55)" }); //this is $dark

          break;
        case bottomOfWindow < totalHeight * 0.6:
          $(".box").css({
            "background-color": "#2d2a2a",
            transition: "background-color 5s linear",
          });
          this.changeOpacity(0, ".background-overlay");

          break;

        case bottomOfWindow < totalHeight * 0.67:
          this.changeOpacity(0, ".background-overlay");
          $(".box").css({
            "background-color": "rgb(61, 55, 55)",
            transition: "background-color 2s linear",
          }); //this is $dark

          break;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";

.elevator {
  z-index: -2;
  pointer-events: none;
  visibility: none;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s linear;
}

.active {
  visibility: visible;
  pointer-events: visible;
  opacity: 1;
  display: flex;
  z-index: 3;
}

.background-overlay {
  background-size: cover;
  position: absolute;
  height: 100vh;
  width: -webkit-fill-available;
  z-index: 1;
  position: fixed;
  top: 0;
  opacity: 0;
  transition: opacity 3s;
  pointer-events: none;
}
.background-solid-overlay {
  background: black;
  width: -webkit-fill-available;
  background-size: cover;
  position: fixed;
  height: 1000px;
  z-index: 1;
  top: 0;
  opacity: 0;
  transition: opacity 3s;
}

.backgroundVar1 {
  background-size: cover;
  z-index: 1;
}

.box-top {
  justify-content: center;
  align-items: center;

  display: flex;
  @media only screen and (min-width: $laptop) {
    width: 100%;
  }
}
.zz-top {
  z-index: 2;
}

.page-image-desktop {
  display: none;
  @media only screen and (min-width: $laptop) {
    display: unset;
  }
}
.page-image-mobile {
  width: 100%;
}

.box {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgb(97, 86, 86);
  background-color: $dark;
  -webkit-transition: background-color 5s linear;
  -ms-transition: background-color 5s linear;
  transition: background-color 5s linear;

  color: white;
  padding: 3% 5%;
  margin: 0;

  .bodyText {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .innerText {
      width: 47%;
    }
    .innerList li {
      margin: 3% 0;
    }
  }
  .references {
    margin-top: 5%;
  }
  .reference-header {
    margin-bottom: 0;
  }
  .onlyText {
    justify-content: center;
  }

  p {
    margin: 0;
  }
  @media only screen and (min-width: $laptop) {
    padding: 3% 10%;
  }
}
.link {
  text-align: center;
  padding-top: 3%;
  p {
    margin: 2%;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    cursor: pointer;
  }
  img {
    width: 100%;
    @media only screen and (min-width: $laptop) {
      width: 50%;
    }
  }
}
.box * {
  opacity: 0;
  position: relative;
  transition: opacity 2.5s linear, top 2.5s linear;

  h2 {
    font-size: 40px;
    line-height: 44px;
    z-index: 3;
  }
}
.box p,
li {
  z-index: 2;
  font-size: $small;
  line-height: 20px;
  @media only screen and (min-width: $mobile) {
    font-size: 16px;
    line-height: 27px;
  }
  @media only screen and (min-width: $laptop) {
    font-size: 21px;
  }
}
//denna ligger i  box men kanske ska tänka över denna struktur
.overview-container {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5%;

  .overView-wrapper {
    border: white solid 1px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
  }

  @media only screen and (min-width: $tablet) {
    flex-direction: row;
    padding: 0 15%;
  }
  @media only screen and (min-width: $desktop) {
    padding: 0 20%;
  }

  .overViewButton {
    background: white;

    text-align: center;
    padding: 10px;

    border-radius: 5px;
    cursor: pointer;
    h2 {
      font-size: 23px;
      @media only screen and (min-width: $tablet) {
        font-size: 3em;
      }
    }
  }

  .overViewHeader {
    margin-bottom: 25px;
  }
}

.textAndList {
  text-align: center;
}

.background-image {
  position: absolute;
  /* height: 300px; */
  width: 100%;
  z-index: 1;
  left: 0;
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

.header {
  position: absolute;
  @media only screen and (min-width: $laptop) {
  }
}

h1 {
  text-align: center;
  margin-top: 5%;
  line-height: 57px;
  color: white;
  animation-name: fadeIn;
  animation-duration: 5s;
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
    margin-top: 6.5%;
    opacity: 0;
  }
  100% {
    margin-top: 5%;
    opacity: 1;
  }
}
</style>

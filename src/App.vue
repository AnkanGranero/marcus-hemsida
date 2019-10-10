<template>
  <div id="app">
    <Header-component class="desktop-header"></Header-component>

    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
export default {
  name: "App",
  components: { HeaderComponent }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_fonts.scss";

@import url("https://fonts.googleapis.com/css?family=Anton|Josefin+Sans|Muli|Nunito+Sans|Quicksand|Raleway&display=swap");
@import url("https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Be+Vietnam:100i,300,300i,400,400i,500&display=swap");
@import url("https://fonts.googleapis.com/css?family=Playfair+Display|Vidaloka&display=swap");
#app {
  /*  font-family: "Oswald", sans-serif; */
  font-family: "Be Vietnam", sans-serif;
  overflow: hidden;
  line-height: 30px;
}

h1 {
  font-family: $headerFont;
  font-size: 5em;
  font-weight: 300;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
}
h2 {
  font-family: $headerFont;
  font-weight: 400;
  text-align: center;
  margin-bottom: 15%;
  font-size: 3em;
  line-height: 55px;
  /*  color: #68d368; */
}
h3 {
  font-family: $headerFont;
  text-align: center;
}

.von-eckermann {
  height: 80px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li {
  list-style: none;
  font-weight: 300;
  font-size: 16px;
}
ul {
  margin: 0;
}

a {
  text-decoration: none;
  color: black;
  font-weight: 300;
}

p {
  font-weight: 100;
  font-size: $small;
  line-height: 27px;
  @media only screen and (min-width: $mobile) {
    font-size: 16px;
  }
  @media only screen and (min-width: $pad) {
    font-size: 20px;
  }
}

ul {
  /* white-space: nowrap; */
  font-size: 20px;
}
</style>

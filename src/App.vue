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
@import url("https://fonts.googleapis.com/css?family=Anton|Josefin+Sans|Muli|Nunito+Sans|Quicksand|Raleway&display=swap");

#app {
  font-family: "Muli", "Raleway", sans-serif;
  overflow: hidden;
  line-height: 25px;
}

h1 {
  font-size: 3em;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: black;
}

p {
  font-weight: 100;
}
</style>

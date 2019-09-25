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
@import url("https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&display=swap");
#app {
  font-family: "Oswald", sans-serif;
  overflow: hidden;
  line-height: 30px;
}

h1 {
  font-size: 3em;
  font-weight: 200;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
}
h2 {
  font-weight: 400;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li {
  list-style: none;
  font-weight: 100;
}

a {
  text-decoration: none;
  color: black;
  font-weight: 300;
}

p {
  font-weight: 100;
}
</style>

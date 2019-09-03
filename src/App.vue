<template>
  <div id="app">

     <Header-component class="desktop-header"></Header-component>

    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent"
export default {
  name: "App",
  components: { HeaderComponent }

}
</script>

<style lang="scss">


#app {
  font-family: "ambroise-std-1","ambroise-std-2",serif;
  
   width: 100%;}


#nav a.router-link-exact-active {
  color: #42b983;
}

li {
  list-style: none;
}

a{
  text-decoration: none;
  color: black
}
</style>

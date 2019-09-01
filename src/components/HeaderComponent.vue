<template>
        
    <div class="header-wrapper">
        <img class="von-eckermann" src="logos/von-eckermann.png" alt="">
    <div class="links">
    <router-link v-for="page in pages" :key="page.name" :to="page.path">{{page.name}}</router-link>
    </div>
    <img class="hamburger" src="/logos/hamburger.png">

    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    computed: {
        pages() {
            console.log(this.$store.getters.pages)
            return this.$store.getters.pages
        }
    }
}
</script>

<style lang="scss">

@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";

.hamburger {
    height: 120%;

            @media only screen and (min-width: $pad) {
      display: none

}
}

.header-wrapper {
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    font-size: 19px;
    background: $background;

     & a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
}


.von-eckermann {
    height: 200%;
}

.links {
       display:none;
        @media only screen and (min-width: $pad) {
      display: flex;
      justify-content: space-between;
      width: -webkit-fill-available;
}}

</style>
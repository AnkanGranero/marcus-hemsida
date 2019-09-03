<template>
        <div class="header-wrapper">
    <div v-if="sideNavIsVisible" class="overlay" @click="toggleSideNav"></div>


    <div class="header-top">
        <img class="von-eckermann" src="logos/von-eckermann.png" alt="">
    <div class="links">
    <router-link v-for="page in pages" :key="page.name" :to="page.path">{{page.name}}</router-link>
    </div>
    <img class="hamburger" src="/logos/hamburger.png" @click="toggleSideNav">
    </div>
        <div class="sidenav" :class="{active : sideNavIsVisible}">
          
        <ul class="sidenav-list">
            <li v-for="page in pages" :key="page.name">
            <router-link :to="page.path"
            @click.native="toggleSideNav">{{page.name}}
            </router-link></li>
        </ul>
       
        </div>
                <div class="img-wrapper">
    <img class="page-image" :src="thisPage[0].image" alt=""/>
           </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    data() {
        return {
            sideNavIsVisible: false,
        }
      },
        computed: {
            
    currentRouteName() {
        return this.$route.name;
    },

        thisPage() {
            return this.$store.getters.pages.filter(i => i.name === this.currentRouteName)
        },
        
        pages() {

            return this.$store.getters.pages
        }
    },
    methods: {
        toggleSideNav() {
            
            this.sideNavIsVisible=!this.sideNavIsVisible
            
        }
    },
}
</script>

<style lang="scss">

@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";

.header-wrapper {
    overflow: hidden;
}
.page-image {
    width: 100%;
}

.hamburger {
    height: 120%;

            @media only screen and (min-width: $pad) {
      display: none

}
}
.sidenav {
    
    position: absolute;
    background: $background;
    right:0;
    display: none;


    & ul {
      
        padding: 0;
        margin: 0;
        z-index: 2;
    }
    
    & li {
        padding: 20px;
        margin-left: 0;
        border-bottom: 1px solid #ddcfcf;
        font-size: $medium;
    }
    & a {
        margin: 0 40px;
    }
}
    .active {
    display: block;
    transform: translateX(0%);


}

.overlay {
    height:100vh;
    width: 100vw;
    position:absolute; 
    z-index: 0;
    
}



.header-top {
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
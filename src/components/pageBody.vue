<template>

<div class="body-wrapper">


    <div class="img-wrapper">
    <img class="page-image" :src="page[0].image" alt=""/>
        <h1>{{page[0].name}}</h1>
    </div>
</div>   

</template>
<script>
export default {
    name: "PageBody",
    props: { 
        imageProp: String
         },
    computed: {
        page() {
            return this.$store.getters.pages.filter(i => i.name === this.imageProp)
        }
    }
}
</script>


<style lang="scss" scoped>


h1 {
    text-align: center;
}
.page-image {
    width: 100%;
}
.img-wrapper {

}
</style>

<template>
<div class="body-wrapper">
    <div class="img-wrapper">
    <img class="page-image" :src="image[0].url" alt=""/>
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
        image() {
            console.log(this.$store.getters.images.filter(i => i.name === this.imageProp));
            return this.$store.getters.images.filter(i => i.name === this.imageProp)
        }
    }
}
</script>

<style lang="css" scoped>
.page-image {
    width: 100%;
}
.img-wrapper {

}
</style>

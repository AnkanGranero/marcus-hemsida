<template>
<div class="body-wrapper">
    <img class="page-image" :src="image[0].url" alt=""/>
</div>    
</template>
<script>
export default {
    name: "PageBody",
    props: [ "imageProp"],
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
    height: 100%;
}

</style>

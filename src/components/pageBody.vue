<template>

<div class="page-wrapper">



        <h1>{{propName}}</h1>
        <div class="body-wrapper">
            <slot></slot>
 
    </div>
</div>   

</template>
<script>
export default {
    name: "PageBody",
    props: { 
        propName: String
         },

}
</script>


<style lang="scss" scoped>


h1 {
    text-align: center;
}

.img-wrapper {

}
.body-wrapper {
    max-width: 100%;
    padding: 5%;
}
</style>

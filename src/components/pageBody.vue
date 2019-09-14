<template>
  <div class="page-wrapper">
    <img class="page-image" :src="renderedPage[0].image" alt />
    <h1>{{propName}}</h1>
    <div class="body-wrapper">
      <slot name="body-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageBody",
  props: {
    propName: String
  },
  computed: {
    renderedPage() {
      console.log(
        "object",
        this.$store.getters.pages.filter(p => p.name === this.propName)
      );
      return this.$store.getters.pages.filter(p => p.name === this.propName);
    }
  }
};
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

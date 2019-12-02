<template>
  <div class="elevator">
    <img :src="arrow" alt="arrow" class="arrow" />
  </div>
</template>
<script>
export default {
  name: "StickyElevator",

  computed: {
    arrow() {
      return this.$store.getters.arrow;
    }
  }
};
</script>
<style lang="scss" scoped>
.elevator {
  z-index: 3;
}

.arrow {
  top: 0;
  right: 0;
  position: fixed;
  height: 7%;
  padding: 2%;
}
</style>
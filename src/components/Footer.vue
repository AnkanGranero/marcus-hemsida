<template>
  <div class="footer">
    <img :src="logo.white" :alt="logo.alt" class="von-eckermann" />
  </div>
</template>

    <script>
export default {
  name: "Footer",
  props: {
    propName: String
  },
  data() {
    return {
      name: "Footer"
    };
  },
  computed: {
    logo() {
      return this.$store.getters.logos.filter(
        l => l.name === "von-eckermann"
      )[0];
    }
  }
};
</script>
   <style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";

.footer {
  background: $dark;
  display: flex;
  justify-content: center;
  padding-top: 5%;
}
.von-eckermann {
  align-self: center;
  padding-bottom: 5%;
}
</style>
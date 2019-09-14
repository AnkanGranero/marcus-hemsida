<template>
  <div class="home">
    <PageBody :propName="name"></PageBody>
  </div>
</template>

<script>
import PageBody from "@/components/PageBody.vue";
export default {
  name: "home",
  data() {
    return {
      name: "Home"
    };
  },
  components: {
    PageBody
  }
};
</script>

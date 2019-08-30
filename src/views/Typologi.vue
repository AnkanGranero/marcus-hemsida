<template>
  <div class="home">
<h1>Typologi</h1>
<PageBody :imageProp="name"></PageBody>
  </div>
</template>

<script>
import PageBody from "@/components/PageBody.vue"

export default {
  name: "Typologi",
  data() {
        return { name: "Typologi" }
  },
  components: {
    PageBody

  }
};
</script>
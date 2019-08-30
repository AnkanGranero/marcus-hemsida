<template>
  <div class="Coaching">
<h1>Coaching</h1>
<PageBody :imageProp="name"></PageBody>
  </div>
</template>

<script>
import PageBody from "@/components/PageBody.vue"

export default {
  name: "Coaching",
  data() {
        return { name: "Coaching" }
  },
  components: {
    PageBody

  }
};
</script>
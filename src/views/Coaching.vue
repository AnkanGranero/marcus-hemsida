<template>
  <div class="Coaching">

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
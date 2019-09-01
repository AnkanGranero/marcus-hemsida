<template>
  <div class="Kontakt">

<PageBody :imageProp="name"></PageBody>
  </div>
</template>

<script>
import PageBody from "@/components/PageBody.vue"

export default {
  name: "Kontakt",
  data() {
        return { name: "Kontakt" }
  },
  components: {
    PageBody

  }
};
</script>
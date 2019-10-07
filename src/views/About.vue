<template>
  <div class="About">
    <PageBody :propName="name" :boxCount="4">
      <template v-slot:box-1>
        <h2>Lorem Ipsum</h2>
        <p>
          Jag heter Marcus von Eckermann.
          <br />Jag är modig, rak och nyfiken.
          Jag har förmågan att bygga relation snabbt med lekfullhet som får andra att våga testa sig fram. Jag är avslappnad med ett leende som smittar.
          Jag har lätt att förstå andra och föder kreativitet i samtalet.
        </p>
      </template>
      <template v-slot:box-2>
        <p>
          Jag är en intuitiv/empatisk coach i första hand med förmågan till god analytisk förmåga.
          Jag är helt enkelt skicklig på att se helheten och höra vad det egentligen handlar om. Det kan vara skönt för vissa och lite läskigt för andra. Du ska dock veta att jag är ytterst respektfull i mitt sätt att föra mig i samtalet med dig och följer ICF:s etiska riktlinjer och kärnkompetenserna.
          Jag kan berätta mer om detta i ett introducerande samtal.
        </p>
      </template>
      <template v-slot:box-3>
        <h2>Kvalifikationer</h2>
        <ul>
          <li>1. Jag är diplomerad coach hos Leapfrog AB</li>
          <li>2. Utbildad i självledarskap och personlig utveckling</li>
          <li>3. Erfarenhet som chef</li>
          <li>4. Mitt eget verktyg: Typologi</li>
        </ul>
      </template>
    </PageBody>
    <div class="formContainer">
      <FormComp />
    </div>
    <Footer />
  </div>
</template>

<script>
import PageBody from "@/components/PageBody.vue";
import FormComp from "@/components/FormComp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  data() {
    return { name: "About" };
  },
  components: {
    PageBody,
    FormComp,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
</style>
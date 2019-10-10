<template>
  <div class="Coaching">
    <Hero :propName="name" />
    <PageBody :propName="name">
      <template v-slot:box-1>
        <h2>De generella grunderna för ett coachsamtal</h2>
        <ul>
          <li>1. Du definierar målet för samtalet, det kan vara en handlingsplan eller en insikt du vill uppnå.</li>
          <li>2. Coachingen tydliggör vad som är viktigt, undanröjer hinder på vägen och plockar upp lärdomar på vägen.</li>
          <li>3. Du och jag kliver in i ett partnerskap där vi utforskar, utmanar, ser möjligheter, sorterar och fokuserar på det viktiga i samtalet.</li>
        </ul>
      </template>
      <template v-slot:box-2>
        <p>
          Jag arbetar med utgångspunkten att du är experten i ditt liv.
          Jag hjälper dig att hitta lösningar på problem och gör det som är bra, ännu bättre genom frågor och verktyg.
          Jag hjälper dig att se klarare i ditt beslutsfattande.
          Förstå vad coaching innebär och boka ett förutsättningslöst möte med mig på 20 min.
        </p>
      </template>
    </PageBody>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import PageBody from "@/components/PageBody.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Coaching",
  data() {
    return { name: "Coaching" };
  },
  components: {
    Hero,
    PageBody,
    Footer
  }
};
</script>
<style lang="scss">
.wrapper {
  display: flex;
}
</style>
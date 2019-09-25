<template>
  <div class="Typologi">
    <PageBody :propName="name">
      <template v-slot:body-text>
        <h2>Mitt verktyg: Typologi</h2>
        <p>Jag är en coach med ett kraftfullt verktyg i portföljen som jag i sättet jag använder det på är relativt ensam om…</p>
        <h2>Vad kan jag göra med Typologi?</h2>
        <p>
          Vi börjar med att göra en analys av dig där vi sitter i ett samtal tillsammans.
          Jag kommer att ställa frågor, förklara begrepp och göra det jag kan få att få ett så optimalt grepp som möjligt om din personlighet.
          Du kommer att hjälpa mig och vara med mig i ett partnerskap på vägen mot att definiera med 100 % träffsäkerhet vilken personlighetstyp du är.
          Med detta kommer jag ha tillgång till att förstå dig ÄNNU bättre i samtalet oavsett om vi är olika och ser på världen på olika sätt.
          Det kan nämligen vara svårt för en coach att anpassa sitt lyssnande hela tiden till någon som inte passar dem.
          Det är ofta det som gör att coachen rekommenderar dig till en annan coach.
        </p>

        <p>
          Jag kan däremot skifta mitt lyssnande ut efter behov och efter en noggrann analys.
          Du kan vila lugnt i att jag optimerar vår process till en så effektiv grad som möjligt för att få ut maximalt med resultat.
          Det finns stora vinster med att ha en coach som är olik dig och även kan sätta sig in i din värld.
          Det finns såklart självklara vinster med att ha en coach som förstår dig. I vilket fall som helst är mitt jobb som coach att ställa frågor,
          hålla i processen och hjälpa dig hitta i ditt eget innehåll du tar med dig in i samtalen.
        </p>

        <p>
          Vidare om du är intresserad mer av typologi och skulle vilja lära dig mer kan jag erbjuda utbildning i detta
          så att du själv kan få ett bättre grepp om människorna omkring dig men också såklart dig själv.
        </p>

        <router-link to="/Kontakt" class="boka-tid">Boka tid</router-link>

        <h2>För er som vill läsa mer…</h2>

        <p>
          Vi ser världen på olika sätt, vi tar beslut på olika sätt och vi formar våra uppfattningar om vad som är rätt och fel ibland från helt olika platser.
          Tänk om vi kunde zooma ut och se oss själva hålla på? Bli medvetna om hur vi gör? Det går och jag har en modell för det.
        </p>

        <h3>Vill du veta din personlighetstyp och förstå ditt kognitiva språk?</h3>
        <p>Typologi är det jag kallar ett psykologiskt verktyg vars grund är byggt av Carl Jungs kognitiva funktioner. Bokstavskombinationerna och dess struktur kommer från Meyers & Briggs.</p>

        <ul>
          <li>Det finns 4 grundfunktioner:</li>
          <li>– Feeling (kännande)</li>
          <li>– Thinking (tänkande)</li>
          <li>– Sensing (sensationell)</li>
          <li>– Intuition (intuition)</li>
        </ul>

        <p>
          Sensing/intuition är ”uppfattande” funktioner och feeling/thinking är ”dömande” funktioner.
          Alla dessa har varsin introvert och extrovert sida. Det blir till 8 olika funktioner som utgör hela vårt psyke.
          Eftersom att det är 8 kognitiva funktioner så blir det 16 olika versioner av hur funktionerna visar sig, alltså 16 olika personlighetstyper.
        </p>

        <p>
          Vart kommer allt ifrån? Detta kommer ifrån den schweiziske framgångsrike psykologen Carl Jung och många verktyg vi
          använder oss av är baserade på mängder av kliniska observationer och år av analyser.
          Det arbetet är över 70 år gammalt och har under tiden fram till idag utvecklats enormt mycket av andra människor.
        </p>

        <p>Vad är det som skiljer mig från andra som använder samma modeller?</p>

        <p>
          Jag reser samtalet till en punkt som Carl Jung talade om, individualiseringsprocessen som också går att jämföras med ”transformation”. Jag tar ämnet längre och pekar mot funktionerna djupare/bredare. I analys och samtal kan jag göra människor medvetna om sig själva på nya sätt med ett coachande förhållningssätt. I en form av lärande och medvetandegörande process berättar jag om din personlighetstyp, om dina funktioner och hur de fungerar i förhållande till världen. Jag kommer att berätta mer i en kommande Youtube serie som ska släppas under årets gång.
          Om du vill veta mer nu på en gång så hör av dig till mig. Vi bokar in ett möte och personlighetstestar dig. Samtalet är förutsättningslöst.
        </p>
      </template>
    </PageBody>
  </div>
</template>

<script>
import PageBody from "../components/PageBody.vue";

export default {
  name: "Typologi",
  data() {
    return { name: "Typologi" };
  },
  components: {
    PageBody
  }
};
</script>
<template>
  <div class="form-wrapper">
    <form name="kontakt" method="POST" netlify netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="kontakt" />
      <label hidden>
        Fyll inte i denna om du är människa
        <input type="bot-field" />
      </label>

      <h2>Kontakta mig</h2>
      <div class="input-wrapper">
        <label>
          Namn
          <span>(måste anges)</span>
        </label>
        <input type="text" name="namn" />
      </div>

      <div class="input-wrapper">
        <label>
          email
          <span>(måste anges)</span>
        </label>
        <input type="text" name="email" />
      </div>
      <p>
        Vad gäller ditt ärende
        <span>(måste anges)</span>
      </p>
      <select type="selected" name="ärende">
        <option disabled value>Välj ärende</option>
        <option>Privat coaching</option>
        <option>Företag coaching</option>
        <option>Typologi</option>
      </select>

      <textarea name="fråga" />
      <button type="submit" class="submit" name="submit">Skicka</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComp",
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";

.form-wrapper {
  display: flex;
  flex-direction: column;
  padding: 5%;
  margin: 0 10%;
  background: white;
  @media only screen and (min-width: $tablet) {
    margin: 0 15%;
  }

  @media only screen and (min-width: $laptop) {
    margin: 0 25%;
  }

  input {
    outline: 0;
    border-width: 0 0 2px;
    border-bottom: 1px solid black;
    max-width: 250px;
    font-size: $small;
  }
  .submit {
    border: 1px solid grey;
    margin-top: 5%;
    height: 35px;
    width: 40%;
    font-size: 15px;
    /* align-self: center; */
  }
  span {
    color: grey;
  }

  select {
    margin-bottom: 5%;
    width: 150px;
    border-radius: 0;
    border: 1px solid black;
  }

  textarea {
    width: 100%;
    height: 100px;
    font-size: $small;
    border: 1px solid black;
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>

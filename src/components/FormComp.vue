<template>
  <div class="form-wrapper">
    <form method="post" name="my-email-form" action="form-to-email.php">
      <h3>Kontakta mig</h3>
      <div class="input-wrapper">
        <label for="namn">
          Namn
          <span>(måste anges)</span>
        </label>
        <input v-model="namn" name="namn" />
      </div>

      <div class="input-wrapper">
        <label for="mail">
          Mail
          <span>(måste anges)</span>
        </label>
        <input v-model="mail" name="mail" />
      </div>
      <p>
        <!--         Vad gäller ditt ärende
        <span>(måste anges)</span>
      </p>
      <select v-model="selected" name="ärende">
        <option disabled value>Välj ärende</option>
        <option>Privat coaching</option>
        <option>Företag coaching</option>
        <option>Typologi</option>
        </select>-->
        <span>Kommentar</span>
        <textarea v-model="message" name="message" />
        <button type="submit" class="submit" name="submit">Skicka</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComp",
  data() {
    return {
      namn: "",
      mail: "",
      selected: "",
      message: ""
    };
  }
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

  @media only screen and (min-width: $pad) {
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
    border: 1px solid black;
    margin: 5%;
    width: 40%;
    align-self: center;
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
/* sedan kanske jag kan skicka ett inputfälten i ett mail till marcus, fast blir det rätt med avsändaren? */
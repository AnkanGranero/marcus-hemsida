<template>
  <div class="form-wrapper">
    <input v-model="namn" />
    <input v-model="mail" />
    <select v-model="selected" id>
      <option disabled value>Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <textarea v-model="message" />
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
  background: rgb(212, 212, 212);

  display: flex;
  flex-direction: column;
  padding: 5%;

  input {
    border: 1px solid black;
    width: 20%;
    font-size: $small;
  }

  textarea {
    width: 100%;
    font-size: $small;
    border: 1px solid black;
  }
}
</style>
/* sedan kanske jag kan skicka ett inputfälten i ett mail till marcus, fast blir det rätt med avsändaren? */
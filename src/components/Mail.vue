   <template>
  <form>
    <h3>Maila mig</h3>
    <a :href="mail.href" class="mailLink">
      <img class="mail" :src="mail.url" alt />
    </a>
  </form>
</template>
<script>
export default {
  name: "Mail",
  computed: {
    mail() {
      let mail = this.$store.getters.socialMediaIcons.filter(
        i => i.name == "mail"
      )[0];
      return mail;
    }
  }
};
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_colors.scss";
@import "@/scss/_sizes.scss";
form {
  display: flex;
  flex-direction: column;
}
a {
  align-self: center;
  cursor: pointer;
}
.mail {
  height: 100px;
  @media only screen and (min-width: $tablet) {
    height: 150px;
  }
}
h3 {
  color: white;
  font-size: 30px;
  @media only screen and (min-width: $tablet) {
    font-size: 48px;
  }
}
a {
  z-index: 3;
}
</style>
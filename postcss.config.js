module.exports = {
  plugins: {
    autoprefixer: {}
  },
  css: {
    loaderOption: {
      sass: {
        data: `
        @import "@/scss/_variables.scss"
        `
      }
    }
  }
};

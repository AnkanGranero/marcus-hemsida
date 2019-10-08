module.exports = {
publicPath: "/marcus-hemsida",
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/scss/_variables.scss";`
        }
      }
    }
}
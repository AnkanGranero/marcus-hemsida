module.exports = {
publicPath: "/",
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/scss/_variables.scss";`
        }
      }
    },
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
}
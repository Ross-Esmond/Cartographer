var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
				use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              indentedSyntax: true
            }
          }]
      },
      {
        test: /\.ts?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  devtool: 'source-map'
}
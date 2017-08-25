var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
    libraryTarget: "umd"
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
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devtool: 'source-map'
}
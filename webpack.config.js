const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?t(s|sx)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'ts-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: '8080',
    static: './dist',
    open: true,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ToDo - React Application',
      template: 'index.html',
    }),
    new Dotenv(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
}

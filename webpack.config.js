const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
    alias: {
      '@type': path.resolve(__dirname, './src/types/'),
      '@constants': path.resolve(__dirname, './src/constants/'),
      '@apis': path.resolve(__dirname, './src/api/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@context': path.resolve(__dirname, './src/context/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.t(s|sx)$/,
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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    clean: true,
  },
};

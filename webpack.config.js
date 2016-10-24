const path              = require('path');
const webpack           = require('webpack');
const sassLint          = require('sasslint-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/app'
  ],
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new sassLint({
      glob: 'src/**/*.scss',
      failOnWarning: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    hot: true,
    contentBase: 'assets/',
  },
  module: {
    rules: [
      {
        test: /.*\.json$/,
        loader: 'json'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'url'
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        exclude: /node_modules/
      }
    ]
  }
}

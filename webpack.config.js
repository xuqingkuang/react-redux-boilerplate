const path              = require('path');
const webpack           = require('webpack');
const sassLint          = require('sasslint-webpack-plugin');
const PolyfillsPlugin   = require('webpack-polyfill-service-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8000',
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
    new PolyfillsPlugin({
      minify: true,
      features: {
        'Object.assign': {flags: ['always', 'gated']},
      }
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
    hotOnly: true,
    contentBase: 'assets/',
    host: '0.0.0.0',
    port: '8000'
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
        loaders: 'ts',
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

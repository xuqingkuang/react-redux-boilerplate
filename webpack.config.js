/**
 * 
 * Webpack config for version 4.
 * 
 * TODO: Waiting for rewrite with Typescript - https://webpack.js.org/configuration/configuration-languages/#typescript
 */

const path                = require('path');
const webpack             = require('webpack');
const PolyfillsPlugin     = require('webpack-polyfill-service-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: [
      'react-hot-loader/patch',
      './src'
    ]
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'eval',
  plugins: [
    new PolyfillsPlugin({
      minify: true,
      features: {
        "fetch": {flags: ['always', 'gated']},
      },
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    hot: true,
    contentBase: 'assets/',
    host: '0.0.0.0',
    port: 8000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loaders: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /.*\.json$/,
        loaders: ['json'],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loaders: ['url'],
      },
      {
        test: /\.js$/,
        loader: ['source-map-loader'],
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.tsx?$/,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
          'ts-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
}

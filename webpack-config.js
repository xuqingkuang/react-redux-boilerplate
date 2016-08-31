const path              = require('path');
const webpack           = require('webpack');
const failPlugin        = require('webpack-fail-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8000',
    'webpack/hot/only-dev-server',
    './src/app'
  ],
  devtool: "eval",
  debug: true,
  output: {
    path: path.resolve('./public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    failPlugin
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test: /.*\.json$/,
        loader: 'json'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts',
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loaders: [
          'style',
          'css?sourceMap',
          'postcss'
        ]
      }
    ]
  }
}

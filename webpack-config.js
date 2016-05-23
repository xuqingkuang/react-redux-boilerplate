const path              = require('path');
const webpack           = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
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
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {test: /.*\.json$/, loader: 'json'},
      {test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file"},
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/, include: __dirname}
    ]
  }
}

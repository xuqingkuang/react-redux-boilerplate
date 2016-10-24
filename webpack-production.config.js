const webpack           = require('webpack');
const config            = require('./webpack.config');

module.exports = Object.assign({}, config, {
  entry: [
    './src/app'
  ],
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
})

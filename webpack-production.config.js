const webpack           = require('webpack');
const config            = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');


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
    new CopyWebpackPlugin([
      {
        context: 'assets',
        from: '**/*'
      },
    ]),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
})

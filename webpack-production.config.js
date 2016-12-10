const webpack           = require('webpack');
const config            = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PolyfillsPlugin   = require('webpack-polyfill-service-plugin');

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
    new PolyfillsPlugin({
      minify: true,
      features: {
        'Object.assign': {flags: ['always', 'gated']},
        "fetch": {flags: ['always', 'gated']}
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
})

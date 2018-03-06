const webpack           = require('webpack');
const config            = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PolyfillsPlugin   = require('webpack-polyfill-service-plugin');

module.exports = Object.assign({}, config, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin([
      {
        context: 'assets',
        from: '**/*'
      },
    ]),
    new PolyfillsPlugin({
      minify: true,
      features: {
        "fetch": {flags: ['always', 'gated']}
      }
    })
  ]
})

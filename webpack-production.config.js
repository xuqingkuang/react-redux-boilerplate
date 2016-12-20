const webpack           = require('webpack');
const config            = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PolyfillsPlugin   = require('webpack-polyfill-service-plugin');

module.exports = Object.assign({}, config, {
  entry: {
    app: [
      './src/app'
    ]
  },
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
        "fetch": {flags: ['always', 'gated']}
      }
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json'),
      sourceType: 'var'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
})

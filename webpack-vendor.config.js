const path              = require('path');
const webpack           = require('webpack');
const PolyfillsPlugin   = require('webpack-polyfill-service-plugin');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'redux',
      'redux-thunk'
    ]
  },
  output: {
    path: path.resolve('./assets'),
    filename: '[name].js',
    library: "[name]_[hash]",
    libraryTarget: "var"
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new PolyfillsPlugin({
      minify: true,
      features: {
        "fetch": {flags: ['always', 'gated']}
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DllPlugin({
      path: './manifest.json',
      name: '[name]_[hash]', 
      context: __dirname
    })
  ]
};

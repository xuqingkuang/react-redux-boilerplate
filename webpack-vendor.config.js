const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk'
    ]
  },
  output: {
    path: "./assets",
    filename: '[name].js',
    library: "[name]_[hash]",
    libraryTarget: "var"
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DllPlugin({
      path: './manifest.json',
      name: '[name]_[hash]', 
      context: __dirname
    })
  ]
};

const path                = require('path');
const webpack             = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: [
      './src'
    ]
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'eval',
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
            },
          },
          'ts-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
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

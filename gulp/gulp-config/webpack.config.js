var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + 'dist/js',
    filename: 'bundle.js'
  },
  moudle: {
    rules: [{
      test: /\.js$/,
      loader: ['babel-loader'],
      exclude: /node_modules/,
      options: {
        presets: ['es2015']
      }
    }]
  }
}

const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'javascript/bundle.js'
  },
  module: {
    rules: [{
      test: /\.css/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader']
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }]
    },{
      test: /\.scss/,
      exclude: /node_modules/,
      use: extractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: function() {
              return [
                require('autoprefixer')()
              ]
            }
          }
        },'sass-loader']
      })
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
      favicon: './favicon.png'
    }),
    new extractTextWebpackPlugin('style/style.css')
  ]
}

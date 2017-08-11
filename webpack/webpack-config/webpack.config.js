const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'js/bundle.js',
    path: __dirname + '/dist'
  },
  // 需要的 loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      },{
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      },{
        test: /\.css$/,
        use: extractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?importLoaders=1',{
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')()
                ]
              }
            }
          }]
        })
      },{
        test: /\.scss$/,
        use: extractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader?importLoaders=1',{
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    require('autoprefixer')
                  ]
                }
              }
          },'sass-loader']
        })
      }
    ]
  },
  // 插件
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      title: 'webpack is a good bundle tool',
      inject: 'body',
      favicon: './favicon.png'
    }),
    new extractTextWebpackPlugin('styles/style.css')
  ]
}

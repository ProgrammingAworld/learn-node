var webpack =  require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ET = require('extract-text-webpack-plugin');
// var Uglify = require('uglify-js');

module.exports = {
  entry: {
    app:'./src/app.js',
    vendor:['jquery']
  },
  output: {
    filename:'[name].[chunkHash:5].js',
    path: __dirname + '/build'
  },
  devServer:{
    contentBase: __dirname + '/build',
    port: 8080,
    inline:true
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader:'babel-loader',
          options: { presets:['es2015'] }
        }],
      },{
        test:/\.css$/,
        use: ET.extract({
          fallback:'style-loader',
          use:['css-loader']
        })
      }
    ]
  },
  plugins:[
    new ET('bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names:['vendor','manifest']
    }),
    new HtmlWebpackPlugin({
      title:'demo',
      template:'index.html'
    })
  ]
}

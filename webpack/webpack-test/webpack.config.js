var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/scripts/main.js',
    index: './src/scripts/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].[hash].js',
    publicPath: 'http://baidu.com'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'head',
      title: 'webpack is good',
      date: new Date(),
      minify: {
        removeComments: true, // 去掉html中的注释
        collapseWhitespace: true // 去掉标签之间的空格
      }
    })
  ]
}

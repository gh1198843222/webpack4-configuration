const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')


module.exports = merge(common, {
  mode: 'development',
  devtool:'cheap-module-eval-source-map',
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
})

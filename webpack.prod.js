const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  optimization:{
    // minimize:false,      webpack4 默认开启js压缩
    splitChunks:{
      cacheGroups:{
        name:'vendor',
        filename:'common/vendor.js',
        // minChunks:2
      }
    }
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),       //提取css,注意版本问题
    // new webpack.optimize.CommonsChunkPlugin({}),  webpack4 已更新=>config.optimization.splitChunks
    
  ]
})

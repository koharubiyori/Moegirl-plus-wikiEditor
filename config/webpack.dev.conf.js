const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = async function devWebpackConfig(env) {
  return merge(await baseWebpackConfig(env), {
    mode: 'development',
    devtool: 'source-map',
    target: 'web',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  
    devServer: {
      contentBase: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../dist')
      ],
      publicPath:'/',
      host: '0.0.0.0',
      port: 9000,
      hot: true, // 开启热更新
      overlay: true, // 浏览器页面上显示错误
      // open: true, // 开启自动打开浏览器
      stats: {
        preset: 'errors-only',
        colors: true
      },
      hot: true,
      watchContentBase: true,
      disableHostCheck: true,
      inline: true,
    }
  })
}
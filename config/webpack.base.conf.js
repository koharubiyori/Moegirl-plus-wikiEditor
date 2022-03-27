const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')   // webpack4+的插件，替代extract-text-webpack-plugin
const webpackRules = require('./webpack.rules')

const devMode = process.env.NODE_ENV === 'development'

module.exports = async function baseWebpackConfig(env) {
  return {
    entry: {
      main: path.resolve(__dirname, '../src/main.ts'),
    },
  
    output: {
      filename: 'editor.js',
      path: path.resolve(__dirname, '../dist'),
      assetModuleFilename: 'assets/[name].[contenthash:8][ext]'
    },
  
    module: {
      rules: webpackRules
    },
  
    resolve: {
      extensions: ['.ts', '.js', '.json'], // 如果引入时没带后缀名，则会依次尝试这里定义的后缀名
      alias: {
        '~': path.resolve(__dirname, '../src')
      }
    },
  
    plugins: [
      // 将样式抽离到单独的css文件
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].css',
        chunkFilename: devMode ? '[id].css' : '[id].css',
      }),
      
      // 创建html文件
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        hash: true,
        chunks: ['vendors', 'main'],
        minify: devMode ? false : {
          removeComments: true, //移除HTML中的注释
          collapseWhitespace: true, //折叠空白区域 也就是压缩代码
          removeAttributeQuotes: true, //去除属性引用
        }
      })
    ],
  }
}
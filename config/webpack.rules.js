const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = [
  {
    test: /\.(js|ts)$/,
    loader: 'babel-loader',
    include: path.resolve(__dirname, '../src')
  },
  
  {
    test: /\.(c|sc)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development',  // 开启热更新
          // reloadAll: true // 如果 hmr 不工作, 请开启强制选项
        }
      },
      'css-loader', 
      'sass-loader', 
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('autoprefixer') // 添加默认前缀
          ]
        }
      },
    ]
  },

  {
    test: /\.(jpe?g|png|gif|svg|webp)$/,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 4 * 1024
      }
    }
  }
]
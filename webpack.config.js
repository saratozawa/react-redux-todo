const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: true,
              reloadAll: true,
            }
          },
          {
            loader: 'css-loader?modules',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new ExtractCssChunks(
      {
        filename: '[name].css',
        chunkFilename: '[id].css',
        orderWarning: true,
      }
    ),
    new webpack.HotModuleReplacementPlugin()
  ]
}
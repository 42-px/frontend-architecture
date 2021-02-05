/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const outputDirPath = path.resolve(process.env.BUID_OUTPUT_DIR || './build')
const entryPointPath = path.resolve('./src/index.tsx')
const indexHtmlPath = path.resolve('index.html')


module.exports = {
  entry: entryPointPath,
  output: {
    path: outputDirPath,
    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|ttf|otf|eot|woff(2)?)(\?.*)?$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },

    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(['API_BASE_URL']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: indexHtmlPath,
    }),
    new CopyPlugin([
      { from: 'public', to: './' },
    ]),
  ],
}

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const merge = require('webpack-merge')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const commonConfig = require('./webpack.common.config')

const devServerHost = process.env.DEV_SERVER_HOST || 'localhost'
const devServerPort = Number(process.env.DEV_SERVER_HOST) || 8080

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    hotOnly: true,
    host: devServerHost,
    port: devServerPort,
    historyApiFallback: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
})

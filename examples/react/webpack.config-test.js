/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const commonConfig = require('./webpack.common.config')


module.exports = merge(commonConfig, {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
})

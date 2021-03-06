const path = require('path');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',

  entry: {
    index: './src/index.tsx',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
	},
	
	plugins: [
    new Dotenv(),
  ],
})
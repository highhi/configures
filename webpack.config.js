const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

const SRC = './src/js';
const DIST = './dist/js';
const IS_DEV = process.env.NODE_ENV === 'development';

const entries = glob.sync(`${SRC}/**/*.bundle.js`).reduce((acc, file) => {
  acc[file.replace(SRC, '')] = file;
  return acc;
}, {});

module.exports = {
  entry: entries,
  output: { path: path.resolve(__dirname, DIST), filename: '[name]' },
  devtool: IS_DEV ? 'inline-source-map' : '',

  module: {
    rules: [
      { test: /\.js?$/, use: 'babel-loader', exclude: /node_modeules/ },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
  ],
};

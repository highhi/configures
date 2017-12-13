const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const SRC = './src/js';
const DIST = './dist/js';
const IS_DEV = process.env.NODE_ENV === 'development';

const entries = glob.sync(`${SRC}/**/*.bundle.js`).reduce((acc, file) => {
  acc[file.replace(SRC, '').replace('.js', '')] = file;
  return acc;
}, {});

module.exports = {
  entry: Object.assign(entries, {
    // vendor: ['jquery'], 
  }),

  output: {
    filename: '[name].[chunkhash].js',
    jsonpFunction: 'exampleJsonpFunctionName',
    path: path.resolve(__dirname, DIST),
  },

  devtool: IS_DEV ? 'inline-source-map' : '',

  module: {
    // rules: [
    //   // use bable
    //   { test: /\.js?$/, use: 'babel-loader', exclude: /node_modeules/ },
    //   // use typescript
    //   // { test: /\.tsx?$/, use: 'awesome-typescript-loader', exclude: /node_modlues/ },
    // ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),

    new CleanWebpackPlugin(['dist']),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // minChunks: Infinity, or
      minChunks: module => {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    })
  ],
  
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  }
};
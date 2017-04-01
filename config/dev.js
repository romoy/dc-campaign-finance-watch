'use strict';

let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');


let config = Object.assign({}, baseConfig, {
  entry: [
    'react-hot-loader',
    'whatwg-fetch',
    'webpack-dev-server/client?http://localhost:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()

  ],
  module: defaultSettings.getDefaultModules()
});

module.exports = config;

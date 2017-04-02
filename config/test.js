'use strict';

let path = require('path');
let srcPath = path.join(__dirname, '/../src/');

let baseConfig = require('./base');

module.exports = {
  devtool: 'eval',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'isparta-loader',
        include: [
          path.join(__dirname, '/../src')
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include:
          [
            path.join(__dirname, '/../src'),
            path.join(__dirname, '/../test')
          ]
      },
      {
        test: /\.md/,
        loader: 'html-loader!markdown-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx' ],
    alias: {
      helpers: path.join(__dirname, '/../test/helpers'),
      components: srcPath + 'components/',
      styles: srcPath + 'styles/',
      config: srcPath + 'config/' + process.env.REACT_WEBPACK_ENV,
      'react/lib/Object.assign': 'object-assign'
    }
  },
  plugins: []
};

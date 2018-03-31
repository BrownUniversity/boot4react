const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boot4react.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
};